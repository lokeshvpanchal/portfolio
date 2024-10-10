
import "./global/Desktop.css";
import "./global/btn.css"
import "./global/global.css";

import React, {useEffect,useRef } from 'react';
import Loader from "./components/loader/Loader.js";
import Project from "./components/projects/Projects.js";
import Avatar from "./components/avatar/Avatar.js";
import Contacts from "./components/contacts/Contacts.js";
import Cup from "./components/cup/Cup.js";
import Skills from "./components/skills/Skill.js";
import MyProject from "./components/myProject/myProject.js"

import { Parallax,ParallaxLayer } from '@react-spring/parallax';
import { useInView } from "react-intersection-observer";


const Home = ({ className = "" }) => {
    const{ref: myRef ,inView: aboutIsVisible} = useInView();       
     
  return (
  <div className={`desktop-1`}>

{/* loading page */}
    <div className="loader-page">
        <Loader/>
        <Cup/>
    </div>

{/* social media and contact buttons  */}
    <div className="contact">
        <Contacts/>
    </div>

    <Parallax id='main' pages={window.innerWidth < 1025? 9.5 : 8.6}>
{/* avatar */}  
      <ParallaxLayer className ="avatar-comp"  speed={window.innerWidth < 1385 ? 2.5: null}offset={window.innerWidth < 1025 ? 0.2: 0} sticky={window.innerWidth>1385 ?{start:0 , end:1.1}: null}>
        <Avatar/>
      </ParallaxLayer>
      
{/* Intoduction text */}  

      <ParallaxLayer offset={0} speed={2.1}>
        
        <div className="intro">
          <div className="hi-my-name-container">
            <p className="hi-my">Hello  World! </p>
            <p className="name-is">My name is</p>
            <b className="lokesh">Lokesh.</b>
          </div>
        </div>
        <div className="home-cup">
          <Cup/>
        </div>
      
      </ParallaxLayer>


{/* more introduction */}  

    <ParallaxLayer offset={0} speed={1.7}>

      <div className="i-am-a-container">
        <p className="name-is">I am a computer science student at</p>
        <p className="name-is">
          Memorial University of Newfoundland, St. John’s NL
        </p>
      </div>

    </ParallaxLayer>

{/* scroll text */}
    <ParallaxLayer offset={0} speed={1.5}>
      <div className="desktop-1-item" />  {/* vertical line for styling. */}
        <div className="scroll"> 
          <span className="scroll-letter" style={{"--i":1}}>s</span>
          <span className="scroll-letter" style={{"--i":2}}>c</span>
          <span className="scroll-letter" style={{"--i":3}}>r</span>
          <span className="scroll-letter" style={{"--i":4}}>o</span>
          <span className="scroll-letter" style={{"--i":5}}>l</span>
          <span className="scroll-letter" style={{"--i":6}}>l</span>
      </div>
      </ParallaxLayer>

{/* about para*/}
      <ParallaxLayer offset={1} speed={1.4} >
        <div className="about-heading">
        About <span style={{color:"#5e43f3"}}>me.</span>
        <hr/>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={1.5}> 
        
        <div className={`about ${aboutIsVisible? 'aboutAnimate' :''}`}  >
          I am your friendly neighborhood Computer Science enthusiast
          and I'm on a quest to master the art of full-stack web development,
          <span style={{color:"#5e43f3"}}> one line of code at a time. </span>
          Recently, I've also started diving into the fascinating world of machine learning,
          expanding my skill set and exploring new horizons in technology.
        </div>

    </ParallaxLayer>

{/* work together para*/}
    <ParallaxLayer offset={1} speed={0.7} >

      <div className="work-together-heading">
        Let's work together<span style={{color:"#5e43f3"}}>.</span>
        <hr/>
      </div>

    </ParallaxLayer>
    <ParallaxLayer offset={1} speed={0.8}> 

      <div className="work-together" >
        I'm excited to collaborate on innovative projects and bring ideas to life.
        With expertise in full-stack web development and a growing interest in machine learning,
        I'm ready to tackle new challenges. If you're looking for a passionate developer to join your team or help with a project, let's connect! 
      </div>

    </ParallaxLayer>

{/* my project animation */}
    <ParallaxLayer offset={window.innerWidth < 1025? 2.35 : 2.5}>
      <MyProject/>     
    </ParallaxLayer>

{/* projects display */}
      <ParallaxLayer offset={window.innerWidth < 1025? 3.3 : 3.7}>
          <Project/>
      </ParallaxLayer>            
      
{/* skill section */}
    <ParallaxLayer offset={window.innerWidth < 1025?8 : 7.99} speed={1}>
      <Skills/>
    </ParallaxLayer>

  </Parallax>

      <link href='https://fonts.googleapis.com/css?family=Vibur:400' rel='stylesheet' type='text/css'/>
      <link href="https://fonts.googleapis.com/css2?family=Playwrite+DE+Grund:wght@100..400&display=swap" rel="stylesheet"></link>
  </div>
  );
 
};


export default Home;
