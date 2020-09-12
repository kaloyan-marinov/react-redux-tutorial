import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";

/*
The term “reducer” might seem a bit scary and foreign,
but ... it is ... “just a function.”

Have you ever used the `reduce` function on an array?
```
var letters = ['r', 'e', 'd', 'u', 'x'];
letters.reduce(
  (res, x) => res + x,  // this function could rightfully be called a “reducer”... because it reduces a whole array of items down to a single result
  ''                    // this is the initial value for the reduction/accumulation
);

A Redux reducer works just like the function you pass to `Array.reduce`:
a) an Array.reduce reducer has the signature:
   (accumulatedValue, nextItem) => nextAccumulatedValue
b) A Redux reducer has this signature:
   (state, action) => newState
The thing [Redux reducers] reduce is actions; they reduce a set of actions (over time)
into a single state.
The difference is that:
- with `Array.reduce` reducers it happens all at once, and
- with Redux reducers, it happens over the lifetime of your running app.
```
*/
const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  console.log("reducer starts running with", state, action);

  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

const store = createStore(reducer);
console.log("the store has just been created");

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "RESET" });

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

const App = () => (
  <div>
    <Counter />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
