import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {
  state = {}

  componentDidMount(){
    let datesArray = []
    this.props.user.moments.forEach(moment => datesArray.push("Nov " + moment.created_at.slice(8,10)))

    let ranksArray = []
    this.props.user.moments.forEach(moment => ranksArray.push(moment.feeling.rank))

    this.setState({
      chartData: {
        labels: datesArray,
        datasets: [
          {
            label: "feelings rank",
            data: ranksArray,
            backgroundColor: 'rgba(106, 194, 139, .6)'
          }
        ]
      }
    })
  }

  render(){
    return(
      <div className="chart">
        {this.state.chartData ?
          <Line
          data={this.state.chartData}

          options={{
            title: {
              display: true,
              text: 'Feelings Rollercoaster',
              fontSize: 15,
              fontColor: 'grey'
            },
            legend: {
              display: false,
              position: 'left'
            }
          }}
          />
          :
          null
        }
      </div>
    )
  }
}

export default Chart