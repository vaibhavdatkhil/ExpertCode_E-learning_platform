const express = require('express');
const Course = require('../models/Course');
const router = express.Router();

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json(courses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Add a new course (for seeding/admin)
router.post('/', async (req, res) => {
  const { title, description, image, studentsEnrolled, rating, link } = req.body;
  try {
    const newCourse = new Course({ title, description, image, studentsEnrolled, rating, link });
    const course = await newCourse.save();
    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
