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
                "I am a junior ADSI developer technologist  programming  skills in Python, web development with Django, SQL Server Management and MySQL databases, as well as knowledge of HTML, CSS, JavaScript and React. I have trained on technological platforms such as Platzi and Alura and I am constantly learning to improve my skills. I can work effectively in a team, I am proactive and I have the ability to take the initiative in solving problems. I have no work experience in the field of software development, but I have small projects in my repository that have allowed me to apply my technical and soft skills, and I am willing to learn and grow in a work environment",

            // work
            wTitle: "Works",
            wSubTitle: "Systems Assistant",
            WDuration: "1 Year",
            wDetail:
                "maintenance and support of computer equipment, installation and configuration of software, basic knowledge of networks and computer security. Can solve computer problems and works well in a team, keeping up with technology and acting with professional ethics. It is adaptable and can communicate effectively with users..",

            wSubTitle2: "Data Assurance",
            WDuration2: "4 months",
            wDetail2:
                "handled SQL Server Management Studio databases for EPSI user queries and exceptional customer service. Excel was used to cross tables, update the status system, and manage new entries. Proficient in office tools like Excel and Word, optimizing daily tasks. My commitment ensures efficient platform management, adding value to each project.",

            wSubTitle3: "Labor Practice (SENA)",
            WDuration3: "6 months",
            wDetail3:
                "My functions to perform were to feed a database, in the area of systems, preventive and corrective management of computer equipment and printers, also internal customer service in person or virtually, review of structured internet cabling.",

            wSubTitle4: "Systems Assistant",
            WDuration4: "1 Year",
            wDetail4:
                "maintenance and support of computer equipment, installation and configuration of software, basic knowledge of networks and computer security. Can solve computer problems and works well in a team, keeping up with technology and acting with professional ethics. It is adaptable and can communicate effectively with users..",

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
            aboutMe: "Acerca de mi",
            tAboutMe:
                "Soy un desarrollador junior ADSI tecnólogo con habilidades de programación en Python, desarrollo web con Django, SQL Server Management y bases de datos MySQL, así como conocimientos de HTML, CSS, JavaScript y React. Me he formado en plataformas tecnológicas como Platzi y Alura y estoy en constante aprendizaje para mejorar mis habilidades. Puedo trabajar eficazmente en equipo, soy proactivo y tengo capacidad para tomar la iniciativa en la resolución de problemas. No tengo experiencia laboral en el campo del desarrollo de software, pero tengo pequeños proyectos en mi repositorio que me han permitido aplicar mis habilidades técnicas y blandas, y estoy dispuesto a aprender y crecer en un ambiente laboral.",

            // work
            wTitle: "Trabajos",
            wSubTitle: "Asistente de Sistemas",
            WDuration: "1 año",
            wDetail:
                "mantenimiento y soporte de equipos de cómputo, instalación y configuración de software, conocimientos básicos de redes y seguridad informática. Puede resolver problemas informáticos y trabaja bien en equipo, manteniéndose al día con la tecnología y actuando con ética profesional. Es adaptable y puede comunicarse eficazmente con los usuarios.",

            wSubTitle2: "Aseguramiento de Datos",
            WDuration2: "4 meses",
            wDetail2:
                "manejé bases de datos de SQL Server Management Studio para consultas de usuarios de EPSI y un servicio al cliente excepcional. Se utilizó Excel para cruzar tablas, actualizar el sistema de estado y gestionar nuevas entradas. Dominio de herramientas ofimáticas como Excel y Word, optimizando las tareas diarias. Mi compromiso asegura una gestión eficiente de la plataforma, agregando valor a cada proyecto.",

            wSubTitle3: "Práctica Laboral (SENA)",
            WDuration3: "6 meses",
            wDetail3:
                "Mis funciones a desempeñar fueron alimentar una base de datos, en el área de sistemas, manejo preventivo y correctivo de equipos de cómputo e impresoras, también atención al cliente interno de manera presencial o virtual, revisión de cableado estructurado de internet.",

            wSubTitle4: "Asistente de Sistemas",
            WDuration4: "1 Año",
            wDetail4:
                "mantenimiento y soporte de equipos de cómputo, instalación y configuración de software, conocimientos básicos de redes y seguridad informática. Puede resolver problemas informáticos y trabaja bien en equipo, manteniéndose al día con la tecnología y actuando con ética profesional. Es adaptable y puede comunicarse eficazmente con los usuarios.",

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
