import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';

class SpiderGraph extends Component {

constructor(props) {
    super(props);
    
    this.state = {
      cpt: 0,
      url: "http://172.20.10.3:8080/skeleton/webapi/students/1/spidergraphs/1",
      data: {
	  labels: ['Value1', 'Value2', 'Value3', 'Value4', 'Value5', 'Value6', 'Value7', 'Value8', 'Value9', 'Value10', 'Value11', 'Value12', 'Value13', 'Value14'],
				datasets: [ {
					label: this.props.name,
					backgroundColor: 'rgba(179,181,198,0.2)',
					borderColor: 'rgba(179,181,198,1)',
					pointBackgroundColor: 'rgba(179,181,198,1)',
					pointBorderColor: '#fff',
					pointHoverBackgroundColor: '#fff',
					pointHoverBorderColor: 'rgba(179,181,198,1)',
				    data: [3, 1, 5, 2, 4, 6, 2, 2, 3, 2, 5, 4, 7, 5]
				}
				]
			}
	};
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      3000
    );
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  shouldComponentUpdate(nextProps, nextState) {       
      return nextProps.name !== this.props.name; 
  } 
  
  componentWillReceiveProps(nextProps) {
      this.setState({...this.state,
		  data: {...this.state.data, datasets: [
			{
			  label: nextProps.name,
			  backgroundColor: "rgba(179,181,198,0.2)",
			  borderColor: "rgba(179,181,198,1)",
			  pointBackgroundColor: "rgba(179,181,198,1)",
			  pointBorderColor: "#fff",
			  pointHoverBackgroundColor: "#fff",
			  pointHoverBorderColor: "rgba(179,181,198,1)",
			  data: [3, 1, 5, 2, 4, 6, 2, 2, 3, 2, 5, 4, 7, 5]
			}
		  ]},
		});
  }
  
  tick() {
  	fetch(this.state.url)
  	.then((resp) => resp.json())
  	.then(function(jdata) {
  
			this.setState({...this.state,
		  data: {...this.state.data, datasets: [
			{
			  label: "Test SpiderGraph",
			  backgroundColor: "rgba(179,181,198,0.2)",
			  borderColor: "rgba(179,181,198,1)",
			  pointBackgroundColor: "rgba(179,181,198,1)",
			  pointBorderColor: "#fff",
			  pointHoverBackgroundColor: "#fff",
			  pointHoverBorderColor: "rgba(179,181,198,1)",
			  data: [jdata.value1, jdata.value2, jdata.value3, jdata.value4, jdata.value5]
			}
		  ]},
		});
		})
  }

  render() {  
    return (
//      <div>
        <Radar data={this.state.data} />
//        <p>
//        <button onClick={() => this.setState({...this.state,
//          cpt: this.state.cpt + 1,
//					data: {...this.state.data, datasets: [
//					{
//						label: "Test SpiderGraph",
//						backgroundColor: "rgba(179,181,198,0.2)",
//						borderColor: "rgba(179,181,198,1)",
//						pointBackgroundColor: "rgba(179,181,198,1)",
//						pointBorderColor: "#fff",
//						pointHoverBackgroundColor: "#fff",
//						pointHoverBorderColor: "rgba(179,181,198,1)",
//						data: [this.state.cpt, 2, 5, 8, 4]
//					}
//					]},
//				})}>Click me!</button>
//        <span>{this.state.cpt}</span>
//        </p>
//      </div>

    );
  }
}

export default SpiderGraph;
