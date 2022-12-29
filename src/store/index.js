import { createStore } from "redux";

const INITIAL_COUNTER_STATE = {
  counter: 0,
};

const counterReducer = (state = INITIAL_COUNTER_STATE, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return INITIAL_COUNTER_STATE;
};

const store = createStore(counterReducer);

export default store;
