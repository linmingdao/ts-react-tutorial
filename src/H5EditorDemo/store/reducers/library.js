import { nanoid } from "nanoid";
import * as TYPES from "../actionTypes/library";
import initialState from "../states/library";

export default function (state = initialState, action) {
  switch (action.type) {
    case TYPES.ADD:
      return {
        ...state,
        preferences: [
          ...state.preferences,
          { id: nanoid(), name: action.name },
        ],
      };
    case TYPES.SORT:
      return {
        ...state,
        preferences: action.items,
      };
    case TYPES.REMOVE:
      return {
        ...state,
        preferences: state.preferences.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
}
