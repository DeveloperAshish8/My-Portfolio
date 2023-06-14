import "./workarea.css";
import Workdata from "../work/workd.json";

const WorkArea = () => {
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
      <div className="progressbar">
        <div className="line"></div>
        <div>
          <div className="circle" style={{ background: "#286f6c" }}></div>
        </div>
        <div>
          <div className="circle" style={{ background: "#f2704e" }}></div>
        </div>
        <div>
          <div className="circle" style={{ background: "#eec048" }}></div>
        </div>
      </div>
    </div>
  );
};

export default WorkArea;
