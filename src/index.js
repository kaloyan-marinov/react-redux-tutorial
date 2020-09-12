import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { INCREMENT, DECREMENT, RESET } from "./actions";
import { Provider } from "react-redux";
import { connect } from "react-redux";

const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  console.log("reducer starts running with", state, action);

  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
}

const store = createStore(reducer);
console.log("the store has just been created");

store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });
store.dispatch({ type: DECREMENT });
store.dispatch({ type: RESET });
store.dispatch({ type: DECREMENT });

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: INCREMENT });
  };

  decrement = () => {
    this.props.dispatch({ type: DECREMENT });
  };

  reset = () => {
    this.props.dispatch({ type: RESET });
  };

  render() {
    return (
      <div className="container">
        <h2>Container</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
          <hr />
          <button onClick={this.reset}>RESET</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { count: state.count };
}

const ConnectedCount = connect(mapStateToProps)(Counter);

const App = () => (
  <Provider store={store}>
    <ConnectedCount />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
