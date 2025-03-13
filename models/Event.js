const mongoose = require('mongoose');
const EventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    category: { type: String, enum: ['Meeting', 'Birthday', 'Appointment'], required: true },
    reminderTime: { type: Date },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  });
  
  module.exports = mongoose.model('Event', EventSchema);