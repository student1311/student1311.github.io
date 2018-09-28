import React, { Component } from 'react';

import '../css/about.css'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import Sidebar from './Sidebar';

import "animate.css/animate.min.css";

import ScrollAnimation from 'react-animate-on-scroll';

import Plx from 'react-plx';

import Tilt from 'react-tilt';

const parallaxData00 = [
  {
    start: 1900,
    duration: 1000,
    properties: [
      {
        startValue: -500,
        endValue: 0,
        property: 'translateX',
      },
      {
        startValue: -500,
        endValue: 0,
        property: 'translateY',
      },
      {
        startValue: -500,
        endValue: 0,
        property: 'rotate',
      },
      {
        startValue: 25,
        endValue: 0,
        property: 'blur',
      },
    ],
  },
];
const parallaxData01 = [
  {
    start: 1900,
 
    duration: 1000,
    properties: [
      {
        startValue: -300,
        endValue: 0,
        property: 'translateX',
      },
      {
        startValue: -300,
        endValue: 0,
        property: 'translateY',
      },
      {
        startValue: 90,
        endValue: 0,
        property: 'rotate',
      },
      {
        startValue: 25,
        endValue: 0,
        property: 'blur',
      },
    ],
  },
];

const parallaxData02 = [
  {
    start: 1900,
    duration: 1000,
    properties: [
      {
        startValue: -400,
        endValue: 0,
        property: 'translateX',
      },
      {
        startValue: -400,
        endValue: 0,
        property: 'translateY',
      },
      {
        startValue: -400,
        endValue: 0,
        property: 'rotate',
      },
      {
        startValue: 25,
        endValue: 0,
        property: 'blur',
      },
    ],
  },
];

const parallaxData03 = [
  {
    start: 1900,
    duration: 1000,
    properties: [
      {
        startValue: -600,
        endValue: 0,
        property: 'translateX',
      },
      {
        startValue: -600,
        endValue: 0,
        property: 'translateY',
      },
      {
        startValue: 180,
        endValue: 0,
        property: 'rotate',
      },
     {
        startValue: 25,
        endValue: 0,
        property: 'blur',
      },
    ],
  },
];

const parallaxData04 = [
  {
    start: 1900,
    duration: 1000,
    properties: [
      {
        startValue: -700,
        endValue: 0,
        property: 'translateX',
      },
      {
        startValue: -700,
        endValue: 0,
        property: 'translateY',
      },
      {
        startValue: 90,
        endValue: 0,
        property: 'rotate',
      },
      {
        startValue: 25,
        endValue: 0,
        property: 'blur',
      },
    ],
  },
];

const parallaxData05 = [
  {
    start: 1900,
    duration: 1000,
    properties: [
      {
        startValue: -200,
        endValue: 0,
        property: 'translateX',
      },
      {
        startValue: -200,
        endValue: 0,
        property: 'translateY',
      },
      {
        startValue: 130,
        endValue: 0,
        property: 'rotate',
      },
      {
        startValue: 25,
        endValue: 0,
        property: 'blur',
      },
    ],
  },
];

const parallaxData06 = [
  {
    start: 1900,
    duration: 1000,
    properties: [
      {
        startValue: -250,
        endValue: 0,
        property: 'translateX',
      },
      {
        startValue: -250,
        endValue: 0,
        property: 'translateY',
      },
      {
        startValue: 150,
        endValue: 0,
        property: 'rotate',
      },
      {
        startValue: 25,
        endValue: 0,
        property: 'blur',
      },
    ],
  },
];

const parallaxData07 = [
  {
    start: 1900,
    duration: 1000,
    properties: [
      {
        startValue: -100,
        endValue: 0,
        property: 'translateX',
      },
      {
        startValue: -100,
        endValue: 0,
        property: 'translateY',
      },
      {
        startValue: 180,
        endValue: 0,
        property: 'rotate',
      },
     {
        startValue: 25,
        endValue: 0,
        property: 'blur',
      },
    ],
  },
];

const parallaxData08 = [
  {
    start: 1900,
    duration: 1000,
    properties: [
      {
        startValue: -700,
        endValue: 0,
        property: 'translateX',
      },
      {
        startValue: -700,
        endValue: 0,
        property: 'translateY',
      },
      {
        startValue: 120,
        endValue: 0,
        property: 'rotate',
      },
      {
        startValue: 25,
        endValue: 0,
        property: 'blur',
      },
    ],
  },
];

