import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CourseCard from '../components/CourseCard';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
      try {
        const res = await axios.get('http://localhost:5000/api/user/me', {
          headers: { 'x-auth-token': token }
        });
        setUser(res.data);
      } catch (err) {
        console.error(err);
        localStorage.removeItem('token');
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [navigate]);

  if (loading) return <div style={{textAlign: 'center', padding: '5rem'}}>Loading dashboard...</div>;

  return (
    <div style={{ padding: '4rem 5%', minHeight: '80vh' }}>
      <h2 style={{ marginBottom: '2rem', fontSize: '2.5rem', background: 'var(--gradient-1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Welcome back, {user?.name}!
      </h2>
      
      <h3 style={{ marginBottom: '2rem', fontSize: '1.8rem' }}>Your Enrolled Courses</h3>
      <div className="feature-grid">
        {user?.enrolledCourses?.length > 0 ? (
          user.enrolledCourses.map(course => (
            <CourseCard key={course._id} course={course} />
          ))
        ) : (
          <p>You haven't enrolled in any courses yet. <a href="/courses" style={{color: 'var(--secondary-color)'}}>Explore courses now!</a></p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
