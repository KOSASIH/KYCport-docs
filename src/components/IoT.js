import React, { useState, useEffect } from 'eact';
import * as mqtt from 'qtt';

const IoT = () => {
  const [client, setClient] = useState(null);
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const client = mqtt.connect('mqtt://example.com:1883');
    setClient(client);
  }, []);

  const handleSubscribe = () => {
    client.subscribe(topic);
  };

  const handleMessage = (topic, message) => {
    setMessage(message);
  };

  return (
    <div>
      <h1>Internet of Things (IoT) Integration</h1>
      <input type="text" value={topic} onChange={(event) => setTopic(event.target.value)} />
      <button onClick={handleSubscribe}>Subscribe</button>
      <p>Message: {message}</p>
    </div>
  );
};

export default IoT;
