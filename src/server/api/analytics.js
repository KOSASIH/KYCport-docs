import express from 'express';
import axios from 'axios';

const app = express();

app.get('/api/analytics', async (req, res) => {
  const response =await axios.get('https://your-analytics-api.com/data');
  const json = await response.data;
  res.json(json);
});

export default app;
