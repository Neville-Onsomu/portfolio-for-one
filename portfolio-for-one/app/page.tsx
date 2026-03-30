import NavBar from "./navbar";
import Intro from "./intro";
import Education from "./education";
import Skills from "./skills";
import Projects from "./projects";
import Contacts from "./contacts";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-slate-500 from-10% to-slate-200 to-90%">
      <NavBar/>
      <Intro/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contacts/>
    </div> 
  );
}