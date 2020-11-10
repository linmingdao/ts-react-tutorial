import * as TYPES from "../actionTypes/counter";
import initialState from "../states/counter";

export default function (state = initialState, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { ...state, currentCnt: state.currentCnt + action.step };
    case TYPES.DECREMENT:
      return { ...state, currentCnt: state.currentCnt - action.step };
    default:
      return state;
  }
}
