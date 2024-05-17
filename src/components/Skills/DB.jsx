import "./Card.css";
import Data from "./Skill-cards/DB.json";

const DB = () => {
  return (
    <div className="cards">
      {Data.map((db) => {
        return (
          <div class="card">
            <div class="info">
              <img src={db.icon} alt="skill" />
              <span>{db.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DB;
