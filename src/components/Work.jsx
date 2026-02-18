import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { AiOutlineTool, AiOutlineDatabase, AiOutlineSetting } from "react-icons/ai";
import workData from "../data/workData";

const Work = () => {
    const { t } = useTranslation("translation");
    const [works, setWorks] = useState([]);

    useEffect(() => {
        setWorks(workData);
    }, []);

    const getIcon = (index) => {
        const icons = [AiOutlineTool, AiOutlineDatabase, AiOutlineSetting];
        const IconComponent = icons[index % icons.length];
        return <IconComponent size={35} className="text-accentHover" />;
    };

    return (
        <div id="work" className="max-w[1040] m-auto md:pl-20 p-4 py-16 bg-primaryBg">
            <h1 className="text-4xl font-bold text-center text-textPrimary">{t("wTitle")}</h1>
            <div className="mt-8">
                {works.map((work, index) => (
                    <div key={index} className="flex items-start mb-8 hover:scale-105 transition-transform duration-300">
                        <div className="flex-shrink-0 mr-4 p-3 bg-secondaryBg rounded-lg border-2 border-accent">
                            {getIcon(index)}
                        </div>
                        <div className="bg-secondaryBg p-6 rounded-lg shadow-lg w-full border-l-4 border-accent hover:shadow-xl transition-shadow">
                            <h2 className="text-xl font-semibold text-textPrimary">{work.title}</h2>
                            <p className="text-accentHover font-medium">{work.duration}</p>
                            <p className="mt-3 text-textSecondary leading-relaxed">{work.detail}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {work.technologies.map((tech, i) => (
                                    <span key={i} className="inline-block bg-accent/30 text-accentHover px-3 py-1 rounded-full text-sm font-medium border border-accent">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;
