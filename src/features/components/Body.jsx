import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Skills from "./Skills";

import "../styles/body.css";

const Body = () => {
  return (
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Contact />
    </main>
  );
};

export default Body;
