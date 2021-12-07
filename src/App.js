import Header from "./Components/Layout/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Education from "./Pages/Education";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Sidebar from "./Components/Layout/Sidebar";
import classes from "./Sass/App.module.css";

const App = () => {
  return (
    <div className={classes.app}>
      <Header />
      <Sidebar />
      <Home />
      <About/>
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
