import "./work.css";
import WorkArea from "./work-area";

export default function Work() {
  return (
    <section className="work-wrapper" id="experience">
      <div className="work-container">
        <h2 className="heading-about">
          Work<span> Experience</span>
        </h2>

        <WorkArea />
      </div>
    </section>
  );
}
