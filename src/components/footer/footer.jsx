import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./footer.css";
import MyImage from "./logo.png";
import Srce from "./srce2.png"

const footer = () => {
  return (
    <div className="ft">
      <div className="footer">
        <div className="left-footer">
          <div className="left-text">
            <p className="ltext">
              <span className="site">Naš sajt: </span>
              <a href="https://fonis.rs/" target="_blank" className="fonis">
                fonis.rs
              </a>
            </p>
          </div>
          <div className="left-icons">
            <div className="insta">
              <a href="https://www.instagram.com/hakaton_za_srednjoskolce/" target="_blank">
                <FaInstagram />
              </a>
            </div>
            <div className="fb">
              <a href="https://www.facebook.com/fonis.rs/" target="_blank">
                <FaFacebookF />
              </a>
            </div>
            <div className="linkedin">
              <a href="https://www.linkedin.com/company/fonis/mycompany/" target="_blank">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="center-footer">
          <div className="center-text">
            <p className="ctext">Napravljeno sa &nbsp; <img className="Srce" src={Srce} width = {30} alt="srce" />&nbsp; od strane HZS tima</p>
          </div>
          <div className="center-img">
          <a href="https://fonis.rs/" target="_blank"> <img className="fonis-footer" src={MyImage} width={150} alt="fonis_logo"/> </a>
          </div>
        </div>
        <div className="right-footer">
          <div className="rtext">
            <p className="adress">Adresa:</p>
            <p className="faqulty-text">Fakultet organizacionih nauka</p>
            <p className="adress-text">Jove Ilića 154, Beograd</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
