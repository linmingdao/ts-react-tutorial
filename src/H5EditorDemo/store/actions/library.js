import * as TYPES from "../actionTypes/library";

export function add(name) {
  return {
    type: TYPES.ADD,
    name,
  };
}

export function sort(items) {
  return {
    type: TYPES.SORT,
    items,
  };
}

export function remove(id) {
  return {
    type: TYPES.REMOVE,
    id,
  };
}
