import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    console.log('Changing language to', lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{zIndex: 1000, position: "absolute"}} className='bg-black font-semibold border-2 border-black text-green-500 flex justify-items-center p-2 rounded-full borde-2 shadow-2xl shadow-green-300 hover:scale-100 ease-in duration-500 cursor-pointer'>
      <button onClick={() => changeLanguage('en')}>EN</button> 
      ||
      <button onClick={() => changeLanguage('es')}>ES</button>
      {/* Agrega más botones según sea necesario */}
    </div>
  );
};

export default LanguageSwitcher;