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
        </>
      )}
    </div>
  );
}

export default App;
