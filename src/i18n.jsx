import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {

            //main
            mName: " I'm Xavier Castillo",
            mI: " I'm a",
            mDeveloper: "Developer",
            mCoder: "Coder",
            mTechADSI: "Tech ADSI",

            //resumen
            aboutMe: "About me",
            tAboutMe:
                "Systems Engineering student in the fifth semester of training and Technologist in Analysis and Systems Development with experience in Web application development, database analysis and updating, process automation, and implementation of improvement strategies. With competencies such as: Problem-solving, continuous improvement, results orientation, and adaptability.",

            // work
            wTitle: "Experience",
            wSubTitle: "Automation Analyst",
            WDuration: "Jul 2025 - Oct 2025 · 4 months",
            wDetail:
                "I worked as a Backend Developer specializing in HR Tech solutions, where I designed and built custom tools with JavaScript, TypeScript, Node.js for integrating complex talent management systems. I led the automation of critical processes using n8n, Puppeteer, and ensured advanced database management with SQL, achieving optimized information integrity throughout the employee lifecycle.",

            wSubTitle2: "L2 Support Analyst",
            WDuration2: "Oct 2023 - Jul 2025 · 1 year 10 months",
            wDetail2:
                "I worked as a Specialist in Technical Support and Critical Infrastructure Management, where I administered and maintained Relational Databases, ensuring the integrity and availability of sensitive information. I led remote access management and server administration under secure protocols (SSH), using global standard tools like BeyondTrust (Bomgar), VNC, and enterprise support. My management stood out for combining high-level technical resolution with effective communication, guaranteeing technological service stability and user satisfaction in high-demand environments.",

            wSubTitle3: "Database Assistant",
            WDuration3: "Aug 2022 - Nov 2022 · 4 months",
            wDetail3:
                "I specialized in the design, administration, and optimization of relational databases, where I guaranteed information integrity and efficiency in complex queries. I led the resolution of technical requirements and user support in critical environments, applying assertive communication to transform operational needs into robust technological solutions.",


            //projects
            pdescription:
                " The portfolio showcases a series of projects that exemplify a comprehensive journey, encompassing everything from foundational stages to advanced API consumption. Each project in this collection serves as a testament to the progression and growth, highlighting the evolution from fundamental concepts to more intricate phases like seamless integration and utilization of APIs.",
            pTitle: "Projects",


            //contact
            cContact: "Contact",
            cFullName: "full name",
            cphoneNumber: "Phone Number",
            cEmail: "Email",
            cSubject: "Subject",
            cMessage: "Message",
            cSendMessage: "Send Message",
        },
    },
    es: {
        translation: {
            //main
            mName: " Soy Xavier Castillo",
            mI: "Soy un ",
            mDeveloper: "Desarrollador",
            mCoder: "Codificador",
            mTechADSI:"Tecnologo ADSI",

            //resumen
            aboutMe: "Acerca de mí",
            tAboutMe:
                "Estudiante de Ingeniería de Sistemas en quinto semestre de formación y Tecnólogo en Análisis y Desarrollo de Sistemas con experiencia en desarrollo de aplicaciones Web, análisis y actualización de bases de datos, automatización de procesos e implementación de estrategias de mejora. Con competencias como: Solución de problemas, mejoramiento continuo, orientación a resultados y adaptabilidad.",

            // work
            wTitle: "Experiencia",
            wSubTitle: "Analista de Automatización",
            WDuration: "Jul 2025 - Oct 2025 · 4 meses",
            wDetail:
                "Me desempeñé como Desarrollador Backend especializado en soluciones HR Tech, donde diseñé y construí herramientas a medida con JavaScript, TypeScript, Node.js para la integración de sistemas complejos de gestión de talento. Lideré la automatización de procesos críticos mediante n8n, Puppeteer y aseguré la gestión avanzada de bases de datos con SQL, logrando optimizar la integridad de la información durante todo el ciclo de vida del empleado.",

            wSubTitle2: "Analista de Soporte L2",
            WDuration2: "Oct 2023 - Jul 2025 · 1 año 10 meses",
            wDetail2:
                "Me desempeñé como Especialista en Soporte Técnico y Gestión de Infraestructura Crítica, donde administré y mantuve Bases de Datos Relacionales, asegurando la integridad y disponibilidad de información sensible. Lideré la gestión de accesos remotos y administración de servidores bajo protocolos seguros (SSH), utilizando herramientas de estándar global como BeyondTrust (Bomgar), VNC y soporte empresarial. Mi gestión destacó por combinar resolución técnica de alto nivel con una comunicación efectiva, garantizando la estabilidad de servicios tecnológicos y la satisfacción de usuarios en entornos de alta exigencia.",

            wSubTitle3: "Auxiliar de Bases de Datos",
            WDuration3: "Ago 2022 - Nov 2022 · 4 meses",
            wDetail3:
                "Especialicé mi gestión en el diseño, administración y optimización de bases de datos relacionales, donde garanticé la integridad de la información y la eficiencia en consultas complejas. Lideré la resolución de requerimientos técnicos y la atención a usuarios en entornos críticos, aplicando una comunicación asertiva para transformar necesidades operativas en soluciones tecnológicas robustas.",


            //projects
            pdescription:
                "El portafolio muestra una serie de proyectos que ejemplifican un recorrido integral, que abarca todo, desde las etapas fundamentales hasta el consumo avanzado de API. Cada proyecto de esta colección sirve como testimonio de la progresión y el crecimiento, destacando la evolución desde conceptos fundamentales hasta fases más complejas como la integración perfecta y la utilización de API.",
            pTitle: "Proyectos",


             //contact
             cContact: "Contacto",
             cFullName: "Nombre Completo",
             cphoneNumber: "Numero telefonico",
             cEmail: "Correo Electronico",
             cSubject: "Asunto",
             cMessage: "Mensaje",
             cSendMessage: "Enviar Mensaje",
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en", // default language
    interpolation: {
        escapeValue: false, // react already safes from xss
    },
});

export default i18n;