const parallaxData09 = [
  {
    start: 1900,
    duration: 1000,
    properties: [
      {
        startValue: -500,
        endValue: 0,
        property: 'translateX',
      },
      {
        startValue: -500,
        endValue: 0,
        property: 'translateY',
      },
      {
        startValue: 180,
        endValue: 0,
        property: 'rotate',
      },
      {
        startValue: 25,
        endValue: 0,
        property: 'blur',
      },
    ],
  },
];

const parallaxData10 = [
  {
    start: 1900,
    duration: 1000,
    properties: [
      {
        startValue: -800,
        endValue: 0,
        property: 'translateX',
      },
      {
        startValue: -800,
        endValue: 0,
        property: 'translateY',
      },
      {
        startValue: 180,
        endValue: 0,
        property: 'rotate',
      },
      {
        startValue: 25,
        endValue: 0,
        property: 'blur',
      },
    ],
  },
];

const parallaxData11 = [
  {
    start: 1900,
    duration: 1000,
    properties: [
      {
        startValue: -200,
        endValue: 0,
        property: 'translateX',
      },
      {
        startValue: -200,
        endValue: 0,
        property: 'translateY',
      },
      {
        startValue: 180,
        endValue: 0,
        property: 'rotate',
      },
      {
        startValue: 25,
        endValue: 0,
        property: 'blur',
      },
    ],
  },
];

const parallaxData12 = [
  {
    start: 1900,
    duration: 1000,
    properties: [
      {
        startValue: -900,
        endValue: 0,
        property: 'translateX',
      },
      {
        startValue: -900,
        endValue: 0,
        property: 'translateY',
      },
      {
        startValue: 180,
        endValue: 0,
        property: 'rotate',
      },
      {
        startValue: 25,
        endValue: 0,
        property: 'blur',
      },
    ],
  },
];

const parallaxData13 = [
  {
    start: 1900,
    duration: 1000,
    properties: [
      {
        startValue: -400,
        endValue: 0,
        property: 'translateX',
      },
      {
        startValue: -400,
        endValue: 0,
        property: 'translateY',
      },
      {
        startValue: 180,
        endValue: 0,
        property: 'rotate',
      },
      {
        startValue: 25,
        endValue: 0,
        property: 'blur',
      },
    ],
  },
];

const parallaxData14 = [
  {
    start: 1900,
    duration: 1000,
    properties: [
      {
        startValue: -500,
        endValue: 0,
        property: 'translateX',
      },
      {
        startValue: -500,
        endValue: 0,
        property: 'translateY',
      },
      {
        startValue: 180,
        endValue: 0,
        property: 'rotate',
      },
      {
        startValue: 25,
        endValue: 0,
        property: 'blur',
      },
    ],
  },
];

const parallaxData15 = [
  {
    start: 1900,
    duration: 1000,
    properties: [
      {
        startValue: -200,
        endValue: 0,
        property: 'translateX',
      },
      {
        startValue: -200,
        endValue: 0,
        property: 'translateY',
      },
      {
        startValue: 180,
        endValue: 0,
        property: 'rotate',
      },
      {
        startValue: 25,
        endValue: 0,
        property: 'blur',
      },
    ],
  },
];

const parallaxData16 = [
  {
    start: 1900,
    duration: 1000,
    properties: [
      {
        startValue: -300,
        endValue: 0,
        property: 'translateX',
      },
      {
        startValue: -300,
        endValue: 0,
        property: 'translateY',
      },
      {
        startValue: 180,
        endValue: 0,
        property: 'rotate',
      },
      {
        startValue: 25,
        endValue: 0,
        property: 'blur',
      },
    ],
  },
];

const parallaxData17 = [
  {
    start: 1900,
    duration: 1000,
    properties: [
      {
        startValue: -700,
        endValue: 0,
        property: 'translateX',
      },
      {
        startValue: -700,
        endValue: 0,
        property: 'translateY',
      },
      {
        startValue: 180,
        endValue: 0,
        property: 'rotate',
      },
      {
        startValue: 25,
        endValue: 0,
        property: 'blur',
      },
    ],
  },
];

const parallaxData18 = [
  {
    start: 1900,
    duration: 1000,
    properties: [
      {
        startValue: -200,
        endValue: 0,
        property: 'translateX',
      },
      {
        startValue: -200,
        endValue: 0,
        property: 'translateY',
      },
      {
        startValue: 180,
        endValue: 0,
        property: 'rotate',
      },
      {
        startValue: 25,
        endValue: 0,
        property: 'blur',
      },
    ],
  },
];

