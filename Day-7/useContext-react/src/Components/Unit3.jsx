import React,{useContext} from "react";
import Unit4 from "./Unit4";
import { UserContext } from "../context/UserContext";

const Unit3 = () => {
    const user = useContext(UserContext)
  return (
    <div className="box">
      Unit3
      <p>Congrats {user}  you are half way to complete the course</p>
      <Unit4  />
    </div>
  );
};

export default Unit3;
