import React, { Component } from 'react'
import DonutChart from '../components/DonutChart'
import AreaChart from '../components/AreaChart'

export default class Charts  extends Component{
  render(){
    return(
      <div>
        <DonutChart />
        <AreaChart />
      </div>
    )
  }
}