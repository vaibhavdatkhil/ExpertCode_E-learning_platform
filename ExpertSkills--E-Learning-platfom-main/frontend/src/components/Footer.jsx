import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-col">
        <h3>ExpertSkills</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="/#features">About us</a></li>
          <li><Link to="/courses">All Courses</Link></li>
          <li><a href="/#community">Our Team</a></li>
          <li><a href="/#contact">Contact Us</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <h3>Resources</h3>
        <ul>
          <li><Link to="/courses">Web Development</Link></li>
          <li><Link to="/courses">App Development</Link></li>
          <li><Link to="/courses">Data Science</Link></li>
          <li><Link to="/courses">Cloud Computing</Link></li>
        </ul>
      </div>

      <div className="footer-col">
        <h3>Follow us</h3>
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Linkedin</li>
          <li>Github</li>
        </ul>
      </div>

      <div className="footer-col">
        <h3>News Letter</h3>
        <p>Stay ahead in learning—subscribe now for updates and exclusive content!</p>
        <div className="subscribe">
          <input type="text" placeholder="Your Email Address" />
          <button className="btn-primary" style={{padding: '0.8rem', width: '100%', marginTop: '0.5rem', borderRadius: '5px', border: 'none', cursor: 'pointer'}}>SUBSCRIBE</button>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright ©2024 All rights reserved by ExpertSkills.com</p>
        <div className="social">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin-in"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
