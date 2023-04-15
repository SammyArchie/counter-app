import React, { Component } from 'react'

export class CounterClass extends Component {
    constructor(props){
        super(props);
        this.state = {number: 0};
    }

    render() {
    return (
      <div>
        <h1>Count: </h1>
        <button></button>
        <button></button>
      </div>
    )
  }
}

export default CounterClass
