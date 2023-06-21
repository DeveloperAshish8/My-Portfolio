import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer">
        <div className="footer-left">
          <span className="quote-text">
            Let's build something <br /> amazing together.
          </span>

          <span className="quote-text">
            Start by
            <a href="mailto:augashish4@gmail.com"> saying hi</a>
          </span>
        </div>
        <div className="footer-right">
          <div className="footer-info">
            <span className="right-text">Information</span>
            <p>Patna, Bihar</p>
          </div>
          <div className="footer-menu">
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#skills">
              <li>Skills</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="#experience">
              <li>Work</li>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
