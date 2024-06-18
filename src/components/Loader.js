import React, { Component } from 'react'
import loading from './loading.gif'

export class Loader extends Component {
  render() {
    return (
      <div className="text-center" style={{marginTop:'40px'}}>
        <img className='my-7' style={{height:"60px"}}src={loading} alt='loading'/>
        
      </div>
    )
  }
}

export default Loader
