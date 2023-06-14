import "./Card.css";
import Tool from "./Skill-cards/tools.json";

function Tools() {
  return (
    <div className="cards">
      {Tool.map((tool) => {
        return (
          <div class="card">
            <div class="info">
              <img src={tool.icon} alt="skill" />
              <span>{tool.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Tools;
