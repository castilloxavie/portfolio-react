import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      aboutMe: 'About me',
      tAboutMe: 'I am a junior ADSI developer technologist  programming  skills in Python, web development with Django, SQL Server Management and MySQL databases, as well as knowledge of HTML, CSS, JavaScript and React. I have trained on technological platforms such as Platzi and Alura and I am constantly learning to improve my skills. I can work effectively in a team, I am proactive and I have the ability to take the initiative in solving problems. I have no work experience in the field of software development, but I have small projects in my repository that have allowed me to apply my technical and soft skills, and I am willing to learn and grow in a work environment'
    },
  },
  es:{
    translation: {
        aboutMe: "Acerca de mi",
        tAboutMe:'Soy un desarrollador junior ADSI tecnólogo con habilidades de programación en Python, desarrollo web con Django, SQL Server Management y bases de datos MySQL, así como conocimientos de HTML, CSS, JavaScript y React. Me he formado en plataformas tecnológicas como Platzi y Alura y estoy en constante aprendizaje para mejorar mis habilidades. Puedo trabajar eficazmente en equipo, soy proactivo y tengo capacidad para tomar la iniciativa en la resolución de problemas. No tengo experiencia laboral en el campo del desarrollo de software, pero tengo pequeños proyectos en mi repositorio que me han permitido aplicar mis habilidades técnicas y blandas, y estoy dispuesto a aprender y crecer en un ambiente laboral.'
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;