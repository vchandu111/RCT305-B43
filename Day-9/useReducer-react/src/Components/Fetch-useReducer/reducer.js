import { FETCH_FAILURE, FETCH_LOADING, FETCH_SUCCESS } from "./actionTypes";

export const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case FETCH_LOADING:
        return {
          posts: [],
          loading: true,
          error: "",
        };
      case FETCH_SUCCESS:
        return {
          posts: action.payload,
          loading: false,
          error: "",
        };
      case FETCH_FAILURE:
        return {
          posts: [],
          loading: false,
          error: action.payload,
        };
    }
};
  