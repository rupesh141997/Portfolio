import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import MObileMen from "../Assets/mobileMenu.png";

export default function Nav() {
  const [showmenu, setShowmenu] = useState(false);

  return (
    <nav className="navbar">
      <h4>logo</h4>

      <div className="desktopmenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          offset={-100}
          smooth={true}
          duration={1000}
          className="desktopmenuitems"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          duration={1000}
          className="desktopmenuitems"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="works-main"
          spy={true}
          offset={-50}
          smooth={true}
          duration={1000}
          className="desktopmenuitems"
        >
          Work
        </Link>
        <Link
          activeClass="active"
          to="exp"
          spy={true}
          offset={45}
          smooth={true}
          duration={1000}
          className="desktopmenuitems"
        >
          Experience
        </Link>
      </div>

      <Link
        activeClass="active"
        to="contactform"
        offset={-40}
        smooth={true}
        duration={1000}
      >
        <button className="but" type="button">
          <svg
            className="svg"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
            />
          </svg>
          contact Me
        </button>
      </Link>

      {/* ------------------------mob nav-------------------------------------------------- */}

      <img
        src={MObileMen}
        alt="mobilemenu"
        className="mobMenu"
        onClick={() => setShowmenu(!showmenu)}
      />
      <div className="navmenu" style={{ display: showmenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          offset={-100}
          smooth={true}
          duration={1000}
          className="listitems"
          onClick={() => setShowmenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          duration={1000}
          className="listitems"
          onClick={() => setShowmenu(false)}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="works-main"
          spy={true}
          offset={-50}
          smooth={true}
          duration={1000}
          className="listitems"
          onClick={() => setShowmenu(false)}
        >
          Work
        </Link>
        <Link
          activeClass="active"
          to="exp"
          spy={true}
          offset={45}
          smooth={true}
          duration={1000}
          className="listitems"
          onClick={() => setShowmenu(false)}
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="contactform"
          spy={true}
          offset={-40}
          smooth={true}
          duration={1000}
          className="listitems"
          onClick={() => setShowmenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
