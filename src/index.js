import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/*
As a quick review, here’s how this works:
- The `state` is stored in the `Counter` component
- [Whenever] state was [changes],
  React re-renders the Counter component (and its children),
  [using the new state].
*/
class Counter extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="container">
        <h2>Container</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.state.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
