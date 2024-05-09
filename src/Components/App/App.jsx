import React from "react";
import NavBar from "../NavBar/NavBar";
import './App.css';

class App extends React.Component{
   render(){

    return (
        <div className="app">
            {/* {Nav section} */}
            <NavBar/>
            {/* {landing page} */}
            {/* {footer} */}
        </div>
    )
    
   }
}

export default App;