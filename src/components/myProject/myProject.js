import React from "react";
import "./myproject.css";
import { useInView } from "react-intersection-observer";

const MyProject = () =>{
    const{ref: myproject ,inView: myprojectIsVisible} = useInView();

    return(
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

    );
}

export default MyProject;