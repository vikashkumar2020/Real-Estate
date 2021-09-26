import React from "react";
import { cities } from "./footeritem";
import './footer.css'

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="footer-title">
        <p>Our services in top cities</p>
      </div>
      <div className="footer-cities-list">
        <div className="footer-flat-list">
            <span>Flats</span>
          {cities.map((item) => {
            return <div>Flats in {item.name}</div>;
          })}
        </div>
        <div className="footer-project-list">
            <span>Projects</span>
          {cities.map((item) => {
            return <div>Projects in {item.name}</div>;
          })}
        </div>
        <div className="footer-estate-list">
            <span>Real Estate</span>
          {cities.map((item) => {
            return <div>Real Estate in {item.name}</div>;
          })}
        </div>
      </div>
      <footer class="footer-distributed">

<div class="footer-left">

    <h3>Company<span>logo</span></h3>

    <p class="footer-links">
        <a href="./" class="link-1">Home</a>
        
        <a href="./">Carrer</a>
    
        <a href="./">Sales Enquiry</a>
    
        <a href="./">About</a>
        
        <a href="./">Terms</a>
        
        <a href="./">Contact</a>
    </p>

    <p class="footer-company-name">Company Name © 2021</p>
</div>

<div class="footer-center">

    <div>
        <i class="fa fa-map-marker"></i>
        <p><span>Noida</span> UP, India</p>
    </div>

    <div>
        <i class="fa fa-phone"></i>
        <p>+91347732074307</p>
    </div>

    <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto:support@company.com">support@company.com</a></p>
    </div>

</div>

<div class="footer-right">

    <p class="footer-company-about">
        <span>About the company</span>
        A real Estate company
    </p>

    <div class="footer-icons">

        <a href="./"><i class="fab fa-facebook"></i></a>
        <a href="./"><i class="fab fa-twitter"></i></a>
        <a href="./"><i class="fab fa-linkedin"></i></a>

    </div>

</div>

</footer>   
          
    </div>
  );
};

export default Footer;
