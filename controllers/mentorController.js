const Mentor = require('../models/Mentor.js');
const Student = require('../models/Student.js');

exports.createMentor = async (req, res) => {
  try {
    const mentor = new Mentor(req.body);
    await mentor.save();
    res.status(201).json(mentor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.assignStudentsToMentor = async (req, res) => {
  try {
    const { mentorId, studentIds } = req.body;

    // Log incoming request data
    console.log('Request to assign students to mentor:', { mentorId, studentIds });

    // Find the mentor
    const mentor = await Mentor.findById(mentorId);
    if (!mentor) {
      console.log('Mentor not found');
      return res.status(404).json({ message: 'Mentor not found' });
    }

    // Find students
    const students = await Student.find({ _id: { $in: studentIds } });
    if (students.length !== studentIds.length) {
      console.log('One or more students not found');
      return res.status(404).json({ message: 'One or more students not found' });
    }

    // Check which students already have a mentor
    const studentsWithMentor = students.filter(student => student.mentor !== null);
    const studentIdsWithMentor = studentsWithMentor.map(student => student._id.toString());

    if (studentIdsWithMentor.length > 0) {
      console.log('Students already assigned to a mentor:', studentIdsWithMentor);
      return res.status(400).json({
        message: 'Some students already have a mentor',
        studentsWithMentor: studentIdsWithMentor
      });
    }

    // Assign students to the mentor
    mentor.students.push(...studentIds);
    await mentor.save();

    // Update each student to reference the mentor
    await Student.updateMany({ _id: { $in: studentIds } }, { mentor: mentorId });

    console.log('Successfully assigned students to mentor:', mentor);
    res.status(200).json(mentor);
  } catch (error) {
    console.error('Error assigning students to mentor:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};



exports.getStudentsByMentor = async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id).populate('students');
    if (!mentor) return res.status(404).json({ message: 'Mentor not found' });
    res.status(200).json(mentor.students);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};