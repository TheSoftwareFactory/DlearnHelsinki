import React, { Component } from 'react';

//http://voidcanvas.com/react-tutorial-understanding-and-making-the-first-application/

class HistoryFinder extends Component {    

    constructor(props) {
        super(props);
    }

    searchHistory = function(event) {
        var query = event.target.value.toLowerCase();
        this.props.doSearch(query);
        console.log("Query: "+query);
    }
    

    sayHi = function () {
        console.log("Hello!")
    }

    render() {
        
        return(
            <div>
                An amazing search bar is supposed to be here, but it hasn't been implemented yet.
                <div className = "searchBar">
                    <input type="text" placeholder="Search" value = {this.props.query} onChange = {this.searchHistory.bind(this)}/>
                </div>
            </div>
        ); 
//        return (
//            <div>
//                <div className = "form-group">
//                    <input type = "text" id = "query" onChange = {this.sayHi}/>
//                    <button type="button" className="btn btn-default" onClick = {this.sayHi}>Search</button>
//                </div>
//            </div>
//        );
    }
} export default HistoryFinder;