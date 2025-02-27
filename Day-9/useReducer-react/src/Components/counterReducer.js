import { initialState } from "./Counter";
import { INCREMENT, DECREMENT, RESET } from "./actionTypes";

export const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { firstCounter: state.firstCounter + action.payload };
    case DECREMENT:
      return { firstCounter: state.firstCounter - action.payload };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

//actionTypes
//reducer

