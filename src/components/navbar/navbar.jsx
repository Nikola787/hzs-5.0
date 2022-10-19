import React, { useState, useEffect } from "react";
import { debounce } from "../../utilities/helpers";
import "./navbar.css";
import menuItems from "./MenuItems";
import { HashLink } from "react-router-hash-link";
import { Twirl as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState(false);
  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: "fixed",
    textAlign: "center",
    transition: "top 0.4s",
  };

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div style={{ ...navbarStyles, top: visible ? "0" : "-6rem" }}>
      <nav className="navbar">
        <div className="navbar-logo">
          <svg
            width="100"
            height="72"
            viewBox="0 0 100 129"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.1 0.609985C26.02 18.04 25.94 35.47 25.87 52.9C31.18 47.59 36.49 42.28 41.8 36.97C36.56 24.86 31.33 12.74 26.1 0.609985Z"
              stroke="#00FEA3"
              stroke-width="1.2291"
              stroke-miterlimit="10"
              stroke-linejoin="round"
            />
            <path
              d="M26.1 0.609985C31.33 12.73 36.57 24.85 41.8 36.97C51.13 37.17 60.46 37.36 69.8 37.56C55.23 25.25 40.66 12.93 26.1 0.609985Z"
              stroke="#00FEA3"
              stroke-width="1.2291"
              stroke-miterlimit="10"
              stroke-linejoin="round"
            />
            <path
              d="M69.79 37.57C79.47 45.47 89.15 53.37 98.83 61.27C79.82 53.17 60.8 45.08 41.79 36.98C51.13 37.17 60.46 37.37 69.79 37.57Z"
              stroke="#00FEA3"
              stroke-width="1.2291"
              stroke-miterlimit="10"
              stroke-linejoin="round"
            />
            <path
              d="M98.84 61.26C89.64 63.48 80.44 65.7 71.24 67.93C61.43 57.61 51.61 47.29 41.8 36.98C60.81 45.07 79.82 53.17 98.84 61.26Z"
              stroke="#00FEA3"
              stroke-width="1.2291"
              stroke-miterlimit="10"
              stroke-linejoin="round"
            />
            <path
              d="M41.8 36.98C44.95 50.5 48.1 64.02 51.24 77.53C56.62 77.8 61.99 78.06 67.37 78.33C58.85 64.55 50.32 50.76 41.8 36.98Z"
              stroke="#00FEA3"
              stroke-width="1.2291"
              stroke-miterlimit="10"
              stroke-linejoin="round"
            />
            <path
              d="M71.24 67.9299C69.95 71.3999 68.66 74.8599 67.37 78.3299C72.3 82.9099 77.24 87.4799 82.17 92.0599C78.53 84.0199 74.88 75.9699 71.24 67.9299Z"
              stroke="#00FEA3"
              stroke-width="1.2291"
              stroke-miterlimit="10"
              stroke-linejoin="round"
            />
            <path
              d="M67.37 78.33C65.41 85.88 63.46 93.44 61.5 100.99C68.39 98.01 75.28 95.03 82.16 92.06C77.24 87.48 72.31 82.91 67.37 78.33Z"
              stroke="#00FEA3"
              stroke-width="1.2291"
              stroke-miterlimit="10"
              stroke-linejoin="round"
            />
            <path
              d="M67.37 78.33C65.41 85.88 63.46 93.44 61.5 100.99C58.08 93.17 54.66 85.35 51.23 77.53C56.62 77.8 62 78.06 67.37 78.33Z"
              stroke="#00FEA3"
              stroke-width="1.2291"
              stroke-miterlimit="10"
              stroke-linejoin="round"
            />
            <path
              d="M38.11 48.41C39.3 53.49 40.49 58.57 41.68 63.65C36.56 66.7 31.44 69.74 26.32 72.79C30.25 64.66 34.18 56.53 38.11 48.41Z"
              stroke="#00FEA3"
              stroke-width="1.2291"
              stroke-miterlimit="10"
              stroke-linejoin="round"
            />
            <path
              d="M40.6 74.8199C38.81 78.8899 37.03 82.9599 35.24 87.0299C31.21 85.3699 27.18 83.7099 23.16 82.0499C28.97 79.6299 34.79 77.2299 40.6 74.8199Z"
              stroke="#00FEA3"
              stroke-width="1.2291"
              stroke-miterlimit="10"
              stroke-linejoin="round"
            />
            <path
              d="M44.21 83.91C43.63 89.43 43.05 94.96 42.47 100.48C46.54 103.68 50.61 106.87 54.68 110.07C51.19 101.35 47.7 92.63 44.21 83.91Z"
              stroke="#00FEA3"
              stroke-width="1.2291"
              stroke-miterlimit="10"
              stroke-linejoin="round"
            />
            <path
              d="M16.93 97.24C18.59 94.96 20.25 92.67 21.91 90.39C24.75 91.46 27.59 92.53 30.44 93.6C25.94 94.82 21.43 96.03 16.93 97.24Z"
              stroke="#00FEA3"
              stroke-width="1.2291"
              stroke-miterlimit="10"
              stroke-linejoin="round"
            />
            <path
              d="M11.93 104.6C8.15999 112.22 4.38999 119.83 0.609985 127.45C6.45999 119.91 12.31 112.36 18.17 104.82C16.09 104.74 14.01 104.67 11.93 104.6Z"
              stroke="#00FEA3"
              stroke-width="1.2291"
              stroke-miterlimit="10"
              stroke-linejoin="round"
            />
            <path
              d="M23.35 107.88C26.38 105.55 29.41 103.23 32.45 100.9C31.74 102.87 31.04 104.85 30.33 106.82C28.01 107.18 25.68 107.53 23.35 107.88Z"
              stroke="#00FEA3"
              stroke-width="1.2291"
              stroke-miterlimit="10"
              stroke-linejoin="round"
            />
            <path
              d="M37.21 111.79C37.84 110.52 38.48 109.25 39.11 107.98C40.03 109.14 40.94 110.31 41.86 111.47C40.31 111.58 38.76 111.69 37.21 111.79Z"
              stroke="#00FEA3"
              stroke-width="1.2291"
              stroke-miterlimit="10"
              stroke-linejoin="round"
            />
            <path
              d="M22.89 115.29C21.7 116.86 20.51 118.43 19.33 120C21.26 119.13 23.19 118.25 25.11 117.38C24.37 116.68 23.63 115.99 22.89 115.29Z"
              stroke="#00FEA3"
              stroke-width="1.2291"
              stroke-miterlimit="10"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <Hamburger toggled={active} toggle={setActive} />
        </div>
        <ul className={active ? "nav-menu active" : "nav-menu"}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <HashLink
                  to={item.url}
                  className={item.cName}
                  onClick={handleClick}
                >
                  {item.title}
                </HashLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
