import React from 'react';
import"./loader.css";

const Loader = ({className = ""})=>{
    return(
   <div class="loader">
   <div class="container">
   <div class="coffee-header">
     <div class="coffee-header__buttons coffee-header__button-one"></div>
     <div class="coffee-header__buttons coffee-header__button-two"></div>
     <div class="coffee-header__display"></div>
     <div class="coffee-header__details"></div>
   </div>
   <div class="coffee-medium">
     <div class="coffe-medium__exit"></div>
     <div class="coffee-medium__arm"></div>
     <div class="coffee-medium__liquid"></div>
   </div>
   <div class="coffee-footer"></div>
 </div>
</div>


    );
};

export default Loader;