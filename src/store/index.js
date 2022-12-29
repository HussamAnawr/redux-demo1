import { createStore } from "redux";

const INITIAL_COUNTER_STATE = {
  counter: 0,
  isVisible: true,
};

const counterReducer = (state = INITIAL_COUNTER_STATE, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  if (action.type === "toggle") {
    return {
      ...state,
      isVisible: !state.isVisible,
    };
  }
  return INITIAL_COUNTER_STATE;
};

const store = createStore(counterReducer);

export default store;
