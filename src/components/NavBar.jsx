import { useState, useEffect } from "react";
import { navLinks } from "../constants/index.js";

const NavBar = () => {
  // Defining a state, track if user has scrolled
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // event listener for when user scrolls
    const handleScroll = () => {
      // check if user has scrolled down 10px
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // Add event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener when component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        {/* Logo / Beginning  */}
        <a className="logo" href="#hero">
          Jaden Snyder
        </a>

        {/* Middle Section of Nav Bar  */}
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact button  */}
        <a className="contact-btn group" href="#contact">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
