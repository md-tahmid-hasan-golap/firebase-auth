import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";

const Roots = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Roots;
