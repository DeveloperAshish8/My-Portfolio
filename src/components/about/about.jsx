import "./about.css";
import StageImage from "./../../Image/StageImage.jpeg";
import ExpImage from "./../../Image/experience.png";
import EduImage from "./../../Image/education.png";

const About = () => {
  return (
    <div className="about" id="about">
      <h2 className="heading-about">
        About <span>Me</span>
      </h2>

      <div className="row">
        <div className="image">
          <img src={StageImage} alt="" />
        </div>
        <div className="content">
          <h3 className="MyName">I'm Ashish</h3>
          <span className="tag">
            Passionate Frontend Developer | Programming Geek{" "}
          </span>

          <div className="about-container">
            <div className="detail-container">
              <img src={ExpImage} alt="Experience Image" />
              <h3>Experience</h3>
              <p>Previous Work</p>
            </div>
            <div className="detail-container">
              <img src={EduImage} alt="Education Image" />
              <h3>Education</h3>
              <p>B.Tech Computer Science </p>
            </div>
          </div>
          <p>
            Second-year CSE Undergraduate Student at Bakhtiyarpur College of
            Engineering
            <br />
            Leading Bihar's top growing technical community of 2,500+ developers
            named <a href="https://codechamp.tech/">CodeChamp</a>.<br />
            <br />
            I excel in designing and maintaining responsive websites that offer
            a smooth user experience. I am also a team player who thrives in
            collaborating with cross-functional teams to produce outstanding web
            applications.
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
