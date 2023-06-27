import "./introduction.css";
import MyImage from "../../Image/MyImage.png";
import { useCallback } from "react";

const Intro = () => {
  return (
    <>
      <div className="main">
        <div className="main-left">
          <div className="Name-box">
            <h2 className="name-hello">Hello, I am</h2>
            <h1 className="name">Ashish Kumar</h1>
            <div className="title">
              <div className="title-wrapper">
                <div className="title-item">Web Development</div>
                <div className="title-item">Community Management</div>
                <div className="title-item">Open-source</div>
                <div className="title-item">UI Designing</div>
                <div className="title-item">Problem Solving</div>
              </div>
            </div>
            <span>
              <a href="">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="" style={{ color: "#000000" }}>
                <i className="fa-brands fa-github"></i>
              </a>
            </span>
            <p className="main-description">
              I design and code beautified simple things and love what I do.
            </p>
          </div>
          <div className="wrapper">
            <div className="link_wrapper">
              <a href="https://ashish4.bio.link" target="_blank">
                Let's Connect <i className="fa-brands fa-linkedin"></i>
              </a>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 268.832 268.832"
                >
                  <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="main-right">
          <img
            draggable="false"
            src={MyImage}
            alt="Image"
            className="right-image"
          />
        </div>
      </div>
    </>
  );
};
export default Intro;
