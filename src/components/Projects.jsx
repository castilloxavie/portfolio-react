import ProjectsItem from "./ProjectsItem";
import anime from "../assets/anime-API.png";
import css from "../assets/css_architecture.png";
import dom from "../assets/dom-manipulation.png";
import portfolio from "../assets/first-portfolio.png";
import rick from "../assets/Rick-and-Morty-API.png";
import user from "../assets/user-API.png";
import validaation from "../assets/validation-html-form.png";
import weather from "../assets/weather-API.png";

const Projects = () => {
  return (
    <div id="project" className="max-w[1040] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#0F1C2E]">Projects</h1>
      <p className="text-center py-8">
      The portfolio showcases a series of projects that exemplify a comprehensive journey, encompassing everything from foundational stages to advanced API consumption. Each project in this collection serves as a testament to the progression and growth, highlighting the evolution from fundamental concepts to more intricate phases like seamless integration and utilization of APIs.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectsItem img={anime} title ="anime API" language ="React Js" url="https://anime-api-nine.vercel.app/" />
        <ProjectsItem img={css} title ="css architecture" language ="Html Css" url="https://castilloxavie.github.io/arquitectura_css/" />
        <ProjectsItem img={dom} title ="dom manipulation" language ="Html Css Js" url="https://castilloxavie.github.io/DOM/" />
        <ProjectsItem img={portfolio} title ="first portfolio" language ="Html Css Js" url="https://castilloxavie.github.io/portafoli-personal/#habilidades" />
        <ProjectsItem img={rick} title ="Rick and Morty API" language ="React Js" url="https://rick-mortyn.vercel.app/" />
        <ProjectsItem img={user} title ="user API" language ="React Js" url="https://api-user-eta.vercel.app/" />
        <ProjectsItem img={validaation} title ="validation html form" language ="Html" url="https://castilloxavie.github.io/validacio-formulario-html/" />
        <ProjectsItem img={weather} title ="weather API" language ="React Js" url="https://weather-delta-tan.vercel.app/" />
      </div>
    </div>
  );
};
export default Projects;
