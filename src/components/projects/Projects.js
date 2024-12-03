import React,{useEffect} from 'react';

import"./project.css";
import "../../global/Desktop.css";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useInView } from "react-intersection-observer";


const Project = ({className = ""})=>{
  const{ref: myRef ,inView: aboutIsVisible} = useInView();
  const{ref: myproject ,inView: myprojectIsVisible} = useInView();
  const{ref: rma ,inView: rmaIsVisible} = useInView();
  const{ref: airbnb ,inView: airbnbIsVisible} = useInView();
  const{ref: bigbull ,inView: bigbullIsVisible} = useInView();
  const{ref: cantstop ,inView: cantstopIsVisible} = useInView();
  const{ref: zombiechase ,inView: zombiechaseIsVisible} = useInView();

  const tracks =document.getElementsByClassName('image-track')
  const track = document.getElementById('image-track')

    useEffect(() => {
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
              track.animate({transform :`translate(${nextPercentage}%)`},{duration:1800, fill: "forwards"});
              for(const image of track.getElementsByClassName('image')){
                image.animate({objectPosition :`${nextPercentage *100/-70}% 50%`},{duration:1800, fill:"forwards"})
              }
            }
          }

        }
    });


  return(
    <div className='project-section'>
            <div className="project rma" name="rma">              
          <div className="project-card">
            <div className="project-card-heading">
              <div className="project-name"> Restaurant management app (in progress) <hr/> </div>
              
              <div className="project-tech"> <br/>-JavaScript, HTML, CSS, mySQL, Node.js, Express.js.</div>
            </div>

            <div id= 'rma'ref={rma} className={window.innerWidth < 1024? "rma-slider img-slider": "image-track"} data-mouse-down-at="0" data-prev-percentage= "0" data-visible ={`${rmaIsVisible? 1 :0}`} draggable="false">
            <div class="arrow">
                <span></span>
                <span></span>
                <span></span>
                <div>drag</div>
            </div>
              <img alt="" className="image" src="/images/rma/1.png" draggable="false"/>
              <img alt=""  className="image" src="/images/rma/2.png"draggable="false"/>
              <img alt="" className="image"  src="/images/rma/3.png"draggable="false"/>
              <img alt="" className="image"  src="/images/rma/4.png"draggable="false"/>
            </div>
            
            <div className="project-details">
              <div className="project-details-text">
              A full-stack web application designed to streamline restaurant operations, including reservations, menu management, table availability, and inventory tracking. Built using React, Node.js, and MySQL, it features real-time table availability, dynamic menu updates, and efficient backend integration with stored procedures and triggers for optimized performance. This project showcases my skills in full-stack development and database management.

              </div>
              <a href="https://github.com/cypher2509/Restaurant-Manager.git">
                <div class="button-icon">
                    <div class="icon">
                      <svg viewBox="0 0 24 24">
                        <path
                          d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                          fill="#222229"
                        ></path>
                      </svg>
                    </div>
                    <div class="cube">
                      <span class="side front">check it</span>
                      <span class="side top">on github</span>
                    </div>
                </div>
                </a>

            </div>
          </div>
      </div>
      
      <div className="project airbnb" name="airbnb">              
          <div className="project-card">
            <div className="project-card-heading">
              <div className="project-name"> Airbnb Clone (in progress) <hr/> </div>
              
              <div className="project-tech"> <br/>-JavaScript, HTML, CSS, MongoDB, Node.js, Express.js.</div>
            </div>

            <div id= 'airbnb'ref={airbnb} className={window.innerWidth < 1024? "airbnb-slider img-slider": "image-track"} data-mouse-down-at="0" data-prev-percentage= "0" data-visible ={`${airbnbIsVisible? 1 :0}`} draggable="false">
            <div class="arrow">
                <span></span>
                <span></span>
                <span></span>
                <div>drag</div>
            </div>
              <img alt="" className="image" src="/images/airbnb/1.png" draggable="false"/>
              <img alt=""  className="image" src="/images/airbnb/2.png"draggable="false"/>
              <img alt="" className="image"  src="/images/airbnb/3.png"draggable="false"/>
              <img alt="" className="image"  src="/images/airbnb/4.png"draggable="false"/>

            </div>
            
            <div className="project-details">
              <div className="project-details-text">
              A web application replicating Airbnb’s core features, including property listings, secure user authentication, and dynamic booking functionality. The project ensures error management on both front-end and back-end, providing clear user feedback for issues like invalid inputs or booking conflicts, while back-end handles exceptions and logs errors securely. This showcases expertise in full-stack development and building reliable, user-focused applications.    

              </div>
              <div>
                <a href="https://github.com/cypher2509/Airbnb-clone.git">
                  <div class="button-icon">
                    <div class="icon">
                      <svg viewBox="0 0 24 24">
                        <path
                          d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                          fill="#222229"
                        ></path>
                      </svg>
                    </div>
                    <div class="cube">
                      <span class="side front">check it</span>
                      <span class="side top">on github</span>
                    </div>
                  </div>
                </a>
              </div>

            </div>
          </div>
      </div>
      
      <div className="project bigbull" name="Bigbull">              
          <div className="project-card">
            <div className="project-card-heading">
              <div className="project-name"> The Big Bull <hr/> </div>
              
              <div className="project-tech"> <br/>-JavaScript, HTML, CSS, MongoDB, Node.js, Express.js, Ajax, Axios, Mocha.</div>
            </div>

            <div id ='bigbull' ref={bigbull} className={window.innerWidth < 1024? "bigbull-slider img-slider": "image-track"} data-mouse-down-at="0" data-prev-percentage= "0" data-visible ={`${bigbullIsVisible? 1 :0}`} draggable="false">
            <div class="arrow">
                <span></span>
                <span></span>
                <span></span>
                <div>drag</div>
            </div>
              <img alt="" className="image" src="/images/bigbull/1.png" draggable="false"/>
              <img alt=""  className="image" src="/images/bigbull/2.png"draggable="false"/>
              <img alt="" className="image" src="/images/bigbull/6.png"draggable="false"/>
              <img alt="" className="image"  src="/images/bigbull/7.png"draggable="false"/>
            </div>
            
            <div className="project-details">
              <div className="project-details-text">
                The Big Bull is an interactive stock trading web application designed to simulate real-world trading and enhance learning without financial risk. It features real-time stock data, user authentication, portfolio management, watchlists, a trading panel for buying and selling stocks, and a competitive leaderboard to track user performance.

              </div>
              <div>
                <a href="https://github.com/cypher2509/big-bull.git">
                  <div class="button-icon">
                    <div class="icon">
                      <svg viewBox="0 0 24 24">
                        <path
                          d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                          fill="#222229"
                        ></path>
                      </svg>
                    </div>
                    <div class="cube">
                      <span class="side front">check it</span>
                      <span class="side top">on github</span>
                    </div>
                  </div>
                </a>
              </div>

            </div>
          </div>
      </div>
      <div className="project" name="CantStop">
          <div className="project-card">
            <div className="project-card-heading">
              <div>
                Can't Stop
                <hr/>
              </div>
                
              <div className="project-tech"><br/>- Java, Java Swing</div>
            </div>
            <div ref={cantstop} id="cantstop" className={window.innerWidth < 1024? "cantstop-slider img-slider": "image-track"}data-mouse-down-at="0" data-prev-percentage= "0" data-visible={`${cantstopIsVisible? 1:0}`} draggable="false">
            <div class="arrow">
              <span></span>
              <span></span>
              <span></span>
              <div>drag</div>
            </div>

            <img alt="" className="image" src="/images/cantstop/1.png" draggable="false"/>
            <img alt=""  className="image" src="/images/cantstop/2.png"draggable="false"/>
            <img alt="" className="image"  src="/images/cantstop/3.png"draggable="false"/>
            <img alt="" className="image"  src="/images/cantstop/7.png"draggable="false"/>
          </div>

            <div className="project-details">
              <div className="project-details-text">
              Can't Stop is a virtual version of the popular board game, designed to provide an engaging and accessible gaming experience. Developed by a team of five for an academic project, the game features a non-human player for solo play, a color blind mode for enhanced accessibility, and adjustable difficulty levels to cater to all skill levels. Players can save their progress and load saved games, ensuring a seamless and enjoyable experience. 

              </div>
              <div>
                <a href="https://github.com/cypher2509/cantstop0315.git">
                <div class="button-icon">
                    <div class="icon">
                      <svg viewBox="0 0 24 24">
                        <path
                          d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                          fill="#222229"
                        ></path>
                      </svg>
                    </div>
                    <div class="cube">
                      <span class="side front">check it</span>
                      <span class="side top">on github</span>
                    </div>
                </div>
                </a>
              </div>
            </div>
          </div>
        
      </div>
      <div className="project" name="ZombieChase">

        <div className="project-card">
          <div className="project-card-heading">
            <div>
              Zombie chase
              <hr/>
            </div>

            <div className="project-tech"><br/>-Unreal engine </div>
          </div>
            <div ref={zombiechase} id="zombiechase" className={window.innerWidth < 1024? "zombie-slider img-slider": "image-track"}data-mouse-down-at="0" data-prev-percentage= "0" draggable="false" data-visible={`${zombiechaseIsVisible? 1 :0}`}>
            <div class="arrow">
              <span></span>
              <span></span>
              <span></span>
              <div>drag</div>
            </div>
            <img alt="" className="image" src="/images/zombiechase/1.png" draggable="false"/>
            <img alt=""  className="image" src="/images/zombiechase/2.png"draggable="false"/>
            <img alt="" className="image"  src="/images/zombiechase/3.png"draggable="false"/>
            <img alt="" className="image"  src="/images/zombiechase/4.png"draggable="false"/>
              
            </div>

            <div className="project-details">
            <div className="project-details-text">
              Zombie Chase is an action-packed shooting game developed in Unreal Engine using Blueprints. In this thrilling game, players must cross a zombie-infested bridge, picking up weapons and battling hordes of zombies along the way. HealthKits are strategically placed to help players restore their health and continue their journey. With immersive graphics and intense gameplay, Zombie Chase offers an exhilarating experience for all zombie survival enthusiasts.
            </div>

            <div style={{width:"10vw"}}>
            <a href="https://drive.google.com/drive/u/1/folders/1wlHiXTjLhlzzFs8ukyecNVfQJmLCbBLx">
            <div class="button-icon">
                    <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="google-drive"><path d="m15.467 10-4.8-9H5.333l4.8 9zM4.747 2.026 0 10.333 2.667 15l4.655-8.146zM6.104 11l-2.286 4H13.5l2.5-4z"></path></svg>
                    </div>
                    <div class="cube">
                      <span class="side front">check it</span>
                      <span class="side top">on Drive</span>
                    </div>
                  </div>
            </a>
          
            </div>

            </div>



          </div>
          
      </div>
    </div>
)};

export default Project;

