import Application from '../models/application.model.js';

export const submitApplication = async (req, res) => {
  try {
    const application = new Application(req.body);
    await application.save();

    res
      .status(201)
      .json({ message: 'Application submitted successfully', application });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to submit application', error: error.message });
  }
};


export const getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 }); // Latest first

    res.status(200).json({
      message: "Applications fetched successfully",
      count: applications.length,
      applications,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch applications", error: error.message });
  }
};