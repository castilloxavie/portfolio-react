import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import ProjectsItem from "./ProjectsItem";
import projectsData from '../data/projectsData';

const Projects = () => {
  const { t } = useTranslation('translation');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div id="project" className="max-w[1040] m-auto md:pl-20 p-4 py-16 bg-primaryBg">
      <h1 className="text-4xl font-bold text-center text-textPrimary">{t("pTitle")}</h1>
      <p className="text-center py-8 text-textSecondary">
      {t("pdescription")}
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <ProjectsItem key={index} img={project.img} title={project.title} language={project.language} url={project.url} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
