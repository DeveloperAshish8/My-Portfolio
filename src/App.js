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
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);
  return (
    <div className="app">
      {loading ? (
        <div className="preloader">
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
