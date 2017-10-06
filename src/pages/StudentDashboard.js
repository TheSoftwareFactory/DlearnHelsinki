import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import StudentSurveyQuestion from './StudentSurveyQuestion.js'
import SpiderGraph from '../components/shared/SpiderGraph.js';

class StudentDashboard extends Component {


	startSurvey = (e) => {
		e.preventDefault();
		console.log("Well, at least the method's being called correctly...");
		this.props.history.push("/student-survey");
		//        return <Redirect to="/student-survey"/>; //THIS DOESN'T WORK
	}


	constructor(props) {
		super(props);

	}

	componentDidMount() {
		//call for survey open 

	}


	render() {
		// DO NOT put margins into buttons in CSS! 
		// They may not be applied correctly during rendering.
		return (
			<div className="container text-center">
		    <div className="jumbotron">

				<h1>Welcome Tobi!</h1>

		    <hr className="my-4" />
				<div className="row">
					<div className="col-sm-3">
						<div className="btn-group-vertical">
							<button type="button" onClick={this.startSurvey} className="btn btn-primary">Survey</button>
							<button type="button" className="btn btn-primary">History</button>
							<button type="button" className="btn btn-primary">Profile</button>
						</div>
					</div>
					<div className="col-sm-9">
						<SpiderGraph name={"Last Survey Results"} students={1} classes={1} surveys={27} />
					</div>
				</div>

			</div>
			</div>
		);
	}
}

export default StudentDashboard;
