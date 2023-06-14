import "./skills.css";
import Fcards from "./Fcard";
import Tools from "./Tools";
import Soft from "./Soft-skills";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h2 className="heading">
        Skills <span>&</span> Softwares
      </h2>
      <div className="container">
        <div className="row">
          <Marquee speed={70}>
            <Fcards />
          </Marquee>
          <Marquee speed={70} direction="right">
            <Tools />
          </Marquee>
          <Marquee speed={70}>
            <Soft />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Skills;
