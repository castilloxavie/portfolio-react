import { useTranslation } from "react-i18next"

import WorkItems from "./WorkItems";

const Work = () => {

  const {t} = useTranslation("translation")

  const data = [
    {
      year: 2022,
      title: t("wSubTitle"),
      duration: t("WDuration"),
      detail: t("wDetail"),
      
    },
  
    {
      year: 2022,
      title: t("wSubTitle2"),
      duration: t("WDuration2"),
      detail:t("wDetail2")
        
    },
  
    {
      year: 2019,
      title: t("wSubTitle3"),
      duration: t("WDuration3"),
      detail:t("wDetail3"),
    },
  
    {
      year: 2015,
      title: t("wSubTitle4"),
      duration: t("WDuration4"),
      detail: t("wDetail4")
        
    },
  ];



  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#0F1C2E]">{t("wTitle")}</h1>
      {data.map((item, idx) => (
        <WorkItems
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          detail={item.detail}
        />
      ))}
    </div>
  );
};
export default Work;
