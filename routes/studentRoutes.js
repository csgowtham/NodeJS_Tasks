const express = require('express');
const { createStudent, assignOrChangeMentor, getPreviousMentors } = require('../controllers/studentController');
const router = express.Router();

router.post('/students', createStudent);
router.put('/students/assign', assignOrChangeMentor);
router.get('/students/:id/previous-mentors', getPreviousMentors);

module.exports = router;