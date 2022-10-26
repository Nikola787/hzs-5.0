import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./footer.css";
import MyImage from "./logo.png";

const footer = () => {
  return (
    <div className="ft">
      <div className="footer">
        <div className="left-footer">
          <div className="left-text">
            <p className="ltext">
              <span className="site">Nas sajt: </span>
              <a href="https://fonis.rs/" className="fonis">
                fonis.rs
              </a>
            </p>
          </div>
          <div className="left-icons">
            <div className="insta">
              <a href="#">
                <FaInstagram />
              </a>
            </div>
            <div className="fb">
              <a href="#">
                <FaFacebookF />
              </a>
            </div>
            <div className="linkedin">
              <a href="#">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="center-footer">
          <div className="center-text">
            <p className="ctext">Napravljeno sa ❤️ od strane HZS tima</p>
          </div>
          <div className="center-img">
            <img className="fonis-footer" src={MyImage} width={150} alt="" />
          </div>
        </div>
        <div className="right-footer">
          <div className="rtext">
            <p className="adress">Adresa:</p>
            <p className="faqulty-text">Fakultet organizacionih nauka</p>
            <p className="adress-text">Jove Ilica 154, Beograd</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
