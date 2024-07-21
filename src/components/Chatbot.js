import React, { useState } from 'eact';
import Dialogflow from 'dialogflow';

const Chatbot = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSendMessage = () => {
    const dialogflowClient = new Dialogflow('YOUR_PROJECT_ID');
    dialogflowClient.textQuery(query).then((response) => {
      setResponse(response.queryResult.fulfillmentText);
    });
  };

  return (
    <div>
      <h1>AI-powered Chatbot</h1>
      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
        placeholder="Ask me a question..."
      />
      <button onClick={handleSendMessage}>Send Message</button>
      <p>{response}</p>
    </div>
  );
};

export default Chatbot;