const parallaxData19 = [
  {
    start: 1900,
    duration: 1000,
    properties: [
      {
        startValue: -900,
        endValue: 0,
        property: 'translateX',
      },
      {
        startValue: -900,
        endValue: 0,
        property: 'translateY',
      },
      {
        startValue: 180,
        endValue: 0,
        property: 'rotate',
      },
      {
        startValue: 25,
        endValue: 0,
        property: 'blur',
      },
    ],
  },
];

const parallaxData20 = [
  {
    start: 1900,
    duration: 1000,
    properties: [
      {
        startValue: -400,
        endValue: 0,
        property: 'translateX',
      },
      {
        startValue: -400,
        endValue: 0,
        property: 'translateY',
      },
      {
        startValue: 180,
        endValue: 0,
        property: 'rotate',
      },
      {
        startValue: 25,
        endValue: 0,
        property: 'blur',
      },
    ],
  },
];

const parallaxData21 = [
  {
    start: 1900,
    duration: 1000,
    properties: [
      {
        startValue: -600,
        endValue: 0,
        property: 'translateX',
      },
      {
        startValue: -600,
        endValue: 0,
        property: 'translateY',
      },
      {
        startValue: 180,
        endValue: 0,
        property: 'rotate',
      },
      {
        startValue: 25,
        endValue: 0,
        property: 'blur',
      },
    ],
  },
];

const parallaxData22 = [
  {
    start: 1900,
    duration: 1000,
    properties: [
      {
        startValue: -300,
        endValue: 0,
        property: 'translateX',
      },
      {
        startValue: -300,
        endValue: 0,
        property: 'translateY',
      },
      {
        startValue: 180,
        endValue: 0,
        property: 'rotate',
      },
      {
        startValue: 25,
        endValue: 0,
        property: 'blur',
      },
    ],
  },
];

const parallaxData23 = [
  {
    start: 1900,
    duration: 1000,
    properties: [
      {
        startValue: -800,
        endValue: 0,
        property: 'translateX',
      },
      {
        startValue: -800,
        endValue: 0,
        property: 'translateY',
      },
      {
        startValue: 180,
        endValue: 0,
        property: 'rotate',
      },
      {
        startValue: 25,
        endValue: 0,
        property: 'blur',
      },
    ],
  },
];

const parallaxData24 = [
  {
    start: 1900,
    duration: 1000,
    properties: [
      {
        startValue: -700,
        endValue: 0,
        property: 'translateX',
      },
      {
        startValue: -700,
        endValue: 0,
        property: 'translateY',
      },
      {
        startValue: 180,
        endValue: 0,
        property: 'rotate',
      },
      {
        startValue: 25,
        endValue: 0,
        property: 'blur',
      },
    ],
  },
];


const parallaxDataMobile = [
  {
    start: 900,
    duration: 1000,
    properties: [
      {
        startValue: 45,
        endValue: 0,
        property: 'blur',
      },
    ],
  },
];




