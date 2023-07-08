import "./workarea.css";
import Workdata from "../work/workd.json";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const WorkArea = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="experiences">
      {Workdata.map((Edata, i) => {
        return (
          <div className="exp" key={i}>
            <div className="post">
              <h1>{Edata.company}</h1>
              <p>{Edata.period}</p>
            </div>
            <div className="role">
              <h1>{Edata.title}</h1>
              <p>{Edata.details}</p>
            </div>
          </div>
        );
      })}
      <div className="progressbar" >
        <div className="line" data-aos="fade-up"></div>
        <div>
          <div className="circle" data-aos="fade-down" style={{ background: "#286f6c" }}></div>
        </div>
        <div>
          <div className="circle" data-aos="fade-down" style={{ background: "#f2704e" }}></div>
        </div>
        <div>
          <div className="circle" data-aos="fade-down" style={{ background: "#eec048" }}></div>
        </div>
      </div>
    </div>
  );
};

export default WorkArea;
