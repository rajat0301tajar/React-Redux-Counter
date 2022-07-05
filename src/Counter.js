import React from "react";
import { connect } from "react-redux";
import { increaseCounter, decreaseCounter } from "./action";

export class Counter extends React.Component {
  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

const mapDispatchToProps = {
  increment: increaseCounter,
  decrement: decreaseCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
