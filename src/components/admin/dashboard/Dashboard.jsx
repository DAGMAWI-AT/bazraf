import React, { useEffect, useState } from 'react';
import { Analytics, AnalyticsContext, AnalyticsView } from '@segment/analytics-react';

const Dashboard = () => {
  const [viewerData, setViewerData] = useState(null);

  useEffect(() => {
    // Initialize the Google Analytics API
    // You may need to replace 'YOUR_VIEW_ID' with your actual Google Analytics view ID
    Analytics.initialize({
      clientId: '107933900329267635235',
      clientEmail: 'google-analytics@bazramern.iam.gserviceaccount.com',
      privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC5VX+xlHECAHLh\ndtFFWUGLSzIo9sUr+HlhD2niP4X/THiikAkMO+puWzJEn1jBn6KjVgdCEHYqBB3M\njQCt4JwEkokzOgzGF6edNe1B1HcDMJm4YCfaKAcwSITZrWWOKGaRCMwk7zNAeaqS\nm49iDNUQdcjShUrwwVAkMhqzKrAbhpu6MO6CTv7gMh/Z6e8Q7559GWfY9vdT549z\nN0gujkH2q417+IotIPzqBZPTJv1jRFD88S4cVT4atj2CB0Zcj1IRyaIpXhWHG60B\nAOfXht/v7DJvxac7npSiB8Y22SfRlnHKbZzTUnuzaVUJJ2EHrv2wLLOP250+yTMO\n/tnXVpyZAgMBAAECggEAEWTe2StikWeG+kLzUE9Lzk2+ZW3TnFVAckWTqgvmmmSM\nJeWsYIOQp87TU748AqzmAyJkOzHd65xhsS/Cn1vabx6gCQWRUVfC/9Q7cj3SKNbh\nqa/ZZ0LxrPk0m4fUmJgq5PQu0YCWdNF2Z5zfj7o+/PTkMvqwYxKH+cp7pJ+EnvCR\nsPry2KEyQWIj/b31v11yC/8+U65IA6wO7aO40oN9DCIgrXdd9ehcFM8O28v4vUBJ\nXqQHTVoClWlDx5n2Oc2wXt4eESU4xSeMnBHC/Sbrv8nHU4nu+YxMLKr192lMrxy2\njUEK2PuSIvEVWURyUFNFLs/584MWre9H6OqYDoL7yQKBgQDzrPpFjVAkS3murM8B\nOGYrLVe7uOq44Ncb2z3EAmmkvDL5ZRXqFBQiMsyr+UHEdW7QaqMPpJS6XlsWVKSv\n3JEMBrPTuPcENdR0HzWUk+xfey/4FEdYMpsHa10EGwp3ox5y6e5x11FcwUpC3lwp\nVgx1zT4s43CZMtWll5xxAjLI3wKBgQDCtSJjwE1UgVNQO/Ub338FEs22U0yRm//P\nxVjsvzNduym3HheS8VBuFlYSEZ2lW6twiLDcsyGxbQzXEC2e0TT49Jb5eN90YCG9\nfAZVH7r2LfMv9skjSd9WKuY/0hYSZ9jV9PltqNh8Yz7OnFOiT3X741D8Ozu6Ebrf\nLzF9YWQxhwKBgG/Qy1NJIiJVg/PUlnTP5Yogl2ar1wGZIvxEYZZlKQcP2TA545Fz\nPz3mI6cyjKxS2tPGaybNdfYDQDcCBkQwqVpkZPZdpPQIo4HZpGOWcVvrEjr7SzW8\nmwkPijJNGkOF1X4TvHf+vvYaODJxCMdrFfKkiMheYZfbDNCcvovY32bvAoGAYKCb\n7H0m42U6/3qB7c9ArjfitzUnrquIjIgX1YYd68pSrXnVoSr5C2kyVc1AOyv/LN3p\nR93uPqsr0B9LRKH2dAaOVkhSPOLoW60NR3lzw3CSW59Rup2SpKStl8afBYtb5PKq\nRm2g4joulUKnjsl4eAUbz9FllrXt040MNnj6zEkCgYAOR5zgyf9sT/biXwti4m6+\ntlb2S5Z+13lP9jJzqa+FPkVgcQ37YsLWMYIvo4qWwefsW42wK1EgSm0ICd157u1X\nEEXEAZHEzW8yM06++xicISh7upi1KF0WqG8+MUYNR9M2dwNygNlhUQyCWd4Zzse3\nNUMU0YeWGVHReA+398PRTA==\n-----END PRIVATE KEY-----\n',
      viewId: '299588117',
    }).then(() => {
      // Fetch and set viewer data
      AnalyticsView.get().then((data) => setViewerData(data));
    });
  }, []);

  return (
    <div>
      {viewerData ? (
        <div>
          <h1>Google Analytics Dashboard</h1>
          {/* Display your viewer data here */}
          <pre>{JSON.stringify(viewerData, null, 2)}</pre>
        </div>
      ) : null}
    </div>
  );
};

export default Dashboard;
