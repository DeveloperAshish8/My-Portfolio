import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-box">
      <h2 class="heading-about">
        Contact <span>Me</span>
      </h2>

      <div className="contact-icons">
        <div className="contact-icons-box">
          <span>
            <i className="fa-solid fa-map-location-dot"></i>
          </span>
          <div className="contact-info">
            <h3>Location</h3>
            <p>Patna, India</p>
          </div>
        </div>
        <div className="contact-icons-box">
          <span>
            <i className="fa-solid fa-envelope-open-text"></i>
          </span>
          <div className="contact-info">
            <h3>Mail</h3>
            <a href="mailto:augashish4@gmail.com">augashish4@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
