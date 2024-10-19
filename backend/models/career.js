const mongoose = require('mongoose');

const CareerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  resume: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Career', CareerSchema);
