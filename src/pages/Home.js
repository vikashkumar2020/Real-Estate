import React from "react";
import './Home.css';
import Header from "../components/header";
import Services from "../components/body/services";
import PropertyList from "../components/body/propertyList";

function Home() {
  return (
    <div className="home">
      <Header/>
      <Services/>
      <PropertyList/>
    </div>
  );
}

export default Home;
