import { createStore, combineReducers } from "redux";
import libraryReducer from "./reducers/library";
import libraryState from "./states/library";

const allReducers = combineReducers({
  library: libraryReducer,
});

const rootState = {
  library: libraryState,
};

const store = createStore(allReducers, rootState);

export default store;
