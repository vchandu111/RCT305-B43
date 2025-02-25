import React from "react";
import axios from "axios";
import { useEffect } from "react";
import "../App.css";
import { useReducer } from "react";
import "../App.css";
import { reducer } from "./reducer";
const initialState = {
  posts: [],
  loading: true,
  error: "",
};

const FetchReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = async () => {
    try {
      dispatch({ type: "FETCH_LOADING" });
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(res.data);
      dispatch({ type: "FETCH_SUCCESS", payload: res.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "FETCH_FAILURE", payload: error.message });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (state.loading) {
    return <div className="message">Loading..........</div>;
  }
  if (state.error) {
    return <div className="message">{error}</div>;
  }

  return <div></div>;
};

export default FetchReducer;
