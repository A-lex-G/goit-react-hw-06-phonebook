import { filterInitState } from "./constants";

export const filterReducer = (state = filterInitState, action) => {
  switch (action.type) {
    case "filter/UpdFilter":
      return action.payload;
    default:
      return state;
  }
};

export const updFilter = value => {
    return {
        type: "filter/UpdFilter",
        payload: value,
    }
};