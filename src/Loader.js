import React from 'react';
import"./loader.css";

const Loader = ({className = ""})=>{
    return(
   <div className="loader">
   <div className="container">
   <div className="coffee-header">
     <div className="coffee-header__buttons coffee-header__button-one"></div>
     <div className="coffee-header__buttons coffee-header__button-two"></div>
     <div className="coffee-header__display"></div>
     <div className="coffee-header__details"></div>
   </div>
   <div className="coffee-medium">
     <div className="coffe-medium__exit"></div>
     <div className="coffee-medium__arm"></div>
     <div className="coffee-medium__liquid"></div>
   </div>
   <div className="coffee-footer"></div>
 </div>
</div>


    );
};

export default Loader;