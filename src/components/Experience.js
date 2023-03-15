// create a react functional component named Experience.js
import React from "react";
import "../styles/experience.css";
import { FaEnvelopeOpenText } from "react-icons/fa";
import {motion} from 'framer-motion'
const Experience = ({ Localization }) => {
  const { jobDescription1, jobDescription2 } = Localization;
  return (
    <motion.div className="work-experience" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <h1>Work Experience</h1>
      <hr id="hr-we" />
      <div className="we-parent">
        <div className="vline">
          <span className="icon">
            <FaEnvelopeOpenText className="envelope" />
          </span>

          <div className="we-content">
            <hr className="hr-content" />
            <h2 className="we-position">Full Stack Developer</h2>
            <p className="we-year">2021 - 2022</p>
            <p className="we-description">{jobDescription1}</p>
          </div>
        </div>
      </div>
      <div className="we-parent">
        <div className="vline">
          <span className="icon">
            <FaEnvelopeOpenText className="envelope" />
          </span>
          <div className="we-content">
            <hr className="hr-content" />
            <h2 className="we-position">Frontend Developer</h2>
            <p className="we-year">2022 - Present</p>
            <p className="we-description">{jobDescription2}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
