// models/Student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'Mentor', default: null },
  previousMentors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Mentor' }],
  __v: { type: Number, select: false }
});

module.exports = mongoose.model('Student', studentSchema);
