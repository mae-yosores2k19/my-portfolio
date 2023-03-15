// create a react functional component named Home.js
import React from 'react';
import '../styles/home.css'
import { asset } from '../asset';
import { Link  } from "react-router-dom";
import {motion} from 'framer-motion'
const Home = ({Localization}) => {
  const {greetings,name,thought,position} = Localization
  return (
    <motion.div className='parent' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <div className='details'>
        <p>{greetings}</p>
        <h1>{name}</h1>
        <hr className='nameUnderline'/>
        <h3 className='position'>{position}</h3><br/>
        <p className='thought'>{thought}</p>
        <Link to = '/about' className='button'> About Me!</Link>
      </div>
      <div className='image'>
        <img className='profile'src={asset.profile} alt="profile"/>
      </div>
    </motion.div>
  );
};
export default Home;