import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiKatana } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { SiKatana } from "react-icons/si";
import { Button } from "./Button";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <GiKatana className="navbar-icon" />
              ZORO
              {/* <SiKatana className="navbar-icon" /> */}
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/commands"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Commands
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contributions"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contributions
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/invite-me" className="btn-link">
                    <Button buttonStyle="btn--outline">Invite Me</Button>
                  </Link>
                ) : (
                  <Link
                    to="/invite-me"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      Invite Me
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
