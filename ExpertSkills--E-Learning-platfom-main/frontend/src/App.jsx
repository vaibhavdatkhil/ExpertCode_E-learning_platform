import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Courses from './pages/Courses';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import './index.css';

const ScrollToHash = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return null;
};

const Navbar = () => {
  const { token, logout } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo"><Link to="/" style={{color: 'inherit', background: 'var(--gradient-1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>ExpertSkills</Link></div>
      
      <div className="menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? '✖' : '☰'}
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
        <li><a href="/#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a></li>
        <li><Link to="/courses" onClick={() => setIsMobileMenuOpen(false)}>All Courses</Link></li>
        <li><a href="/#community" onClick={() => setIsMobileMenuOpen(false)}>Our Team</a></li>
        <li><a href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a></li>
      </ul>
      
      <div className={`nav-actions ${isMobileMenuOpen ? 'active' : ''}`}>
        {token ? (
          <>
            <Link to="/dashboard" className="btn" style={{marginRight: '1rem'}} onClick={() => setIsMobileMenuOpen(false)}>Dashboard</Link>
            <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="btn" style={{background: 'transparent', border: '1px solid var(--secondary-color)', color: 'var(--secondary-color)', cursor: 'pointer'}}>Logout</button>
          </>
        ) : (
          <Link to="/login" className="btn" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
        )}
      </div>
    </nav>
  );
};

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext);
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToHash />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
