import WorkItems from "./WorkItems";

const data = [
  {
    year: 2022,
    title: "Personal Projects",
    duration: "1 Year",
    detail:
      "Passionate about programming & web development with a solid background. While I haven't directly worked in companies, I've done personal projects applying studies to enhance skills. Each project teaches practical, self-taught learning, facing challenges for solutions. Dedication to web dev shows in projects. Excited to contribute professionally, aiming to grow and succeed in future projects with skills.",
  },

  {
    year: 2022,
    title: "Data Assurance",
    duration: "4 months",
    detail:
      " handled SQL Server Management Studio databases for EPSI user queries and exceptional customer service. Excel was used to cross tables, update the status system, and manage new entries. Proficient in office tools like Excel and Word, optimizing daily tasks. My commitment ensures efficient platform management, adding value to each project.",
  },

  {
    year: 2019,
    title: "labor practice (SENA)",
    duration: "6 months",
    detail:
      "My functions to perform were to feed a database, in the area of systems, preventive and corrective management of computer equipment and printers, also internal customer service in person or virtually, review of structured internet cabling.",
  },

  {
    year: 2015,
    title: "Systems Assistant",
    duration: "1 Year",
    detail:
      "maintenance and support of computer equipment, installation and configuration of software, basic knowledge of networks and computer security. Can solve computer problems and works well in a team, keeping up with technology and acting with professional ethics. It is adaptable and can communicate effectively with users..",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#0F1C2E]">Work</h1>
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
