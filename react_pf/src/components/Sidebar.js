import React, { Component } from 'react';

import '../App.css';

import HamburgerMenu from './HamburgerMenu';

import Delay from 'react-delay';

import Intro from './Intro';

import Works from './Works';

import About from './About';

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'




class Sidebar extends React.Component {
	constructor() {
		super();

		this.state = {
			open: [false, true, false, true],
			isActive: true,
			menuOpen: true,
			active: false
		},
		this.scrollToTop = this.scrollToTop.bind(this)
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  


	handleClick(id) {
		console.log(this.state.open[0]);
		console.log(this.state.isActive);

		let { open } = this.state;
    	this.setState({
			open: [...open.slice(0, id), !open[id], ...open.slice(id + 1)],
			isActive: !this.state.isActive,
			menuOpen: !this.state.menuOpen
		});
		
	}

	handleClickMenu(id) {
		
		let { open } = this.state;
    	this.setState({
			open: [false, true, false, true],
			isActive: !this.state.isActive,
			menuOpen: !this.state.menuOpen
		});
		this.setState((prevState) => { 
	     	active: !prevState.active
	    });

	}



	render() {
	
		return (

			       
			<div className='menu-row'>
	
			    <HamburgerMenu 
			   
				active={this.state.false}
		        isOpen={this.state.open[0]}
		        menuClicked={this.handleClick.bind(this, 0)}
		         width={18}
    			height={15}
    			strokeWidth={1}
			    rotate={0}
		        color='#fff'
			    borderRadius={5}
		        animationDuration={0.3}
		    />
			<div className={(this.state.isActive) ? 'sidebar' : 'sidebar expanded'}>
			
			    <ul className={(this.state.menuOpen) ? 'menu' : 'menu open'}>
				 	<li className="menuItem" >
				 		<h2 className="menuSubtitle">HOME</h2>
				 		<Link activeClass="active" onClick={ e => this.handleClickMenu() }  className="menuLink" to="intro" spy={true} smooth={true} offset={-310} duration={2500} >Intro</Link>
				 		
				 	</li>
				 	<li className="menuItem">
				 		<h2 className="menuSubtitle">PROJECTS</h2>
				 		<Link activeClass="active" onClick={ e => this.handleClickMenu() } className="menuLink" to="works" spy={true} smooth={true} offset={-150} duration={3000} >Works</Link>

				 	</li>
				 	<li className="menuItem">
				 		<h2 className="menuSubtitle">ABOUT ME</h2>
					 	<Link activeClass="active" onClick={ e => this.handleClickMenu() } className="menuLink" to="about" spy={true} smooth={true} offset={-320} duration={3000} >About</Link>
				 	</li>
				 </ul>
				 
			
			 </div>
				

			</div>
		);
	}
};

export default Sidebar;