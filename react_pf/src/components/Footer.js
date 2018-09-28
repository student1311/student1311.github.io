import React, { Component } from 'react';

import '../css/about.css'




class Footer extends Component {
  render() {
    return (
      <div className="footer" id="about">	
			<p className="aboutContacts">- Kiev, Ukraine</p>
			<p>
				<a href="mailto:1311@i.ua" className="aboutContacts">- 1311@i.ua</a>
			</p>
      </div>
    );
  }
}



export default Footer;