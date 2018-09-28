import React, { Component } from 'react';

import '../css/intro.css'

import Sidebar from './Sidebar';

import Typed from 'react-typed';

import Delay from 'react-delay';

import "animate.css/animate.min.css";

import ScrollAnimation from 'react-animate-on-scroll';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'




class Intro extends Component {
	

  render() {
    return (
      <div className="intro" id="intro" >
      <Element name="intro" className="element" >
      <ScrollAnimation animateIn='zoomIn'
        animateOut='zoomOut'>
          <h3 className="introSubtitle">
            THE PORTFOLIO OF
          </h3>
	    </ScrollAnimation>
      <ScrollAnimation animateIn='zoomIn'
        animateOut='zoomOut' delay={500}>
        	<h2 className="introTitle">
        		IONASH 
        	</h2>
       </ScrollAnimation> 
        <ScrollAnimation animateIn='zoomIn'
        animateOut='zoomOut' delay={1000}>
        	<h2 className="introTitle">
        		MAXIM
        	</h2>
    	</ScrollAnimation>
			

			
		<Delay wait={2000}>
			<Typed 
            strings={[
            	'WEB CODER',
            	'REACT JUNIOR DEWELOPER',
                'FRONTEND DEVELOPER'               
                ]}
				className="introSubtitleBottom"
                typeSpeed={60}
                backSpeed={20}                    
                >                   
            </Typed>
  		</Delay>
  		</Element>

      </div>
    );
  }
}



export default Intro;