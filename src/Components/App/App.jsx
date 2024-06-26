import React from "react";
import NavBar from "../NavBar/NavBar";
import './App.css';
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import Challenge from "../Challenge/Challenge";

class App extends React.Component{
   render(){

    return (
        <div className="app">
            {/* {Nav section} */}
            <NavBar/>
            {/* {landing page} */}
            <Landing/>
            {/*Challenge Section */}
            <Challenge/>
            {/* {footer} */}
            <Footer/>
        </div>
    )
    
   }
}

export default App;