import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className="hero">
        <h1>Learn Anytime, Anywhere!</h1>
        <p>Discover a world of knowledge with our comprehensive courses. Upgrade your skills and achieve your dreams with flexible, high-quality e-learning.</p>
        <div className="hero-btns">
          <Link to="/courses" className="btn-primary">Explore Courses</Link>
          <a href="#features" className="btn-secondary">Learn More</a>
        </div>
      </section>

      <section id="features" className="features-section">
        <h2>Awesome Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <i className="fa-solid fa-graduation-cap">🎓</i>
            <h3>Scholarship Facility</h3>
            <p>Access financial aid programs designed to support learners and make education affordable.</p>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-laptop-code">💻</i>
            <h3>Online Courses</h3>
            <p>Explore a wide range of courses available anytime, anywhere to suit your schedule.</p>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-award">🏆</i>
            <h3>Global Certification</h3>
            <p>Earn certifications that are recognized worldwide to advance your career goals.</p>
          </div>
        </div>
      </section>

      {/* community */}
      <section id="community" className="community-section">
        <h2>Our Team</h2>
        <p>Meet the dedicated professionals driving innovation and success in education.</p>
        <div className="expert-grid">
          <div className="profile">
            <img src="/Images/person1.png" alt="Fahad Ali" />
            <h6>Fahad Ali</h6>
            <p>Project Manager</p>
          </div>
          <div className="profile">
            <img src="/Images/person1.png" alt="Wajiha Javed" />
            <h6>Wajiha Javed</h6>
            <p>Manager Business Development</p>
          </div>
          <div className="profile">
            <img src="/Images/person1.png" alt="Arslan Ashraf" />
            <h6>Arslan Ashraf</h6>
            <p>Hardware & Network Support</p>
          </div>
          <div className="profile">
            <img src="/Images/person1.png" alt="Minahil Khalid" />
            <h6>Minahil Khalid</h6>
            <p>Support Specialist</p>
          </div>
        </div>
      </section>

      {/* Contact us */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Get in touch with us for any inquiries, support, or feedback. We're here to help!</p>
        <div className="contact-box">
          <div className="form">
            <h3>Let us help</h3>
            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your Email" />
            </div>
            <div className="input-group">
              <label>Message</label>
              <textarea placeholder="Enter your message" rows="4"></textarea>
            </div>
            <button className="btn-primary" style={{width: '100%', border: 'none', cursor: 'pointer', padding: '1rem'}}>
              Send Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
