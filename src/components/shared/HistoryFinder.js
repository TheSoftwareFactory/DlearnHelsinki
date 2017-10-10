import React, { Component } from 'react';
import moment from 'moment';
import Calendar from 'react-input-calendar';
import 'react-input-calendar/style/index.css'

// http://voidcanvas.com/react-tutorial-understanding-and-making-the-first-application/
// Pick one: https://react.rocks/tag/DatePicker
// https://github.com/Rudeg/react-input-calendar

// Don't let the names fool you! These two don't need to be in chronological order.
var rangeStart;
var rangeEnd;

const margins = {
    margin: '5px'
}

class HistoryFinder extends Component {    

    constructor(props) {
        var rangeStart = null;
        var rangeEnd = null;
        super(props);
        this.changeStart = this.changeStart.bind(this);
        this.changeEnd = this.changeEnd.bind(this);
    }

    searchHistory = function(event) {
        var query = event.target.value.toLowerCase();
        this.props.doSearch(query);
    }

    changeStart(date) {
        rangeStart = date;
    }
    
    changeEnd(date) {
        rangeEnd = date;
    }

    render() {
        
        return(
            <div>
                <div className = "searchBar">
                    <input type="text" 
                        style = {margins} 
                        placeholder="Search" 
                        value = {this.props.query} 
                        onChange = {this.searchHistory.bind(this)}/>
                    <button className="btn btn-primary" 
                        style = {margins} 
                        onClick = {this.props.sortData}> 
                            Sort by Date 
                    </button>
                </div>
                <div className = "row" style = {margins}>
                    <Calendar 
                        format='DD-MM-YYYY' 
                        computableFormat = 'YYYY-MM-DD'
                        date = {rangeStart}
                        onChange = {this.changeStart} />
                    <Calendar 
                        format='DD-MM-YYYY' 
                        computableFormat = 'YYYY-MM-DD'
                        date = {rangeEnd}
                        onChange = {this.changeEnd} />
                    <button className="btn btn-primary" 
                        style = {margins}
                        onClick = {this.props.selectRange(rangeStart, rangeEnd)}> 
                            Go 
                    </button>
                </div>
            </div>
        ); 

    }
} export default HistoryFinder;