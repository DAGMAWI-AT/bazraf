// Dashboard.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const apiUrl = 'https://www.googleapis.com/analytics/v3/data/ga?ids=ga:YOUR_VIEW_ID&start-date=30daysAgo&end-date=today&metrics=ga:users&dimensions=ga:date';

const Dashboard = () => {
  const [analyticsData, setAnalyticsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: 'Bearer YOUR_ACCESS_TOKEN',
          },
        });

        // Customize this part based on your API response format
        const data = response.data.rows.map(item => ({
          date: item[0],
          users: item[1],
        }));

        setAnalyticsData(data);
      } catch (error) {
        console.error('Error fetching Google Analytics data:', error);
      }
    };

    fetchData();
  }, []);

  const chartData = {
    labels: analyticsData?.map(item => item.date) || [],
    datasets: [
      {
        label: 'Users',
        data: analyticsData?.map(item => item.users) || [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h2>Your Dashboard</h2>
      <div>
        {analyticsData ? (
          <Line data={chartData} />
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
