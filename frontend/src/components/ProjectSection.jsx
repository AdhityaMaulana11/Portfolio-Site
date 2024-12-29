import ProjectCard from "./ProjectCard";
import RestokuApp1 from "../assets/project-pics/RestokuApp-1.png";
import RestokuApp2 from "../assets/project-pics/RestokuApp-2.png";
import RestokuApp3 from "../assets/project-pics/RestokuApp-3.png";
import NotesAppVanilla1 from "../assets/project-pics/NotesApp-1.png";
import NotesAppVanilla2 from "../assets/project-pics/NotesApp-2.png";
import TravelKuy1 from "../assets/project-pics/TravelKuy-1.png";
import TravelKuy2 from "../assets/project-pics/TravelKuy-2.png";
import TravelKuy3 from "../assets/project-pics/TravelKuy-3.png";
import TravelKuy4 from "../assets/project-pics/TravelKuy-4.png";
import TravelKuy5 from "../assets/project-pics/TravelKuy-5.png";
import EduNation1 from "../assets/project-pics/LandingPageEduNation-1.png";
import EduNation2 from "../assets/project-pics/LandingPageEduNation-2.png";
import EduNation3 from "../assets/project-pics/LandingPageEduNation-3.png";
import EduNation4 from "../assets/project-pics/LandingPageEduNation-4.png";
import EduNation5 from "../assets/project-pics/LandingPageEduNation-5.png";
import RekamMedis1 from "../assets/project-pics/RekamMedis-1.png";
import RekamMedis2 from "../assets/project-pics/RekamMedis-2.png";
import RekamMedis3 from "../assets/project-pics/RekamMedis-3.png";
import NotesAppReact1 from "../assets/project-pics/NotesAppReact-1.png";
import NotesAppReact2 from "../assets/project-pics/NotesAppReact-2.png";
import Extension1 from "../assets/project-pics/ChromeAutoReloadExtension1.png";
import Extension2 from "../assets/project-pics/ChromeAutoReloadExtension2.png";

export default function ProjectSection() {
  return (
    <section id="projects" className="py-16 px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          See <span className="text-[#252525]">My Projects</span>
        </h2>
        <p className="text-[#737373] max-w-2xl mx-auto">
          Check out some of the projects I’ve worked on that demonstrate my
          skills in full-stack web development.
        </p>
      </div>
      <div className="flex flex-col items-center space-y-16">
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
          <ProjectCard
            title="Restoku App"
            description="Restoku App is a Progressive Web Application that provides restaurant recommendations around the city. Restaurant data is retrieved from an API. Built with HTML5, CSS3, JavaScript, and Web Components."
            images={[RestokuApp1, RestokuApp2, RestokuApp3]}
            border="border-[#8DC8D6]"
            highlight={1}
          />
        </div>
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
          <ProjectCard
            title="Notes Taking App"
            description="A frontend application for storing notes integrated with a RESTful API. Built with HTML5, CSS3, JavaScript, and Web Components."
            images={[NotesAppVanilla1, NotesAppVanilla2]}
            reverse
            border="border-[#E6B8B3]"
            highlight={2}
          />
        </div>
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
          <ProjectCard
            title="Travel Kuy"
            description="A full-stack application for booking travel packages. Built with React.js, DaisyUI, Express.js, Node.js, and MySQL."
            images={[
              TravelKuy1,
              TravelKuy2,
              TravelKuy3,
              TravelKuy4,
              TravelKuy5,
            ]}
            border="border-[#F4C28E]"
            highlight={3}
          />
        </div>
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
          <ProjectCard
            title="Landing Page Edu Nation"
            description="Landing page for the fictional Edu-Nation online course service. Built with HTML5, CSS3, and JavaScript."
            images={[
              EduNation1,
              EduNation2,
              EduNation3,
              EduNation4,
              EduNation5,
            ]}
            reverse
            border="border-[#8DC8D6]"
          />
        </div>
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
          <ProjectCard
            title="Rekam Medis App"
            description="A full-stack Medical Record Management application for hospitals. Built with React.js, DaisyUI, Express.js, Node.js, and MySQL."
            images={[RekamMedis1, RekamMedis2, RekamMedis3]}
            border="border-[#E6B8B3]"
          />
        </div>
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
          <ProjectCard
            title="React Notes App"
            description="A frontend application for storing notes integrated with an API. Built with React.js and DaisyUI."
            images={[NotesAppReact1, NotesAppReact2]}
            reverse
            border="border-[#F4C28E]"
          />
        </div>
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
          <ProjectCard
            title="Chrome Auto Reload Page Extension"
            description="An extension to automatically reload Chrome pages every 30 seconds. Built with React.js, TypeScript, and Chrome API."
            images={[Extension1, Extension2]}
            border="border-[#8DC8D6]"
          />
        </div>
      </div>
    </section>
  );
}
