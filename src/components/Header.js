import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./Header.module.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <a href="/" className={classes.header__content__logo}>
          沢田
        </a>
        <nav
          // Controls the page size and hamburger menu when changing the window size
          className={`${classes.header__content__nav} ${menuOpen && size.width < 768 || menuOpen ? classes.isMenu : ""
            }`}
        >
          <ul>
            <li>
              <a href="/" onClick={menuToggleHandler}>
                Home Page
              </a>
            </li>
            <li>
              <a href="/Resume" onClick={menuToggleHandler}>
                Resume
              </a>
            </li>
            <li>
              <a href="/Projects" onClick={menuToggleHandler}>
                Projects
              </a>
            </li>
            <li>
              <a href="/AboutMe" onClick={menuToggleHandler}>
                About Me
              </a>
            </li>
            <li>
              <a href="/ContactMe" onClick={menuToggleHandler}>
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
