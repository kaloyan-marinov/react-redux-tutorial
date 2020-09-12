import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { connect } from "react-redux";

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
store.dispatch({ type: "DECREMENT" });

class Counter extends React.Component {
  increment = () => {};

  decrement = () => {};

  render() {
    return (
      <div className="container">
        <h2>Container</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

/*
The object you return from mapStateToProps gets fed into your component as props.

... usually you’ll be picking out pieces of data
the component needs from a larger collection of state.

(You could pass in all of the state, and let the component sort it out. That’s not a
great habit to get into though, because the component will need to know the shape of
the Redux state to pick out what it needs, and it’ll be harder to change that shape
later, if you need.)
*/
function mapStateToProps(state) {
  return { count: state.count };
}

const ConnectedCount = connect(mapStateToProps)(Counter);

/*
Wrapping the contents of a component with the `Provider` component
enables all direct and indirect descendants to access the Redux store.

But not automatically.
We’ll need to use the `connect` function on our components to access the store.

What `connect` does is hook into Redux, pull out the entire state,
and pass it through the `mapStateToProps` function that you provide.
This needs to be a custom function
because only you know the “shape” of the state you’ve stored in Redux.
*/
const App = () => (
  <Provider store={store}>
    <ConnectedCount />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
