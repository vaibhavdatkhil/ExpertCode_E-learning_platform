import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch courses from backend
    axios.get('http://localhost:5000/api/courses')
      .then(res => {
        setCourses(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="courses-page" style={{ padding: '4rem 5%', minHeight: '80vh' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', background: 'var(--gradient-1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        All Courses
      </h2>
      
      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading courses...</p>
      ) : (
        <div className="feature-grid">
          {courses.length > 0 ? (
            courses.map(course => (
              <CourseCard key={course._id} course={course} />
            ))
          ) : (
            <p style={{ textAlign: 'center', width: '100%', gridColumn: '1 / -1' }}>No courses available at the moment.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Courses;
