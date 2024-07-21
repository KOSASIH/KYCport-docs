import React, { useState } from 'eact';
import MonacoEditor from 'onaco-editor';

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      <select value={language} onChange={handleLanguageChange}>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
      </select>
      <MonacoEditor
        value={code}
        language={language}
        onChange={handleCodeChange}
        theme="vs-dark"
        height="500px"
        width="100%"
      />
    </div>
  );
};

export default CodeEditor;
