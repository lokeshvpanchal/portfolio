import "./Desktop.css";
import "./global.css";
import React, { useEffect} from "react";
import Loader from "./Loader";
import Cup from "./Cup";

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

        setTimeout(function(){
          document.querySelector(".loader-page").style.display = 'none';
      }, 500); 
      
    });
  return (
    <div>
    <div className="loader-page">
        <Loader/>
    </div>
    <div className={`desktop-1 ${className}`}>

      <div className="desktop-1-child" />
      <div className="menu">MENU</div>
      <button className="hire-me"> 
        <img className="vector-icon" alt="" src="/vector.png" />hire me
      </button>
      <img className="image-1-icon" alt="" src="/avatar-bg.png" />
      <img className="avatars-default-1-1"  alt="" src="/avatar.png"/>
      <div class="grid">
        <div class="pane"></div>
        <div class="pane"></div>
      </div>
      
      <div className="hi-my-name-container">
        <p className="hi-my">Hi, my</p>
        <p className="name-is">name is</p>
      </div>
      <b className="lokesh">Lokesh.</b>
      <Cup/>

      <div className="i-am-a-container">
        <p className="name-is">I am a computer science student at</p>
        <p className="name-is">
          Memorial University of Newfoundland in St. John’s
        </p>
      </div>
      <div className="desktop-1-item" />
      <div className="scroll">scroll</div>
      <div className="desktop-1-inner" />
      <div className="ellipse-div" />
    </div>
    </div>
  );
};


export default Desktop;
