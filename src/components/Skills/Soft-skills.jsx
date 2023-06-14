import "./Card.css";
import Soft from "./Skill-cards/soft-skills.json";

function SoftSkill() {
  return (
    <div className="cards">
      {Soft.map((soft) => {
        return (
          <div class="card">
            <div class="info">
              <img src={soft.icon} alt="skill" />
              <span>{soft.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SoftSkill;
