interface IAction {
  type: string;
}

export default (state: number = 0, action: IAction): number => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
