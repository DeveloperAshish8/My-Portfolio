import "./App.css";
import { useEffect, useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Intro from "./components/intro/introduction";
import About from "./components/about/about";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Footer from "./components/footer/footer";
import Work from "./components/work/Work";
import Header from "./components/header/header";
import { FaRegCalendar } from "react-icons/fa";

function App() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => setloading(false);

    // If the page is already loaded (fast internet)
    if (document.readyState === "complete") {
      setloading(false);
    } else {
      // Wait for full load (images, CSS, etc.)
      window.addEventListener("load", handlePageLoad);
      return () => window.removeEventListener("load", handlePageLoad);
    }
  }, []);

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const expandTimeout = setTimeout(() => setIsExpanded(true), 1000); // expand after 5 sec

    const collapseTimeout = setTimeout(() => setIsExpanded(false), 5000); // collapse after 4 more sec

    return () => {
      clearTimeout(expandTimeout);
      clearTimeout(collapseTimeout);
    };
  }, []);
  return (
    <div className="app">
      {loading ? (
        <div className="preloader">
          {/*Preloader */}
          <ClimbingBoxLoader
            color={"#496eff"}
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          {/* Components */}
          <Header />
          <Intro />
          <About />
          <Skills />
          <Projects />
          <Work />
          <Footer />
          {/* ⭐ Calendly Animated Floating Button */}
          <button
            onClick={() =>
              window.Calendly.initPopupWidget({
                url: "https://calendly.com/augashish4/catchup-with-ashish-clone",
              })
            }
            className={`calendly-animated-btn ${isExpanded ? "expanded" : ""}`}
          >
            <FaRegCalendar size={20} />
            {isExpanded && <span className="btn-text">Schedule Call</span>}
          </button>
        </>
      )}
    </div>
  );
}

export default App;
