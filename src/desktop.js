import "./Desktop.css";
import "./global.css";

const container = document.querySelector(".grid");

window.addEventListener("mousemove", update);

function update(event){
	/* get the cursor position */
	const { clientX, clientY } = event;
	
	/* find the center of the window */
	const centerX = window.innerWidth / 2;
	const centerY = window.innerHeight / 2;
	
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
  return (
    <div className={`desktop-1 ${className}`}>
      <div className="desktop-1-child" />
      <div className="menu">MENU</div>
      <img className="vector-icon" alt="" src="/vector.svg" />
      <img className="vector-icon1" alt="" src="/vector1.svg" />
      <div className="hire-me">hire me!</div>
      <img className="image-1-icon" alt="" src="/avatar-bg.png" />
      <img className="avatars-default-1-1"  alt="" src="./avatar.png"/>
      <div class="grid">
        <div class="pane"></div>
        <div class="pane"></div>
      </div>
      
      <div className="hi-my-name-container">
        <p className="hi-my">Hi, my</p>
        <p className="name-is">name is</p>
      </div>
      <b className="lokesh">Lokesh.</b>
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
  );
};


export default Desktop;