class About extends Component {
  render() {
    return (
      <div className="about" id="about">

		    <div className="aboutWrapImg" id="aboutWrapImg">
		    		
				
			<Plx className='MyAwesomeParallax'
		        parallaxData={ parallaxData00 }
		      >
		    <img className="aboutImg" src="img/I/max-0-0.png" alt="img"/>
             </Plx>
			<Plx className='MyAwesomeParallax'
		        parallaxData={ parallaxData01 }
		      >
				<img className="aboutImg" src="img/I/max-0-1.png" alt="img"/>
			</Plx>
			<Plx className='MyAwesomeParallax'
		        parallaxData={ parallaxData02 }
		      >
				<img className="aboutImg" src="img/I/max-0-2.png" alt="img"/>
			</Plx>
			<Plx className='MyAwesomeParallax'
		        parallaxData={ parallaxData03 }
		      >
				<img className="aboutImg" src="img/I/max-0-3.png" alt="img"/>
			</Plx>
			<Plx className='MyAwesomeParallax'
		        parallaxData={ parallaxData04 }
		      >
				<img className="aboutImg" src="img/I/max-0-4.png" alt="img"/>
			</Plx>
			<Plx className='MyAwesomeParallax'
		        parallaxData={ parallaxData05 }
		      >
				<img className="aboutImg" src="img/I/max-1-0.png" alt="img"/>
			</Plx>
			<Plx className='MyAwesomeParallax'
		        parallaxData={ parallaxData06 }
		      >
				<img className="aboutImg" src="img/I/max-1-1.png" alt="img"/>
			</Plx>
				<Plx className='MyAwesomeParallax'
		        parallaxData={ parallaxData07 }
		      >
				<img className="aboutImg" src="img/I/max-1-2.png" alt="img"/>
			</Plx>
			<Plx className='MyAwesomeParallax'
		        parallaxData={ parallaxData08 }
		      >
				<img className="aboutImg" src="img/I/max-1-3.png" alt="img"/>
			</Plx>
				<Plx className='MyAwesomeParallax'
		        parallaxData={ parallaxData09 }
		      >
				<img className="aboutImg" src="img/I/max-1-4.png" alt="img"/>
			</Plx>
			<Plx className='MyAwesomeParallax'
		        parallaxData={ parallaxData10 }
		      >
				<img className="aboutImg" src="img/I/max-2-0.png" alt="img"/>
			</Plx>
			<Plx className='MyAwesomeParallax'
		        parallaxData={ parallaxData11 }
		      >
				<img className="aboutImg" src="img/I/max-2-1.png" alt="img"/>
			</Plx>
			<Plx className='MyAwesomeParallax'
		        parallaxData={ parallaxData12 }
		      >
				<img className="aboutImg" src="img/I/max-2-2.png" alt="img"/>
			</Plx>
			<Plx className='MyAwesomeParallax'
		        parallaxData={ parallaxData13 }
		      >
				<img className="aboutImg" src="img/I/max-2-3.png" alt="img"/>
			</Plx>
			<Plx className='MyAwesomeParallax'
		        parallaxData={ parallaxData14 }
		      >
				<img className="aboutImg" src="img/I/max-2-4.png" alt="img"/>
			</Plx>
			<Plx className='MyAwesomeParallax'
		        parallaxData={ parallaxData15 }
		      >
				<img className="aboutImg" src="img/I/max-3-0.png" alt="img"/>
			</Plx>
			<Plx className='MyAwesomeParallax'
		        parallaxData={ parallaxData16 }
		      >
				<img className="aboutImg" src="img/I/max-3-1.png" alt="img"/>
			</Plx>
			<Plx className='MyAwesomeParallax'
		        parallaxData={ parallaxData17 }
		      >
				<img className="aboutImg" src="img/I/max-3-2.png" alt="img"/>
			</Plx>
			<Plx className='MyAwesomeParallax'
		        parallaxData={ parallaxData18 }
		      >
				<img className="aboutImg" src="img/I/max-3-3.png" alt="img"/>
			</Plx>			
			<Plx className='MyAwesomeParallax'
		        parallaxData={ parallaxData19 }
		      >
				<img className="aboutImg" src="img/I/max-3-4.png" alt="img"/>
			</Plx>
			<Plx className='MyAwesomeParallax'
		        parallaxData={ parallaxData20 }
		      >
				<img className="aboutImg" src="img/I/max-4-0.png" alt="img"/>
			</Plx>
			<Plx className='MyAwesomeParallax'
		        parallaxData={ parallaxData21 }
		      >
				<img className="aboutImg" src="img/I/max-4-1.png" alt="img"/>
			</Plx>
			<Plx className='MyAwesomeParallax'
		        parallaxData={ parallaxData22 }
		      >
				<img className="aboutImg" src="img/I/max-4-2.png" alt="img"/>
			</Plx>			
			<Plx className='MyAwesomeParallax'
		        parallaxData={ parallaxData23 }
		      >
				<img className="aboutImg" src="img/I/max-4-3.png" alt="img"/>
			</Plx>
			<Plx className='MyAwesomeParallax'
		        parallaxData={ parallaxData24 }
		      >
				<img className="aboutImg" src="img/I/max-4-4.png" alt="img"/>
			</Plx>
			
		    </div>

		    <div className="aboutWrapImgMobile">
		     	<Tilt className="Tilt" options={{ max : 25 }}  >
					<Plx className='MyAwesomeParallax'
				        parallaxData={ parallaxDataMobile }
				      >
						<img src="img/I_mob.png" alt="img"/>
					</Plx>
				</Tilt>
		    </div>
		    
      <Element name="about" className="element aboutTextBlock" >	      
	         <h3 className="introSubtitle">A LITTLE BIT</h3>
	         <ScrollAnimation animateIn='pulse'
        		 >
	         	<h1 className="aboutTitle">About Me</h1>
	         </ScrollAnimation>
	         <p className="aboutText">Hello,
				My name is Maxim. I am newcomer in web development. I do HTML markup of any complexity, I am experienced with jquery, bootstrap, sass, pug, gulp. 
				Currently I extensively learn REACT. I am in permanent learning of web technologies. 
				I would love to do new and complex tasks. 
				I keep a healthy lifestyle and go for sport.
			</p>         
  		</Element>
  		
      </div>
    );
  }
}



export default About;