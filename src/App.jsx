import { NavBar } from "./components/NavBar/nav_bar";
import { About } from "./components/About/about";
import { Skills } from "./components/Skills/skills";
import { ExperienceSection } from "./components/Experience/experience_section";
import { EducationSection } from "./components/Education/education_section";
import { ContactSection } from "./components/Contact/contact_section";
import { about } from "./constants";
import "../src/index.css";
function App() {
  return (
    <div className="flex items-center justify-center ">
      <div id={about} className="xl:w-1/2 sm:min-w-3/4 md:min-w-3/4">
        {/* NavBar */}
        <NavBar />
        {/* About */}
        <About />
        {/* Skills */}
        <Skills />
        {/* Experience */}
        <ExperienceSection />
        {/* Education */}
        <EducationSection />
        {/* Contact */}
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
