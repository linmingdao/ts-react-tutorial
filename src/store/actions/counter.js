import * as TYPES from "../actionTypes/counter";

export function increment(step = 1) {
  return {
    type: TYPES.INCREMENT,
    step,
  };
}

export function decrement(step = 1) {
  return {
    type: TYPES.DECREMENT,
    step,
  };
}
