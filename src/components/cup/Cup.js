import React from "react";
import"../loader/loader.css";

const Cup=({className=""}) =>{
    return(
      <div className="cup-only">
        <div className="coffee-medium__smoke coffee-medium__smoke-one"></div>
            <div className="coffee-medium__smoke coffee-medium__smoke-two"></div>
            <div className="coffee-medium__smoke coffee-medium__smoke-three"></div>
            <div className="coffee-medium__smoke coffee-medium__smoke-for"></div>
            <div className="coffee-medium__cup"></div>
      </div>
    );
} ;

export default Cup;