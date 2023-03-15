// create a react functional component named Contact.js

import React from "react";
import { FaEnvelope, FaPhone, FaHome } from "react-icons/fa";
import "../styles/contact.css";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Get In Touch</h1>
      <hr id="hr-contact" />
      <div className="contact-wrapper">
        <div className="contact-container">
          <div className="way-to-contact">
            {/* email */}
            <div className="contact-icon">
              <span className="sp-icon">
                <FaEnvelope className="wt-icon"></FaEnvelope>
              </span>
            </div>
            <div className="contact-detail">
              <p>jessamaehortadoyosores@gmail.com</p>
            </div>
            {/* call */}
            <div className="contact-icon">
              <span className="sp-icon">
                <FaPhone className="wt-icon"></FaPhone>
              </span>
            </div>
            <div className="contact-detail">
              <p>09509256948</p>
            </div>
            {/* address */}
            <div className="contact-icon">
              <span className="sp-icon">
                <FaHome className="wt-icon"></FaHome>
              </span>
            </div>
            <div className="contact-detail">
              <p>Cebu City Philippines</p>
            </div>
          </div>
          <div className="contact-form">
            <input
              className="contact-info"
              placeholder="Name"
              type="text"
            ></input>
            <br />
            <br />
            <input className="contact-info" placeholder="Email"></input>
            <br />
            <br />
            <textarea placeholder="Message"></textarea>
            <br />
            <br />
            <button className="contact-button">Send Message</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Contact;
