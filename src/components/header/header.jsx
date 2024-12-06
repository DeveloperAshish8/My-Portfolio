import { useEffect, useState } from "react";
import "./header.css";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [menuOpened, setmenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Define your breakpoint for mobile

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="heading-wrapper">
      <div className="heading-container">
        <div className="portfolio">
          <a href="#">Ashish</a>
        </div>

        <ul className={menuOpened ? "mobile-menu-link" : "menu-link"}>
          <li
            onClick={
              isMobile ? () => setmenuOpened((prev) => !prev) : undefined
            }
          >
            <a href="#about">About</a>
          </li>
          <li
            onClick={
              isMobile ? () => setmenuOpened((prev) => !prev) : undefined
            }
          >
            <a href="#skills">Skills</a>
          </li>
          <li
            onClick={
              isMobile ? () => setmenuOpened((prev) => !prev) : undefined
            }
          >
            <a href="#experience">Experience</a>
          </li>
          <li
            onClick={
              isMobile ? () => setmenuOpened((prev) => !prev) : undefined
            }
          >
            <a href="#projects">Projects</a>
          </li>
          <li
            onClick={
              isMobile ? () => setmenuOpened((prev) => !prev) : undefined
            }
          >
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
          <a onClick={() => setmenuOpened((prev) => !prev)}>
            <BiMenuAltRight size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
