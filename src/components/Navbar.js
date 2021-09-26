import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import { navItems } from "./NavItems";
import Button from "./Button";
import Dropdown from "./Dropdown";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className="navbar-div">
        <Link to="/" className="navbar-logo">
          Real Estate
          <Icons.FaTree />
        </Link>
        <ul className="nav-div-items">
          {navItems.map((item) => {
              if(item.title ==="Services")
              {
              return (
                <div
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </div>
              );
              }
              return (
                <div
                  key={item.id}
                  className={item.cName}
                >
                  <Link to={item.path}>{item.title}</Link>
                </div>
              );
          })}
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
