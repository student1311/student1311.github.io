import React, { Component } from 'react';

import Intro from './Intro';
import Works from './Works';

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class Section extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <div>
          <nav >
            <div >
              <div  id="bs-example-navbar-collapse-1">
                <ul >
                  <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Test 1</Link></li>
                  <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>Test 2</Link></li>
                  <li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} >Test 3</Link></li>
                  
                </ul>
              </div>
            </div>
          </nav>

          <Element name="test1" className="element" >
            <Intro />
        </Element>

          <Element name="test2" className="element">
            <Works />
        </Element>

          <Element name="test3" className="element">
            test 3
        </Element>

          <Element name="test4" className="element">
            test 4
        </Element>

          <Element name="test5" className="element">
            test 5
        </Element>

          <div id="anchor" className="element">
            test 6 (anchor)
        </div>

          <Link activeClass="active" to="firstInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
            Go to first element inside container
        </Link>

          <Link activeClass="active" to="secondInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
            Go to second element inside container
        </Link>

          <Element name="test7" className="element" id="containerElement" style={{
            position: 'relative',
            height: '200px',
            overflow: 'scroll',
            marginBottom: '100px'
          }}>

            <Element name="firstInsideContainer" style={{
              marginBottom: '200px'
            }}>
              first element inside container
          </Element>

            <Element name="secondInsideContainer" style={{
              marginBottom: '200px'
            }}>
              second element inside container
          </Element>
          </Element>


          <Element id="same" className="element">
            Two links point to this
        </Element>


          <Element name="scroll-to-element" className="element">
            Scroll to element
        </Element>

          <Element className="element" id="scroll-container" style={{
            position: 'relative',
            height: '200px',
            overflow: 'scroll',
            marginBottom: '100px'
          }}>

            <Element name="scroll-container-first-element" style={{
              marginBottom: '200px'
            }}>
              first element inside container
          </Element>

            <Element name="scroll-container-second-element" style={{
              marginBottom: '200px'
            }}>
              second element inside container
          </Element>
          </Element>

          <a onClick={this.scrollToTop}>To the top!</a>
      </div>
    );
  }
};

export default Section;