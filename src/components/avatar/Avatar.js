import React, {useEffect} from "react";
import "../../global/Desktop.css";
import "./avatar.css";

const Avatar =() =>{
    useEffect(() => {
        window.addEventListener("mousemove", update);
    })
    return(
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
    )
}

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

export default Avatar;