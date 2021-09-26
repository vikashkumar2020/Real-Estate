import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Dealers from "./pages/Dealers";
import Rent from "./pages/Rent";
import Explore from "./pages/Explore";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/explore" component={Explore}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/Rent" component={Rent}></Route>
          <Route path="/Dealers" component={Dealers}></Route>
          <Route path="/Sell" component={Sell}></Route>
          <Route path="/Buy" component={Buy}></Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;