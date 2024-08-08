const Student = require('../models/Student');

exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.assignOrChangeMentor = async (req, res) => {
  try {
    const { studentId, mentorId } = req.body;
    const student = await Student.findById(studentId);
    if (!student) return res.status(404).json({ message: 'Student not found' });

    if (student.mentor) {
      student.previousMentors.push(student.mentor);
    }

    student.mentor = mentorId;
    await student.save();

    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getPreviousMentors = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate('previousMentors');
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.status(200).json(student.previousMentors);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};