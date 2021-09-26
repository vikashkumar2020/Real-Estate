import React from "react";
import './header.css';
const Header = () => {
  return (
    <div className="header-div" >
      <div className="search-bar-div">
        <div className="input-div">
          <input type="text" className="src-input" placeholder="Search Property" />
          <button className="src-btn">Search</button>
        </div>
        <div className="services-div">
          <span>Buy</span>
          <span>Sell</span>
          <span>Rent</span>
          <span>PG/CO-Living</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
