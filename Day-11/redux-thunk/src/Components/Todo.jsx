import React, { useReducer, useEffect } from "react";
import axios from "axios";
import { initialState, todoReducer } from "../Masai/todoReducer";
import {
  fetchData,
  fetchFailure,
  fetchLoading,
  fetchSuccess,
} from "../Masai/action";
import { useDispatch, useSelector } from "react-redux";
const Todo = () => {
    const dispatch = useDispatch();
    
    
  const { posts, loading, error } = useSelector((state) => state);
  console.log(posts);
  useEffect(() => {
    // fetchData();
    dispatch(fetchData());
  }, []);

  if (loading) {
    return <div>Loading........</div>;
  }

  if (error) {
    return <div>{state.error}</div>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Todo;
