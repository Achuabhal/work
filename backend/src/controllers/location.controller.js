import axios from 'axios';

export const getUserLocation = async (req, res) => {
  try {
    // Get User's Real IP Address
    let userIP =
      req.body.ip ||
      req.headers['x-forwarded-for']?.split(',')[0] ||
      req.socket.remoteAddress;

    if (!userIP || userIP === '127.0.0.1' || userIP === '::1') {
      // Fallback: Get Public IP (for local testing)
      const ipResponse = await axios.get('https://api64.ipify.org?format=json');
      userIP = ipResponse.data.ip;
    }

    console.log('User IP:', userIP); // Debugging

    // Fetch location from ip-api
    const geoResponse = await axios.get(`http://ip-api.com/json/${userIP}`);

    console.log('Geo Response:', geoResponse.data); // Debugging

    if (geoResponse.data.status === 'success') {
      return res.json({
        success: true,
        location: {
          latitude: geoResponse.data.lat,
          longitude: geoResponse.data.lon,
          city: geoResponse.data.city,
          country: geoResponse.data.country,
        },
      });
    } else {
      // Fallback: Try another geolocation API
      const fallbackGeo = await axios.get(`https://ipinfo.io/${userIP}/json`);
      const [lat, lon] = fallbackGeo.data.loc.split(',');

      return res.json({
        success: true,
        location: {
          latitude: lat,
          longitude: lon,
          city: fallbackGeo.data.city,
          country: fallbackGeo.data.country,
        },
      });
    }
  } catch (error) {
    console.error('Error fetching location:', error);
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error' });
  }
};
