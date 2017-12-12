import React, { Component } from 'react';
import { ROUTES } from '../constants.js';


class Home extends Component {

	constructor(props){
		super(props);
		this.state = {
		    goTo : ROUTES.ROOT
		};
	}


  render() {

    return (
	<div className="container">
	    <h1>Error 404</h1>
	    <p>Oups ! The page you are looking for does not exist...</p>
	</div>
          );
  }
}

export default Home;
