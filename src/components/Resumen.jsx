import { useTranslation } from 'react-i18next';
import { BsGit } from "react-icons/bs"
import { FaCss3, FaHtml5, FaJs, FaPython, FaReact } from "react-icons/fa";
import { SiDjango, SiMysql, SiNodedotjs, SiExpress, SiMongodb, SiNestjs, SiFastapi } from "react-icons/si"

const Resumen = () => {
  const { t } = useTranslation('translation');
  
  const skills = [
    { icon: FaHtml5, name: "Html", percentage: 90 },
    { icon: FaCss3, name: "Css", percentage: 85 },
    { icon: FaJs, name: "JavaScript", percentage: 88 },
    { icon: FaReact, name: "React", percentage: 85 },
    { icon: SiNodedotjs, name: "Node.js", percentage: 75 },
    { icon: SiNestjs, name: "Nest.js", percentage: 60 },
    { icon: SiExpress, name: "Express", percentage: 75 },
    { icon: FaPython, name: "Python", percentage: 50 },
    { icon: SiDjango, name: "Django", percentage: 50 },
    { icon: SiFastapi, name: "FastAPI", percentage: 50 },
    { icon: SiMysql, name: "MySQL", percentage: 82 },
    { icon: SiMongodb, name: "MongoDB", percentage: 76 },
    { icon: BsGit, name: "Git", percentage: 88 },
  ];

  return (
    <div id="resume" className="max-w[1040] m-auto md:pl-20 p-4 py-16 bg-primaryBg">
      <h1 className="text-4xl font-bold text-center text-textPrimary">
      {t('aboutMe')}
      </h1>
      <p className="text-center py-8 text-textSecondary"> 
        {t('tAboutMe')}
      </p>

      <div className="flex justify-around pt-6 max-w-[100%] w-full flex-wrap">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div key={index} className="flex flex-col items-center m-2">
              <div className="border-2 border-accent p-3 rounded-full bg-secondaryBg shadow-lg cursor-pointer hover:scale-110 ease-in duration-200 transition">
                <IconComponent size={50} className="text-accentHover hover:text-accent transition" title={skill.name}/>
              </div>
              <p className="text-textPrimary font-semibold text-sm mt-2">{skill.name}</p>
              <div className="w-24 bg-borderSubtle rounded-full h-1.5 mt-1">
                <div 
                  className="bg-accent h-1.5 rounded-full transition-all" 
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              <p className="text-accent text-xs font-bold mt-1">{skill.percentage}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Resumen;
