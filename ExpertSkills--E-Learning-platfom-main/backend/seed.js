const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Course = require('./models/Course');

dotenv.config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/expertskills')
.then(async () => {
  await Course.deleteMany({});
  const courses = [
    { title: "Web Development for Beginners", description: "Learn HTML, CSS, JavaScript from scratch.", image: "https://images.unsplash.com/photo-1547658719-da2b511591bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", studentsEnrolled: 239, rating: 5, link: "#" },
    { title: "App Development for Beginners", description: "Build your first iOS and Android apps.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", studentsEnrolled: 150, rating: 4, link: "#" },
    { title: "Full Stack Development", description: "Master the MERN stack.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", studentsEnrolled: 120, rating: 5, link: "#" },
    { title: "Data Science for Beginners", description: "Introduction to Python and Data Analysis.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", studentsEnrolled: 300, rating: 4.8, link: "#" },
    { title: "AI and ML using Python", description: "Dive deep into Machine Learning algorithms.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", studentsEnrolled: 450, rating: 4.9, link: "#" },
    { title: "Cloud Computing - AWS", description: "Master Amazon Web Services for scalable deployments.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", studentsEnrolled: 210, rating: 4.5, link: "#" }
  ];
  await Course.insertMany(courses);
  console.log("Seeded courses");
  process.exit();
}).catch(err => {
    console.error("Error setting up DB:", err);
    process.exit(1);
});
