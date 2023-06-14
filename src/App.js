import "./App.css";
import Intro from "./components/intro/introduction";
import About from "./components/about/about";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Footer from "./components/footer/footer";
import Work from "./components/work/Work";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Work />
      <Footer />
    </>
  );
}

export default App;
