import React from "react";
import "./skills.css"
const Skills = ()=>{
    return(
    <div>
        <div className="skills-heading">My skills <hr/></div>
        <div className="skills">
            <div>
            <img className="skill-img" src="/images/skills/1.png"></img>
            </div>
            <div>
            <img className="skill-img" src="/images/skills/2.png"></img>
            <img className="skill-img" src="/images/skills/0.png"></img>
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
    </div>
    );
}

export default Skills;