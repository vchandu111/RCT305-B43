import { ADD_TODO } from "./actionTypes";

const initialState = [];
export const todoReducer = (state = initialState, action) => {
  //newState
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
        },
      ];
    default:
      return state;
  }
};
