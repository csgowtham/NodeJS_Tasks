const express = require('express');
const { createMentor, assignStudentsToMentor, getStudentsByMentor } = require('../controllers/mentorController.js');
const router = express.Router();

router.post('/mentors', createMentor);
router.put('/mentors/assign', assignStudentsToMentor);
router.get('/mentors/:id/students', getStudentsByMentor);

module.exports = router;