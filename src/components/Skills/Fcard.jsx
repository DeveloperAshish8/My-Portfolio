import "./Card.css";
import Fskills from "./Skill-cards/Frontend-skills.json";

function Fcards() {
  return (
    <div className="cards">
      {Fskills.map((fskill) => {
        return (
          <div class="card">
            <div class="info">
              <img src={fskill.icon} alt="skill" />
              <span>{fskill.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Fcards;
