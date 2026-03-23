import NavBar from "./navbar";
import Intro from "./intro";
import Education from "./education";
import Skills from "./skills";
import Projects from "./projects";

export default function Home() {
  return (
    <div className="px-10 pb-4">
      <NavBar/>
      <Intro/>
      <Education/>
      <Skills/>
      <Projects/>
    </div> 
  );
}