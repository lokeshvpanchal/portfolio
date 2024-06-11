import React, {useEffect } from 'react';

import"./project.css";
import"./Desktop.css";

let imageNum = 0;

function changeSrc(id,imageNum,project){
    let image= document.getElementById(id);
    image.src = "images/"+project+"/"+imageNum+".png"
}

function updateImage(){
    if(imageNum>4){
        imageNum=0;
    }
    changeSrc("bigBull-img",imageNum,"bigBull");
    // changeSrc("cantStop-img",imageNum,"cantStop");
    // changeSrc("zombieChase-img",imageNum,"zombieChase")
    imageNum++;
}

const Project = ({className = ""})=>{
    useEffect(() => {
       setInterval(updateImage,5000);
    });
    return(
        <div className="projects-section">
        <div className="projects-heading">My projects<span style={{color:"#3ea7f1"}}>.</span> <hr/></div>
        <div className="projects">
          <div className="project">
            
            <img className="project-img" id='bigBull-img'  alt="" src="/images/2.png"/>
            <div className="project-card">
              <div className="project-card-heading">
                The Big Bull
                <hr/>
              </div>
              <div className="project-details">
                This project started as an academic assignment for my web development course at Memorial University, but I continued to enhance it with additional functionalities. The Big Bull demonstrates my knowledge and skills in full-stack development.
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-card">
              <div className="project-card-heading">
                  Can't Stop
              </div>
              <hr/>
              <div className="project-details">
                  This project started as an academic assignment for my web development course at Memorial University, but I continued to enhance it with additional functionalities. The Big Bull demonstrates my knowledge and skills in full-stack development.
              </div>
            </div>
              <img className="project-img" id='cantStop-img' alt="" src="/images/1.png"/>

          </div>

          <div className="project">
            <div className="sliding-img">
                <div className='img-slider'>
                <img alt="" src="/images/1.png"/>
                <img alt="" src="/images/2.png"/>
                <img alt="" src="/images/3.png"/>
                </div>
                
            </div>
            <div className="project-card">
              <div className="project-card-heading">
                  Zombie chase
              </div>
              <hr/>
              <div className="project-details">
                  This project started as an academic assignment for my web development course at Memorial University, but I continued to enhance it with additional functionalities. The Big Bull demonstrates my knowledge and skills in full-stack development.
              </div>
            </div>
             
          </div>
            
        </div>
      </div>

    );
};

export default Project;

