import React from 'react';
import i18n from '../i18n';

const Multilingual = () => {
  const [language, setLanguage] = useState(i18n.language);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      <h1>Multilingual Support</h1>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
      </select>
      <p>{i18n.t('hello')}</p>
    </div>
  );
};

export default Multilingual;
