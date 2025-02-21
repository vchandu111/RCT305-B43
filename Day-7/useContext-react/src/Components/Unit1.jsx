import React, { useContext } from "react";
import Unit2 from "./Unit2";
import { UserContext } from "../context/UserContext";

const Unit1 = () => {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <div className="box">
      Unit1
      <Unit2 />
    </div>
  );
};

export default Unit1;
