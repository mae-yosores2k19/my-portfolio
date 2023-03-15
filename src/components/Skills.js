// create a react functional component named Skills.js
import React from 'react';
import { asset } from '../asset';
import '../styles/skills.css'
import {motion} from 'framer-motion'
const Skills = () => {
  return (
    <motion.div  id = 'wrapper' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <h1>My Skills</h1>
      <hr id='skills'/>
      <div id='container'>
        <img className='logo' src={asset.css} alt="css"/>
        <img className='logo' src={asset.html} alt="html"/>
        <img className='logo' src={asset.react} alt="react"/>
        <img className='logo' src={asset.node} alt="node"/>
        <img className='logo' src={asset.javascript} alt="javascript"/>
        <img className='logo' src={asset.typescript} alt="typescript"/>
        <img className='logo' src={asset.mongoDB} alt="mongoDB"/>
        <img className='logo' src={asset.graphql} alt="graphql"/>
        <img className='logo' src={asset.docker} alt="docker"/>
        <img className='logo' src={asset.git} alt="git"/>
      </div>
    </motion.div> 

  ); 
} 

 export default Skills;