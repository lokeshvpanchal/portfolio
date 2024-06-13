import "./Desktop.css";
import "./global.css";
import React, {useEffect } from 'react';
import Loader from "./Loader";
import Project from "./projects";
import Cup from "./Cup";
import { Parallax,ParallaxLayer } from '@react-spring/parallax';
import Contacts from "./Contacts";

function update(event){
    const container = document.querySelector(".grid");

	/* get the cursor position */
	const { clientX, clientY } = event;
	
	/* find the center of the window */
	const centerX = window.innerWidth *0.7;
	const centerY = window.innerHeight *0.5;
	
	/* get the cursor distance from the center in px */
	const offsetX = clientX - centerX;
	const offsetY = clientY - centerY;
	
	/* convert the px value into a -1 to +1 ratio */
	const ratioX  = offsetX / centerX;
	const ratioY  = offsetY / centerY;

	/* store that ratio in the CSS for use as a multiplier in the transforms */
	container.style.setProperty("--x", ratioX);
	container.style.setProperty("--y", ratioY);
}// update

const Desktop = ({ className = "" }) => {
    useEffect(() => {
        window.addEventListener("mousemove", update);
    });
  return (
  <div >
    <div className="loader-page">
        <Loader/>
        <Cup/>

    </div>
    
    <div className={`desktop-1`} >
    <div className="contact">
      <Contacts/>
    </div>
    
    <Parallax pages={6.05} style={{height:"750px"}}>

      <ParallaxLayer sticky={{start:0,end:4}}>
      <a href="mailto:lvpanchal@mun.ca?Subject=Hi%20Lokesh%21%20I%20would%20like%20to%20hire%20you" className="hire-me" style={{textDecoration:"none",color:"black"}}>
  hire me!
</a>

      </ParallaxLayer>
      <ParallaxLayer className ="avatar-comp" sticky={{start:0 , end:1}}>
      <img className="image-1-icon" src="/avatar-bg.png" />
      <div className="avatar">
        <img className="avatars-default-1-1"  alt="" src="/avatar.png"/>
        <div class="grid">
          <div class="pane"></div>
          <div class="pane"></div>
        </div>
      </div>
      </ParallaxLayer>
      
      <ParallaxLayer offset={0} speed={2.1}>
      <div className="hi-my-name-container">
        <p className="hi-my">Hello  World! </p>
        <p className="name-is">My name is</p>
      </div>
      <b className="lokesh">Lokesh.</b>
      <Cup/>
      </ParallaxLayer>
    
    <ParallaxLayer offset={0} speed={1.7}>

      <div className="i-am-a-container">
        <p className="name-is">I am a computer science student at</p>
        <p className="name-is">
          Memorial University of Newfoundland, St. John’s NL
        </p>
      </div>
      </ParallaxLayer>
    <ParallaxLayer offset={0} speed={1.5}>
      <div className="desktop-1-item" />
      <div className="scroll">scroll</div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={1.4} >
      <div className="about-heading">
        About <span style={{color:"#3ea7f1"}}>me.</span>
        <hr/>
      </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={1.5}> 
      <div className="about" >
      I am your friendly neighborhood Computer Science enthusiast
      and I'm on a quest to master the art of full-stack web development,
      <span style={{color:"#3ed9ff"}}> one line of code at a time. </span>
       Recently, I've also started diving into the fascinating world of machine learning,
      expanding my skill set and exploring new horizons in technology.

      </div>
    </ParallaxLayer>
    <ParallaxLayer offset={1} speed={0.7} >
      <div className="work-together-heading">
        Let's work together<span style={{color:"#3ea7f1"}}>.</span>
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
    <ParallaxLayer offset={2}>
      <Project/>
    </ParallaxLayer>
    <ParallaxLayer offset={5} speed={2}>
      <div className="skills-heading">Skills <hr/></div>
      
      <img className="skill-img" src="/images/skills.jpeg"></img>
    </ParallaxLayer>

      </Parallax>

    </div>

    </div>
  );
};


export default Desktop;
