import { FaFacebookF, FaGithub, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";


const Main = () => {
  return (
    <div id="main">
    
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="/header.jpg"
        alt=" header"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Xavier Castillo{" "}
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={["Developer", 2000, "Coder", 2000, "Tech ADSI", 2000]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://www.facebook.com/xavieralberto.castillovaron?mibextid=ZbWKwL"
              target="_block"
            >
              {" "}
              <FaFacebookF className="cursor-pointer" size={20} />
            </a>

            <a href="https://www.tiktok.com/@xavie782" target="_block">
              <FaTiktok className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/xavier-alberto-castillo-varon/"
              target="_block"
            >
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
            <a href="https://github.com/castilloxavie" target="_block">
              <FaGithub className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
