import React, { use, useEffect, useState } from "react";
import  UseMyfetch  from "./UseMyFetch";
const Todos = () => {
  const { data, loading, err } = UseMyfetch(
    "https://jsonplaceholder.typicode.com/comments"
  );

  if (loading) return <div>Loadingggggg</div>;
  if (err) return <div>{err.message}</div>;

  return (
    <div>
      <ul>
        {data.map((elem) => (
          <li key={elem.id}>{elem.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
