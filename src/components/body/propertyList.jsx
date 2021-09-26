import React from "react";
import { bestProject, featureProject } from "./PropertyListItem";
import "./PropertyList.css";

const PropertyList = () => {
  return (
    <div className="property-div">
      <div className="best-list-div">
        <span>Explore the Top Projects</span>
        {bestProject.map((item) => {
          return (<div className="best-list-item">
              <div className="best-list-img">
                  <img src={item.url} alt={item.id} height="100%" width="100%" />
              </div>
              <div className="best-list-detail">
                  <p>{item.title}</p>
                  <p>price {item.price}</p>
                  <p>located at{item.address}</p>
                  <p>Sold by {item.company}</p>
              </div>
          </div>);
        })}
      </div>
      <div className="feature-list-div">
        <span> Featured Projects to checkout</span>
        {featureProject.map((item) => {
          return (<div className="feature-list-item">
                <div className="feature-list-img">
                  <img src={item.url} alt={item.id} height="100%" width="100%"/>
              </div>
              <div className="feature-list-detail">
                  <p>{item.title}</p>
                  <p>price {item.price}</p>
                  <p>located at{item.address}</p>
                  <p>Sold by {item.company}</p>
              </div>
          </div>);
        })}
      </div>
    </div>
  );
};

export default PropertyList;
