import React from "react";
import logo from './../../Assets/logo.png';


const NavBar = () => {
  return (
   <div className="nav-container">
     <div className=" nav-left">
        <img className="flash-logo" src ={logo} alt ="logo"/>
        <p className="flash-logo-text">FlashType</p>
     
     </div>
   
   </div>
  );
}

export default NavBar;