import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../store/actions/counter";

const Counter: React.FC = (props: any) => {
  return (
    <div>
      <p>currentCnt: {props.currentCnt}</p>
      <button onClick={() => props.increment(1)}>increment</button>
      <button onClick={() => props.decrement(1)}>decrement</button>
    </div>
  );
};

export default connect(
  // store state
  function mapStateToProps(state: any) {
    return {
      currentCnt: state.counter.currentCnt,
    };
  },
  // reducer method
  function mapDispatchToProps(dispatch) {
    return {
      increment: (step: number) => dispatch(increment(step)),
      decrement: (step: number) => dispatch(decrement(step)),
    };
  }
)(Counter);
