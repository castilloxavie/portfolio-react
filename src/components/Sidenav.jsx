import { useState } from "react";
import { AiOutlineDownload, AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineProject, AiOutlineWhatsApp } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

const Sidenav = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <AiOutlineMenu size={20}
                onClick={handleNav}
                className="fixed top-4 right-4 z-[99] md:hidden bg-green-500 p-1 rounded-full hover:cursor-pointer hover:scale-110 ease-in duration-200 hover:"
            />

            <a href="https://api.whatsapp.com/send/?phone=+573116490366" className="fixed top-4 right-4 z-[99] md:hidden mt-8 bg-green-500 rounded-full motion-safe:animate-ping duration-[3000]" target="_block">
                <AiOutlineWhatsApp size={20} />
            </a>

            {nav ? (
                <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                    <a
                        onClick={handleNav}
                        href="#main"
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-green-500 font-semibold shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <AiOutlineHome size={20} />
                        <span className="pl-4">Home</span>
                    </a>

                    <a
                        onClick={handleNav}
                        href="#work"
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg  bg-green-500 font-semibold shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <GrProjects size={20} />
                        <span className="pl-4">Work</span>
                    </a>

                    <a
                        onClick={handleNav}
                        href="#project"
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg  bg-green-500 font-semibold shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <AiOutlineProject size={20} />
                        <span className="pl-4">Project</span>
                    </a>

                    <a
                        onClick={handleNav}
                        href="#resume"
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg  bg-green-500 font-semibold shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <BsPerson size={20} />
                        <span className="pl-4">About My</span>
                    </a>

                    <a
                        onClick={handleNav}
                        href="#contact"
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg  bg-green-500 font-semibold shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <AiOutlineMail size={20} />
                        <span className="pl-4">Contact</span>
                    </a>

                    <a
                        onClick={handleNav}
                        href="/CV/XAVIER_CASTILLO _CV.pdf" target="_block"
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg  bg-green-500 font-semibold shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <AiOutlineDownload size={20} />
                        <span className="pl-4">Download</span>
                    </a>

                    {/* <div>
            <a
              href="#main"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-100 ease-in duration-300"
            >
              <BsPerson size={20} />
            </a>
          </div> */}
                </div>
            ) : (
                ""
            )}

            <div className="md:block hidden fixed top-[25%] z-10">
                <div className="flex flex-col">
                    <a
                        href="#main" title="Home"
                        className="rounded-full shadow-lg bg-black shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-100 ease-in duration-300 text-green-500"
                    >
                        <AiOutlineHome size={20} />
                    </a>

                    <a
                        href="#work" title="Works"
                        className="rounded-full shadow-lg bg-green-500  shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-100 ease-in duration-300 "
                    >
                        <GrProjects size={20} />
                    </a>

                    <a
                        href="#project" title="Projects"
                        className="rounded-full shadow-lg bg-black shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-100 ease-in duration-300 text-green-500"
                    >
                        <AiOutlineProject size={20} />
                    </a>

                    <a
                        href="#resume" title="Profile"
                        className="rounded-full shadow-lg bg-black shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-100 ease-in duration-300 text-green-500"
                    >
                        <BsPerson size={20} />
                    </a>

                    <a
                        href="#contact" title="Contact"
                        className="rounded-full shadow-lg bg-black shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-100 ease-in duration-300 text-green-500"
                    >
                        <AiOutlineMail size={20} />
                    </a>

                    <a
                        href="/CV/XAVIER_CASTILLO _CV.pdf" title="Download CV" target="_block"
                        className="rounded-full shadow-lg bg-black shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-100 ease-in duration-300 text-green-500"
                    >
                        <AiOutlineDownload size={20} />
                    </a>

                    <a
                        href="https://api.whatsapp.com/send/?phone=+573116490366" title="WhatsApp" target="_block"
                        className="rounded-full shadow-lg bg-black shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-100 ease-in duration-300 text-green-500 animate-bounce"
                    >
                        <AiOutlineWhatsApp size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Sidenav;
