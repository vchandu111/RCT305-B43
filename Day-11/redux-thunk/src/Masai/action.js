import axios from "axios";
import { FETCH_FAILURE, FETCH_LOADING, FETCH_SUCCESS } from "./actionTypes";

export const fetchLoading = () => ({
  type: FETCH_LOADING,
});

export const fetchSuccess = (posts) => ({
  type: FETCH_SUCCESS,
  payload: posts,
});

export const fetchFailure = (error) => ({
  type: FETCH_FAILURE,
  payload: error,
});

//redux thunk action creator
export const fetchData = () => {
  return async (dispatch) => {
    //fetch api
    dispatch(fetchLoading());
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      dispatch(fetchSuccess(res.data));
    } catch (error) {
      dispatch(fetchFailure(error.message));
    }
  };
};
