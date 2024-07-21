import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const RealtimeAnalytics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const socket = new WebSocket('wss://example.com/ws');
    socket.onmessage = (event) => {
      setData((prevData) => [...prevData, JSON.parse(event.data)]);
    };
  }, []);

  return (
    <div>
      <h1>Real-time Data Analytics</h1>
      <LineChart width={500} height={300} data={data}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <XAxis dataKey="time" />
        <YAxis />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default RealtimeAnalytics;
