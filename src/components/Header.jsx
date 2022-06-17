import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Hrnet</h1>
      <nav>
        <Link to="/create">Create Employee</Link>
        <Link to="/current">Current Employees</Link>
      </nav>
    </header>
  );
};

export default Header;
