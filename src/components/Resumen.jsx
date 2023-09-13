import { BsGit } from "react-icons/bs"
import { FaCss3, FaHtml5, FaJs, FaPython, FaReact } from "react-icons/fa";
import { SiDjango, SiMysql } from "react-icons/si"

const Resumen = () => {
  return (
    <div id="resume" className="max-w[1040] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#0F1C2E]">
        About my
      </h1>
      <p className="text-center py-8">
        I am a junior ADSI developer technologist  programming
        skills in Python, web development with Django, SQL Server Management and
        MySQL databases, as well as knowledge of HTML, CSS, JavaScript and
        React. I have trained on technological platforms such as Platzi and
        Alura and I am constantly learning to improve my skills. I can work
        effectively in a team, I am proactive and I have the ability to take the
        initiative in solving problems. I have no work experience in the field
        of software development, but I have small projects in my repository that
        have allowed me to apply my technical and soft skills, and I am willing
        to learn and grow in a work environment.
      </p>

    

      <div className=" flex justify-around pt-6 max-w-[100%] w-full max-sm:flex flex-wrap ">
        <FaHtml5 size={50} className="border-2 p-3 rounded-full bg-gray-100 shadow-gray-400 m-2  cursor-pointer hover:scale-110 ease-in duration-2000 animate-bounce text-green-500 hover:text-black" title="Html"/>
        <FaCss3 size={50} className="border-2 p-3 rounded-full bg-gray-100 shadow-gray-400 m-2  cursor-pointer hover:scale-110 ease-in duration-2000 animate-bounce text-green-500 hover:text-black" title="Css3"/>
        <FaJs size={50} className="border-2 p-3 rounded-full bg-gray-100 shadow-gray-400 m-2  cursor-pointer hover:scale-110 ease-in duration-2000 animate-bounce text-green-500 hover:text-black" title="JavaScript"/>
        <FaReact size={50} className="border-2 p-3 rounded-full bg-gray-100 shadow-gray-400 m-2  cursor-pointer hover:scale-110 ease-in duration-2000 animate-bounce text-green-500 hover:text-black" title="React"/>
        <FaPython size={50} className="border-2 p-3 rounded-full bg-gray-100 shadow-gray-400 m-2  cursor-pointer hover:scale-110 ease-in duration-2000 animate-bounce text-green-500 hover:text-black" title="Python"/>
        <SiMysql size={50} className="border-2 p-3 rounded-full bg-gray-100 shadow-gray-400 m-2  cursor-pointer hover:scale-110 ease-in duration-2000 animate-bounce text-green-500 hover:text-black" title="Mysql"/>
        <SiDjango size={50} className="border-2 p-3 rounded-full bg-gray-100 shadow-gray-400 m-2  cursor-pointer hover:scale-110 ease-in duration-2000 animate-bounce text-green-500 hover:text-black" title="Django"/>
        <BsGit size={50} className="border-2 p-3 rounded-full bg-gray-100 shadow-gray-400 m-2  cursor-pointer hover:scale-110 ease-in duration-2000 animate-bounce text-green-500 hover:text-black" title="Django"/>
      </div>
    </div>
  );
};

export default Resumen;
