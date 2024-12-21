// src/Counter.tsx
import React, { Component } from 'react';

// Define the state type
interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  setState(arg0: { count: number; }) {
      throw new Error('Method not implemented.');
  }
  state: CounterState = {
    count: 0,
  };

  // Method to increment the count
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // Render method to display the component
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
