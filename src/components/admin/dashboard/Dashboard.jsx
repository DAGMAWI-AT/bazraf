import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const clientId = '388570080751-pijbevqfogstaah75cufi6729gkfiq2o.apps.googleusercontent.com';
const clientSecret = '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';
const redirectUri = 'https://bazramern.netlify.app';
const viewId = 'ga:UA-299901557-1'; // Replace with your Google Analytics view ID

const Dashboard = () => {
  const [analyticsData, setAnalyticsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Step 1: Get Access Token
        const authResponse = await axios.post('https://oauth2.googleapis.com/token', null, {
          params: {
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: 'refresh_token',
            redirect_uri: redirectUri,
            refresh_token: 'YOUR_REFRESH_TOKEN', // Replace with your refresh token
          },
        });

        const accessToken = authResponse.data.access_token;

        // Step 2: Fetch Data from Google Analytics
        const apiUrl = `https://www.googleapis.com/analytics/v3/data/ga?ids=${viewId}&start-date=30daysAgo&end-date=today&metrics=ga:users&dimensions=ga:date`;

        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
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
