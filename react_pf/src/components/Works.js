import React, { Component } from 'react';

import '../css/works.css'

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import Sidebar from './Sidebar';

import "animate.css/animate.min.css";

import ScrollAnimation from 'react-animate-on-scroll';

import Tilt from 'react-tilt';

import Plx from 'react-plx';


const parallaxData = [
  {
    start: 800,
    duration: 5000,
    properties: [
      {
        startValue: 0,
        endValue: -6000,
        property: 'translateY',
      },
    ],
  },
];
const parallaxData1 = [
  {
    start: 1000,
    duration: 5000,
    properties: [
      {
        startValue: 0,
        endValue: -6000,
        property: 'translateY',
      },
    ],
  },
];
const parallaxData2 = [
  {
    start: 1200,
    duration: 5000,
    properties: [
      {
        startValue: 0,
        endValue: -6000,
        property: 'translateY',
      },
    ],
  },
];
const parallaxData3 = [
  {
    start: 1400,
    duration: 5000,
    properties: [
      {
        startValue: 0,
        endValue: -6000,
        property: 'translateY',
      },
    ],
  },
];
class Works extends Component {
  render() {
    return (
      <div className="works" id="works">
      <Element name="works" className="element worksIn" >
          <ScrollAnimation animateIn='pulse'
        		 >
          <h1 className="worksTitle">Works</h1>
          <h2 className="worksSubtitle">I hope that you like it</h2>
           </ScrollAnimation>
          <div className="imgWrap">
			 <ScrollAnimation animateIn='zoomIn'
             >
             <div className="worksItem even" >
				<Tilt className="Tilt" options={{ max : 25 }}  >
	          		<img  id="inner" className="worksImg Tilt-inner"  src="img/graph1.jpg" alt="img" />	          		
				</Tilt>
				<h3 className="worksNumber"><span className="worksLine"></span>01</h3>
				<h2 className="worksItemTitle">landing <br/> page</h2>			
				<a className="worksLink" href="https://student1311.github.io/graph/index.html" target="_blank">view</a>	
			</div>
			</ScrollAnimation>
      <ScrollAnimation animateIn='zoomIn'
             >
			        <div className="worksItem odd" >
					    <Tilt className="Tilt" options={{ max : 25 }}  >
			          		<img  id="inner" className="worksImg Tilt-inner"  src="img/squad1.jpg" alt="img" />
			          		
						</Tilt>
						<h3 className="worksNumberRight"><span className="worksLine"></span>02</h3>		
						<h2 className="worksItemTitle rightPos ml" >landing <br/> page</h2>
						<a className="worksLink rightPos" href="https://student1311.github.io/squad/index.html" target="_blank">view</a>
				    </div>
        </ScrollAnimation>

			 <ScrollAnimation animateIn='zoomIn'
             >
			    <div className="worksItem even" >
					<Tilt className="Tilt" options={{ max : 25 }}  >
		          		<img  id="inner" className="worksImg Tilt-inner"  src="img/milestone1.jpg" alt="img" />
		          		
					</Tilt>
					<h3 className="worksNumber"><span className="worksLine"></span>03</h3>
					<h2 className="worksItemTitle" >company <br/> website</h2>
					<a className="worksLink" href="https://milestone-ua.com/" target="_blank">view</a>
				</div>
			
      </ScrollAnimation>
      <ScrollAnimation animateIn='zoomIn'
             >
	        	<div className="worksItem odd" >
				<div className="worksItemIn">
				    <Tilt className="Tilt" options={{ max : 25 }}  >
		          		<img  id="inner" className="worksImg Tilt-inner"  src="img/fotograph1.jpg" alt="img" />
		          		
					</Tilt>
					<h3 className="worksNumberRight"><span className="worksLine"></span>04</h3>
					<h2 className="worksItemTitle rightPos" >website of <br/> photographer</h2>
					<a className="worksLink rightPos" href="https://student1311.github.io/fotograf/index.html" target="_blank">view</a>
				</div>
				</div>
		</ScrollAnimation>
          </div>
          
  		</Element>
      </div>
    );
  }
}



export default Works;