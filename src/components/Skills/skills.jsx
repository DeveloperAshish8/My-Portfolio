import "./skills.css";
import Fcards from "./Fcard";
import Tools from "./Tools";
import Soft from "./Soft-skills";
import Marquee from "react-fast-marquee";
import DB from "./DB";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h2 className="heading">
        Skills <span>&</span> Softwares
      </h2>
      <div className="container">
        <div className="row">
          <Marquee speed={20} gradient={true} gradientWidth={40}>
            <Fcards />
          </Marquee>
          <Marquee
            speed={20}
            direction="right"
            gradient={true}
            gradientWidth={40}
          >
            <Tools />
          </Marquee>
          <Marquee speed={20} gradient={true} gradientWidth={40}>
            <Soft />
          </Marquee>
          <Marquee
            speed={20}
            direction="right"
            gradient={true}
            gradientWidth={40}
          >
            <DB />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Skills;
