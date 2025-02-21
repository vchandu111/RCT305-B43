import React, { useContext, useState } from "react";
import Unit1 from "./Components/Unit1";
import "./App.css";
import { UserContext } from "./context/UserContext";
const App = () => {
  const user = useContext(UserContext)
  console.log(user)
  return (
      <div>
      <h1>{ user}, Welcome to Masai</h1>
        <Unit1  />
      </div>
  );
};

export default App;
