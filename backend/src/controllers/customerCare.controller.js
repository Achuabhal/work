import CustomerQuery from '../models/CustomerQuery.model.js';

// Submit Customer Query
export const submitQuery = async (req, res) => {
  try {
    const { name, contactNumber, email, issue } = req.body;

    if (!name || !contactNumber || !email || !issue) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newQuery = new CustomerQuery({ name, contactNumber, email, issue });
    await newQuery.save();

    res.status(201).json({ message: 'Query submitted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Fetch All Queries (For Admin)
export const getAllQueries = async (req, res) => {
  try {
    const queries = await CustomerQuery.find().sort({ createdAt: -1 });
    res.status(200).json(queries);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
