import React, { use, useEffect, useState } from "react";

const UseMyFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setErr(error.message);
      }
    };
    fetchData();
  }, []);

  return { data, loading, err };
};

export default UseMyFetch;
