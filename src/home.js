import "./views/Desktop.css";
import "./views/btn.css"
import "./views/global.css";
import "./components/project/myproject.css";
import React, {useEffect,useRef } from 'react';
import Loader from "./components/loader/Loader.js";
import Project from "./components/project/projects.js";
import Cup from "./components/cup/Cup.js";
import { Parallax,ParallaxLayer } from '@react-spring/parallax';
import Contacts from "./components/contacts/Contacts.js";
import { useInView } from "react-intersection-observer";

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

const Home = ({ className = "" }) => {
    const{ref: myRef ,inView: aboutIsVisible} = useInView();
    const{ref: myproject ,inView: myprojectIsVisible} = useInView();
    const{ref: bigbull ,inView: bigbullIsVisible} = useInView();
    const{ref: cantstop ,inView: cantstopIsVisible} = useInView();
    const{ref: zombiechase ,inView: zombiechaseIsVisible} = useInView();

    const tracks =document.getElementsByClassName('image-track')
    const track = document.getElementById('image-track')

    useEffect(() => {
       
        window.addEventListener("mousemove", update);
        window.onmousedown = e=>{
          for(const track of tracks){
            if(track.dataset.visible==1){
              track.dataset.mouseDownAt = e.clientX;
            }
          }
        }
        window.onmouseup = e=>{
          for(const track of tracks){
            if(track.dataset.visible==1){
              track.dataset.mouseDownAt = "0";
              track.dataset.prevPercentage = track.dataset.percentage;  
              console.log(track.dataset.percentage)
            }
          }
         
        }
        window.onmousemove = e =>{
          for(const track of tracks){
            if(track.dataset.visible==1){
              if(track.dataset.mouseDownAt =="0")return;
              const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
              maxDelta = window.innerWidth/1.5;
              var percentage = (mouseDelta / maxDelta *-100),
              nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
              if(nextPercentage>0){nextPercentage=0;}
              if(nextPercentage<-70){nextPercentage =-70;}
              track.dataset.percentage = nextPercentage;
              track.animate({transform :`translate(${nextPercentage}%,70%)`},{duration:1800, fill: "forwards"});
              for(const image of track.getElementsByClassName('image')){
                image.animate({objectPosition :`${nextPercentage *100/-70}% 50%`},{duration:1800, fill:"forwards"})
              }
            }
          }

        }
    });
       
     
  return (
  <body className={`desktop-1`}>

<link href='https://fonts.googleapis.com/css?family=Vibur:400' rel='stylesheet' type='text/css'/>
<link href="https://fonts.googleapis.com/css2?family=Playwrite+DE+Grund:wght@100..400&display=swap" rel="stylesheet"></link>
    <div className="loader-page">
        <Loader/>
        <Cup/>
    </div>
    
    <div className="contact">
      <Contacts/>
    </div>
    
    <Parallax id='main' pages={window.innerWidth < 768? 12.3 : 8.6}>

      <ParallaxLayer className ="avatar-comp"  speed={window.innerWidth < 768 ? 2.5: null}offset={window.innerWidth < 768 ? 0.2: 0} sticky={window.innerWidth>768 ?{start:0 , end:1.1}: null}>
      <div className='me'>
        <img className="image-1-icon" style={{"z-index":-1}}src="/avatar-bg.png" />
        <div className="avatar">
          <img className="avatars-default-1-1"  alt="" src="/avatar.png"/>
          <div class="grid">
            <div class="pane"></div>
            <div class="pane"></div>
          </div>
        </div>
      </div>
      </ParallaxLayer>
      
      <ParallaxLayer offset={0} speed={2.1}>
      <div className="intro">
        <div className="hi-my-name-container">
          <p className="hi-my">Hello  World! </p>
          <p className="name-is">My name is</p>
          <b className="lokesh">Lokesh.</b>
        </div>
      </div>
      
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
      <div className="scroll"> 
      <span className="scroll-letter" style={{"--i":1}}>s</span>
      <span className="scroll-letter" style={{"--i":2}}>c</span>
      <span className="scroll-letter" style={{"--i":3}}>r</span>
      <span className="scroll-letter" style={{"--i":4}}>o</span>
      <span className="scroll-letter" style={{"--i":5}}>l</span>
      <span className="scroll-letter" style={{"--i":6}}>l</span>

      </div>
      </ParallaxLayer>

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
    <div className="projects-section">
          <ParallaxLayer offset={window.innerWidth < 768? 2.35 : 2.5}>
            <div className="my-anim" ref={myproject} style={{display:"flex", alignContent:"center"}}>
              <div className="coolme">
              <img alt= "" id="bg"className ="cloud1" src="/images/myproject/bg.png" style={{width:"46rem"}}></img>
              <img alt= "" className={`parts part1 ${myprojectIsVisible? 'in-view' :''}`} id="part1" src="/images/myproject/part1.png"></img>
              <img alt= "" className={`parts ${myprojectIsVisible? 'in-view' :''}`} id="part2" src="/images/myproject/part2.png"></img>
              <img alt= "" className={`parts ${myprojectIsVisible? 'in-view' :''}`} id="part3" src="/images/myproject/part3.png"></img>
              <img alt= "" className={`parts ${myprojectIsVisible? 'in-view' :''}`} id="part4" src="/images/myproject/part4.png"></img>
              <img alt= "" className={`parts ${myprojectIsVisible? 'in-view' :''}`} id="part5" src="/images/myproject/part5.png"></img>
              <img alt= "" className={`parts ${myprojectIsVisible? 'in-view' :''}`} id="part6" src="/images/myproject/part6.png"></img>
              <img alt= "" className={`parts ${myprojectIsVisible? 'in-view' :''}`} id="part7" src="/images/myproject/part7.png"></img>
              <img alt= "" className={`parts ${myprojectIsVisible? 'in-view' :''}`} id="part8" src="/images/myproject/part8.png"></img>
              <img alt= "" className={`parts ${myprojectIsVisible? 'in-view' :''}`} id="part9" src="/images/myproject/part9.png"></img>
              <img alt= "" className={`parts ${myprojectIsVisible? 'in-view' :''}`} id="part10" src="/images/myproject/part10.png"></img>
              </div>
              <div className="myProjects">My projects<span style={{color:"#5e43f3"}}>.</span></div>

           </div>

            
          </ParallaxLayer>
          
      <ParallaxLayer offset={window.innerWidth < 768? 3.3 : 3.7}>
          <Project/>
      </ParallaxLayer>            
      
      </div>
    <ParallaxLayer offset={window.innerWidth < 768?11.5 : 7.99} speed={1}>
      <div className="skills-heading">My skills <hr/></div>
      <div className="skills">
        <div>
          <img className="skill-img" src="/images/skills/0.png"></img>
          <img className="skill-img" src="/images/skills/1.png"></img>
          <img className="skill-img" src="/images/skills/2.png"></img>
          <img className="skill-img" src="/images/skills/3.png"></img>
        </div>
        <div>
          <img className="skill-img" id="mongodb-img" src="/images/skills/5.png"></img>
          <img className="skill-img" src="/images/skills/6.png"></img>
          <img className="skill-img" src="/images/skills/7.png"></img>
          <img className="skill-img" src="/images/skills/8.png"></img>
        </div>
        <div>
          <img className="skill-img" src="/images/skills/4.png"></img>
          <img className="skill-img" src="/images/skills/9.png"></img>
          <img className="skill-img" src="/images/skills/10.png"></img>
        </div>
        
      </div>



    </ParallaxLayer>

      </Parallax>



    </body>
  );
  
};


export default Home;
