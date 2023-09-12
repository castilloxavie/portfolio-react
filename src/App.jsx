import Contact from "./components/Contact";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Resumen from "./components/Resumen";
import Sidenav from "./components/Sidenav";
import Work from "./components/Work";

function App() {
  return (
    <div>
      
      <Sidenav />
      <Main />
      <Resumen />
      <Work />
      <Projects />
      <Contact />

      

      <footer className="flex justify-center text-center" >
        <a href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 font-bold">By Xavier Alberto Castillo Varon G-28 Academlo</a>
      </footer>
    </div>
  );
}

export default App;
