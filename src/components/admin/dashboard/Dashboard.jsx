import React, { useEffect, useState } from 'react';
import axios from 'axios';

const clientId = '388570080751-pijbevqfogstaah75cufi6729gkfiq2o.apps.googleusercontent.com';
const clientSecret = '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';
const redirectUri = 'https://bazramern.netlify.app';
const viewId = 'ga:299588117'; // Replace with your Google Analytics view ID

const Dashboard = () => {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Google Analytics data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Your Dashboard</h2>
      <div>
        {loading ? (
          <p>Loading data...</p>
        ) : analyticsData ? (
          <div>
            <p>Date: {analyticsData[0]?.date}</p>
            <p>Users: {analyticsData[0]?.users}</p>
            {/* Add more data display as needed */}
          </div>
        ) : (
          <p>{analyticsData[0]?.date}</p>

          
        )}
      </div>
    </div>
  );
};

export default Dashboard;
