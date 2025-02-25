import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "../App.css";
const Fetch = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typico.com/posts");
      setPosts(res.data);
      setLoading(false);
      setError("");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
    
  if (loading) {
    return <div className="message">Loading..........</div>;
  }
  if (error) {
    return <div className="message">{error}</div>;
  }
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <ul>
            <li>{post.title}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Fetch;
