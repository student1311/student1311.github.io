import React, { Component } from 'react';
import '../App.css';
import HamburgerMenu from './HamburgerMenu';
import Sidebar from './Sidebar';
import Intro from './Intro';
import Works from './Works';
import About from './About';






class App extends Component {
   componentWillMount () {
        const script = document.createElement("script");

        script.src = "js/Bg.js";
        script.async = true;

        document.body.appendChild(script);
    }
  render() {
    return (
      <div className="App" >
		<div id="bg">
          <Sidebar />
    	<Intro />
    	<Works />
  		<About />
		</div>
      </div>
    );
  }
}

export default App;
