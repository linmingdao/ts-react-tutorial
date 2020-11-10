import { createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counter";
import counterState from "./states/counter";

const allReducers = combineReducers({
  counter: counterReducer,
});

const rootState = {
  counter: counterState,
};

const store = createStore(allReducers, rootState);

export default store;
