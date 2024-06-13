import React from 'react';

import"./project.css";
import"./Desktop.css";

let imageNum = 0;

// function changeSrc(id,imageNum,project){
//     let image= document.getElementById(id);
//     image.src = "images/"+project+"/"+imageNum+".png"
// }

// function updateImage(){
//     if(imageNum>4){
//         imageNum=0;
//     }
//     changeSrc("bigBull-img",imageNum,"bigBull");
//     // changeSrc("cantStop-img",imageNum,"cantStop");
//     // changeSrc("zombieChase-img",imageNum,"zombieChase")
//     imageNum++;
// }

const Project = ({className = ""})=>{
    // useEffect(() => {
    //    setInterval(updateImage,5000);
    // });
    return(
        <div className="projects-section">
        <div className="projects-heading">My projects<span style={{color:"#3ea7f1"}}>.</span> <hr/></div>
        <div className="projects">
          <div className="project">
            
          <div className="sliding-img">
                <div className='img-slider'>
                <img alt="" src="/images/bigbull/1.png"/>
                <img alt="" src="/images/bigbull/2.png"/>
                <img alt="" src="/images/bigbull/3.png"/>
                <img alt="" src="/images/bigbull/4.png"/>
                <img alt="" src="/images/bigbull/5.png"/>
                <img alt="" src="/images/bigbull/6.png"/>
                <img alt="" src="/images/bigbull/7.png"/>
                </div>
                
            </div>
          <div className="project-card">
              <div className="project-card-heading">
                The Big Bull
                <hr/>
              </div>
              <div className="project-details">
              -JavaScript, HTML, CSS, MongoDB, Node.js, Express.js, Ajax, Axios, Mocha.
              <br/>
              <br/>

              The Big Bull is an interactive stock trading web application designed to simulate real-world trading and enhance learning without financial risk. It features real-time stock data, user authentication, portfolio management, watchlists, a trading panel for buying and selling stocks, and a competitive leaderboard to track user performance.
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
              - Java, Java Swing<br/><br/>
              
              Can't Stop is a virtual version of the popular board game, designed to provide an engaging and accessible gaming experience. Developed by a team of five for an academic project, the game features a non-human player for solo play, a color blind mode for enhanced accessibility, and adjustable difficulty levels to cater to all skill levels. Players can save their progress and load saved games, ensuring a seamless and enjoyable experience. 
              </div>
            </div>
            <div className="sliding-img ">
              <div className='cantstop-slider img-slider'>
                <img alt="" src="/images/cantstop/7.png"/>
                <img alt="" src="/images/cantstop/6.png"/>
                <img alt="" src="/images/cantstop/5.png"/>
                <img alt="" src="/images/cantstop/4.png"/>
                <img alt="" src="/images/cantstop/3.png"/>
                <img alt="" src="/images/cantstop/2.png"/>
                <img alt="" src="/images/cantstop/1.png"/>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="sliding-img">
                <div className='img-slider zombie-slider'>
                <img alt="" src="/images/zombiechase/1.png"/>
                <img alt="" src="/images/zombiechase/2.png"/>
                <img alt="" src="/images/zombiechase/3.png"/>
                <img alt="" src="/images/zombiechase/4.png"/>

                </div>
                
            </div>
            <div className="project-card">
              <div className="project-card-heading">
                  Zombie chase
              </div>
              <hr/>
              <div className="project-details">
              -Unreal engine <br/><br/>
              Zombie Chase is an action-packed shooting game developed in Unreal Engine using Blueprints. In this thrilling game, players must cross a zombie-infested bridge, picking up weapons and battling hordes of zombies along the way. HealthKits are strategically placed to help players restore their health and continue their journey. With immersive graphics and intense gameplay, Zombie Chase offers an exhilarating experience for all zombie survival enthusiasts.


              <a link="">check it out</a>


</div>
            </div>
             
          </div>
            
        </div>
      </div>

    );
};

export default Project;

