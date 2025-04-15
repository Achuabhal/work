import Service from '../models/Service.model.js';

// Add a new service
export const addService = async (req, res) => {
  try {
    const { name, category, description, price, duration, imageUrl } = req.body;
    const newService = new Service({
      name,
      category,
      description,
      price,
      duration,
      imageUrl,
      isActive: true, // Default to active
      createdBy: req.user.id,
    });
    await newService.save();
    res.status(201).json({ message: 'Service added successfully', service: newService });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all services (Only active services)
export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find({ isActive: true }); 
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a single service by ID
export const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ error: 'Service not found' });

    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a service
export const updateService = async (req, res) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedService) return res.status(404).json({ error: 'Service not found' });

    res.status(200).json({ message: 'Service updated successfully', service: updatedService });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Soft Delete a service (set isActive to false)
export const deleteService = async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
    if (!deletedService) return res.status(404).json({ error: 'Service not found' });

    res.status(200).json({ message: 'Service deleted (soft delete)', service: deletedService });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Restore a soft-deleted service
export const restoreService = async (req, res) => {
  try {
    const restoredService = await Service.findByIdAndUpdate(req.params.id, { isActive: true }, { new: true });
    if (!restoredService) return res.status(404).json({ error: 'Service not found' });

    res.status(200).json({ message: 'Service restored successfully', service: restoredService });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
