import { INCREMENT, DECREMENT, RESET } from "../redux/actionTypes";
const initialState = {
  firstCounter: 0,
};
export const counterReducer = (state=initialState, action) => {
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
