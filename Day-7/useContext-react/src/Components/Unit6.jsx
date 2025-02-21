import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Unit6 = () => {
    const user = useContext(UserContext)
  return (
    <div className="box">
      Unit6
      <p>Congrats {user} , you have successfully completed your course</p>
    </div>
  );
};

export default Unit6;
