import React, { useState, useEffect } from 'eact';
import Chart from 'chart.js';

const Analytics = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Page Views',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchAnalytics = async () => {
      const response = await fetch('/api/analytics');
      const json = await response.json();
      setData((prevData) => ({
       ...prevData,
        labels: json.labels,
        datasets: [
          {
           ...prevData.datasets[0],
            data: json.data,
          },
        ],
      }));
    };
    fetchAnalytics();
  }, []);

  return (
    <div>
      <h1>Real-time Analytics</h1>
      <canvas id="analytics-chart" />
      <script>
        const ctx = document.getElementById('analytics-chart').getContext('2d');
        new Chart(ctx, {
          type: 'line',
          data,
          options: {
            title: {
              display: true,
              text: 'Page Views',
            },
          },
        });
      </script>
    </div>
  );
};

export default Analytics;
