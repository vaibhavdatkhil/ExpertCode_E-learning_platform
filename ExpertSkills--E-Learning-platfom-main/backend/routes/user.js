const express = require('express');
const auth = require('../middleware/auth');
const User = require('../models/User');
const Course = require('../models/Course');

const router = express.Router();

// Get logged in user profile with populated courses
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password').populate('enrolledCourses');
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Enroll in a course
router.post('/enroll/:courseId', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const courseId = req.params.courseId;

    // Check if course exists
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ msg: 'Course not found' });
    }

    // Check if already enrolled
    if (user.enrolledCourses.includes(courseId)) {
      return res.status(400).json({ msg: 'Already enrolled in this course' });
    }

    user.enrolledCourses.push(courseId);
    await user.save();

    res.json({ msg: 'Successfully enrolled', enrolledCourses: user.enrolledCourses });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
