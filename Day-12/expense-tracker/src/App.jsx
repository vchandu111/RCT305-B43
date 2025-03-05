import React from "react";
import Navbar from "./Components/Common/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Analytics from "./Pages/Analytics";
import History from "./Pages/History";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
