import { I18nextProvider } from "react-i18next";

import Contact from "./components/Contact";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Resumen from "./components/Resumen";
import Sidenav from "./components/Sidenav";
import Work from "./components/Work";
import i18n from "./i18n";

function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <div>
                <div className=" sm:left-[50%] flex flex-col absolute mt-2 ">
                    <LanguageSwitcher />
                </div>
                <Sidenav />
                <Main />
                <Resumen />
                <Work />
                <Projects />
                <Contact />

                <footer className="flex justify-center text-center">
                    <a
                        href="#main"
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-secondaryBg shadow-borderSubtle m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 font-bold"
                    >
                        By Xavier Alberto Castillo Varon - 2026
                    </a>
                </footer>
            </div>
        </I18nextProvider>
    );
}

export default App;
