import React, { Component } from 'react';

type TickState = { date: Date };

class Tick extends Component<{}, TickState> {
  timerID: number;

  constructor(props: {}) {
    super(props);
    this.state = {date: new Date()};
    this.timerID = 0;
  }

  componentDidMount() {
    this.timerID = window.setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h3>Hello, world!</h3>
        <p>It is {this.state.date.toLocaleTimeString()}.</p>
      </div>
    );
  }  
}

export default Tick;

// setInterval(Tick, 1000);