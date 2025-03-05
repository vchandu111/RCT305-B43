import React from "react";
import { Link } from "react-router-dom";
import { House } from "lucide-react";
import { ChartPie } from "lucide-react";
import { History } from "lucide-react";
const Navbar = () => {
  return (
    <nav className=" p-6 shadow-lg ">
      <div className="flex   justify-around w-3/4">
        <div className="flex ">
          <House />
          <Link to="/" className="ml-2">
            Dashboard
          </Link>
        </div>
        <div className="flex">
          <ChartPie />
          <Link to="/analytics" className="ml-2">
            Analytics
          </Link>
        </div>
        <div className="flex">
          <History />
          <Link to="/history" className="ml-2">
            History
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
