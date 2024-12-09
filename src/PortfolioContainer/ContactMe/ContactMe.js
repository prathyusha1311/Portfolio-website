import React, { useEffect, useState } from 'react';
import './ContactMe.css';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollServices from '../../utilities/ScrollServices';
import Animations from '../../utilities/Animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export default function ContactMe(props) {
  const [messageStatus, setMessageStatus] = useState('');

  useEffect(() => {
    const fadeInScreenHandler = (screen) => {
      if (screen.fadeScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription = ScrollServices.currentScreenFadeIn.subscribe(
      fadeInScreenHandler
    );
    return () => fadeInSubscription.unsubscribe();
  }, [props.id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulating message sending (replace with backend integration later)
    setMessageStatus('Message Sent Successfully!');
    setTimeout(() => setMessageStatus(''), 3000);
  };

  return (
    <div className="contact-me-container screen-container" id={props.id || ''} >
      <div className="contact-me-parent" id="ContactMe">
        {/* <ScreenHeading title={'Contact Me'} subHeading={'Get In Touch'} /> */}
        <h2 color='white'>Get in Touch!</h2>
        <div className="contact-me-content">
          <p className="contact-me-description">
            Feel free to reach out for collaborations or just a friendly chat!
          </p>
          <div className="contact-details">
            {/* <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <span>+1 (123) 456-7890</span>
            </div> */}
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <span>nareshku@usc.edu</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
              <span>Los Angeles, CA</span>
            </div>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/prathyusha-nareshkumar-profile/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
            <a href="https://github.com/prathyusha1311" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
            <a href="https://www.instagram.com/prathyusha_nareshkumar/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
          </div>
          {/* <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="form-input"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="form-input"
              required
            />
            <textarea
              placeholder="Your Message"
              className="form-textarea"
              rows="5"
              required
            ></textarea>
            <button type="submit" className="form-button">
              Send Message
            </button>
          </form>
          {messageStatus && <p className="message-status">{messageStatus}</p>} */}
        </div>
      </div>
    </div>
  );
}
