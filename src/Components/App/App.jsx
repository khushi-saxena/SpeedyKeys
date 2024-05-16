import React from "react";
import NavBar from "../NavBar/NavBar";
import './App.css';
import Landing from "../Landing/Landing";

class App extends React.Component{
   render(){

    return (
        <div className="app">
            {/* {Nav section} */}
            <NavBar/>
            {/* {landing page} */}
            <Landing/>
            {/* {footer} */}
        </div>
    )
    
   }
}

export default App;