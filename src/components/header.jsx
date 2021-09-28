import React, {useState} from "react";
import './header.css';
import { useDispatch } from 'react-redux';
import optionChange from './redux/actions/option'

const Header = () => {

  const [choice, setChoice] = useState("Buy")
  const dispatch = useDispatch();
  return (
    <div className="header-div" >
      <div className="search-bar-div">
      <div>Search for the {choice} options</div>
        <div className="input-div">
          <input type="text" className="src-input" placeholder="Search Property" />
          <button className="src-btn">Search</button>
        </div>
        <div className="services-div">
          <span onClick={(e)=> {
            setChoice("Buy")
            dispatch(optionChange(choice))
          }}>Buy</span>
          <span onClick={(e)=> {
            setChoice("Sell")
            dispatch(optionChange(choice))
          }}>Sell</span>
          <span onClick={(e)=> {
            setChoice("Rent")
            dispatch(optionChange(choice))
          }}>Rent</span>
          <span onClick={(e)=> {
            setChoice("PG/CO-Living")
            dispatch(optionChange(choice))
          }}>PG/CO-Living</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
