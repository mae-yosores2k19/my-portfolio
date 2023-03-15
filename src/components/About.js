// create a react functional component named About
import React from "react";
import { asset } from "../asset";
import "../styles/about.css";
import {motion} from 'framer-motion'
const About = ({ Localization }) => {
  const { name, description } = Localization;
  return (
    <motion.div className="wrapper" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} >
      <h1>About Me</h1>
      <hr className="aboutMe"/>
      <div className="container">
        <div>
          <img className="hiEmoji" src={asset.hiEmoji} alt = "emoji"/>
        </div>
        <div>
          <p className="description">I am {name} {description} </p>
        </div>
      </div>
    </motion.div>
  );
};
export default About;
