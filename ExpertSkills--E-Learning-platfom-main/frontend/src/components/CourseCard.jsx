import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const CourseCard = ({ course }) => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  const handleEnroll = async () => {
    if (!token) {
      navigate('/login');
      return;
    }
    setLoading(true);
    setMsg('');
    try {
      await axios.post(`http://localhost:5000/api/user/enroll/${course._id}`, {}, {
        headers: { 'x-auth-token': token }
      });
      setMsg('Enrolled successfully!');
      setTimeout(() => navigate('/dashboard'), 1500);
    } catch (err) {
      setMsg(err.response?.data?.msg || 'Error enrolling');
      setLoading(false);
    }
  };

  return (
    <div className="feature-card" style={{ display: 'flex', flexDirection: 'column' }}>
      <img 
        src={course.image || 'https://via.placeholder.com/300x200'} 
        alt={course.title} 
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px', marginBottom: '1rem' }}
      />
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{course.title}</h3>
        <p style={{ color: 'var(--text-color-light)', fontSize: '0.9rem', marginBottom: '1rem' }}>
          {course.description.substring(0, 80)}...
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#f1c40f', marginBottom: '1rem' }}>
          <span>{'⭐'.repeat(Math.round(course.rating))}</span>
          <span style={{ color: 'var(--text-color-light)', fontSize: '0.8rem' }}>
            {course.studentsEnrolled} students
          </span>
        </div>
      </div>
      {msg && <p style={{color: msg.includes('Error') || msg.includes('Already') ? '#ff6b6b' : '#00cec9', textAlign: 'center', marginBottom: '0.5rem', fontSize: '0.9rem'}}>{msg}</p>}
      <button 
        onClick={handleEnroll} 
        disabled={loading}
        className="btn-primary" 
        style={{ width: '100%', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', padding: '0.8rem', fontSize: '1rem' }}
      >
        {loading ? 'Processing...' : 'Enroll Now'}
      </button>
    </div>
  );
};

export default CourseCard;
