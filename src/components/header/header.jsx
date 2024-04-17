import { useEffect, useState } from "react";
import "./header.css";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [menuOpened, setmenuOpened] = useState(false);

  return (
    <div className="heading-wrapper">
      <div className="heading-container">
        <div className="portfolio">
          <a href="#">Ashish</a>
        </div>

        <ul className={menuOpened ? "mobile-menu-link" : "menu-link"}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="https://ashish4.bio.link" target="_blank">
              My Socials
            </a>
          </li>
        </ul>

        <a
          className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow  resume-btn"
          href="Ashish_Resume.pdf"
          target="_blank"
          download
        >
          My Resume
        </a>

        <div className="menu-icon">
          <a href="#" onClick={() => setmenuOpened((prev) => !prev)}>
            <BiMenuAltRight size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
