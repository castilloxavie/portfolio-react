import { useState } from "react";
import { AiOutlineDownload, AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineProject, AiOutlineWhatsApp } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);

    const navLinks = [
        { href: "#main", icon: AiOutlineHome, text: "Home", title: "Home" },
        { href: "#work", icon: GrProjects, text: "Work", title: "Works" },
        { href: "#project", icon: AiOutlineProject, text: "Project", title: "Projects" },
        { href: "#resume", icon: BsPerson, text: "About My", title: "Profile" },
        { href: "#contact", icon: AiOutlineMail, text: "Contact", title: "Contact" },
        { href: "/CV/XAVIER_CASTILLO _CV.pdf", icon: AiOutlineDownload, text: "Download", title: "Download CV", target: "_blank" },
        { href: "https://api.whatsapp.com/send/?phone=+573116490366", icon: AiOutlineWhatsApp, text: "", title: "WhatsApp", target: "_blank", className: "animate-bounce" },
    ];

    return (
        <div>
            <AiOutlineMenu size={20}
                onClick={handleNav}
                className="fixed top-4 right-4 z-[99] md:hidden bg-accent p-1 rounded-full hover:cursor-pointer hover:scale-110 ease-in duration-200 "
            />

            <a href="https://api.whatsapp.com/send/?phone=+573116490366" className="fixed top-4 right-4 z-[99] md:hidden mt-8 bg-accent rounded-full motion-safe:animate-ping duration-[3000]" target="_blank">
                <AiOutlineWhatsApp size={20} />
            </a>

            {nav ? (
                <div className="fixed w-full h-screen bg-secondaryBg/90 flex flex-col justify-center items-center z-20">
                    {navLinks.slice(0, 6).map((link, index) => (
                        <a key={index} onClick={handleNav} href={link.href} target={link.target} className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-accent font-semibold shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <link.icon size={20} />
                            <span className="pl-4">{link.text}</span>
                        </a>
                    ))}
                </div>
            ) : ("")}

            <div className="md:block hidden fixed top-[25%] z-10">
                <div className="flex flex-col">
                    {navLinks.map((link, index) => (
                        <a key={index} href={link.href} title={link.title} target={link.target} className={`rounded-full shadow-lg bg-primaryBg shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-100 ease-in duration-300 text-accent ${link.className || ""}`}>
                            <link.icon size={20} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidenav;
