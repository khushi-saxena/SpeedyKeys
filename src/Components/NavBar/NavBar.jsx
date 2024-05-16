import React from "react";
import logo from './../../Assets/logo.png';
import './NavBar.css';


const NavBar = () => {
  return (
   <div className="nav-container">
     <div className=" nav-left">
        <img className="flash-logo" src ={logo} alt ="logo"/>
        <p className="flash-logo-text">SpeedyKeys</p>
     
     </div>
       
     {/* <div className="nav-right">
       <a
         target="_blank"
         className="nav-connect-link"
         href="https://www.linkedin.com/in/khushi-saxena/"
         rel="noreferrer"
         >
           Connect
         </a>
       </div>*/}
    
   </div>
  );
}

export default NavBar;