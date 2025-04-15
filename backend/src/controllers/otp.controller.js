import twilio from 'twilio';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);
const otpStore = new Map(); // Temporary storage for OTPs

// **1. Request OTP**
export const requestOTP = async (req, res) => {
  const { phoneNumber } = req.body; // Receive phone number from frontend
  console.log(req.body);

  // Validate phone number (10 digits check)
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phoneNumber)) {
    return res
      .status(400)
      .json({ message: 'Enter a valid 10-digit phone number.' });
  }

  // Append +91 for Indian numbers
  const formattedPhoneNumber = `+91${phoneNumber}`;

  console.log(`Formatted phone number: ${formattedPhoneNumber}`); // ✅ Debugging

  const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
  otpStore.set(phoneNumber, otp); // ✅ Store OTP without +91 for verification

  console.log(`OTP for ${phoneNumber} is ${otp}`); // ✅ Log OTP

  try {
    // Send OTP using Twilio with +91 appended
    await client.messages.create({
      body: `Your OTP is ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: formattedPhoneNumber, // ✅ Send to correct format
    });

    return res
      .status(200)
      .json({ message: 'OTP sent successfully', otp: otp, success: true });
  } catch (error) {
    console.error('Twilio Error:', error.message);
    return res
      .status(500)
      .json({ message: 'Failed to send OTP', error: error.message });
  }
};

// **2. Verify OTP and Set Token**
export const verifyOTP = async (req, res) => {
  const { phoneNumber, otp, selectedLocation } = req.body; // Include selected location

  console.log('Received OTP verification request for:', phoneNumber);
  console.log('User entered OTP:', otp);
  console.log('Stored OTP:', otpStore.get(phoneNumber));

  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phoneNumber)) {
    return res.status(400).json({ message: 'Enter a valid 10-digit phone number.' });
  }

  const storedOtp = otpStore.get(phoneNumber);
  if (!storedOtp) {
    console.log('No OTP found for this phone number.');
    return res.status(401).json({ message: 'OTP expired or invalid' });
  }

  if (storedOtp == otp) {
    otpStore.delete(phoneNumber); // ✅ Remove OTP after successful verification

    try {
      // Check if the user already exists
      let user = await User.findOne({ phone: phoneNumber });

      if (!user) {
        // If user doesn't exist, create a new one with selected location
        user = new User({
          phone: phoneNumber,
          age: 18, // Default age, can be updated later
          addresses: [
            {
              city: selectedLocation, // Save selected location
              street: '',
              state: '',
              zipCode: '',
              country: 'India',
            },
          ],
        });

        await user.save();
      }

      // Generate JWT token
      const token = jwt.sign({ phoneNumber }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });

      // Allow cookies in localhost too
      res.cookie('authToken', token, {
        httpOnly: true,
        secure: false, // ✅ Set to true in production
        sameSite: 'Lax',
      });

      return res.status(200).json({
        message: 'OTP verified, logged in successfully',
        token: token,
        user: {
          phone: user.phone,
          addresses: user.addresses,
        },
        success: true,
      });
    } catch (error) {
      console.error('Error saving user:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  console.log('Incorrect OTP entered.');
  return res.status(401).json({ message: 'Invalid OTP' });
};

