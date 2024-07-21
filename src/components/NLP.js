import React, { useState, useEffect } from 'react';
import * as nlp from 'compromise';

const NLP = () => {
  const [text, setText] = useState('');
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    const analyzeText = () => {
      const doc = nlp(text);
      setEntities(doc.entities().out('array'));
    };
    analyzeText();
  }, [text]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>Natural Language Processing (NLP)</h1>
      <textarea value={text} onChange={handleTextChange} />
      <p>Entities: {entities.map((entity) => entity.text).join(', ')}</p>
    </div>
  );
};

export default NLP;
