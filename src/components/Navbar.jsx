import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {

const navStyle = ({isActive}) => {
    return {
        color: isActive ? "white" : "yellow",
        fontWeight: isActive ? "bold" : "normal",
        textDecoration: isActive ? "underline" : "none",
        margin:"20px"

    }
}

  return (
    <div className="flex items-center justify-between bg-blue-700 text-white">
      <div className="flex gap-2">
        <h3>{"<"}</h3>
        <h1>Ibrahim Khan</h1>
        <h3>{"/>"}</h3>
      </div>
      <nav className="m-2 hidden sm:block">
        <NavLink style={navStyle} to={"/"}>Home</NavLink>
        <NavLink  style={navStyle} to={"/about"}>About</NavLink>
        <NavLink style={navStyle} to={"/project"}>Project</NavLink>
        <NavLink style={navStyle} to={"/contact"}>Contact</NavLink>
      </nav>

     <div className="p-2">
       <Button
      btnStyle={{fontSize:"20px"}}
       title={"Contact"}
       />
     </div>

    </div>
  );
};

export default Navbar;
