const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  try {
    const event = await Event.create({ ...req.body, userId: req.user.id });
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getEvents = async (req, res) => {
  const events = await Event.find({ userId: req.user.id }).sort('date');
  res.json(events);
};

exports.getEventById = async (req, res) => {
  const event = await Event.findOne({ _id: req.params.id, userId: req.user.id });
  if (!event) return res.status(404).json({ error: 'Event not found' });
  res.json(event);
};

exports.deleteEvent = async (req, res) => {
  await Event.deleteOne({ _id: req.params.id, userId: req.user.id });
  res.json({ message: 'Event deleted' });
};
