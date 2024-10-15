const axios = require('axios');
const https = require('https');

// Sample API Endpoint (JSONPlaceholder)
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Create a HTTPS agent to handle HTTPS requests
const httpsAgent = new https.Agent({
  rejectUnauthorized: false, // Allows self-signed certificates (if needed)
});

// Axios GET request to consume the API
axios.get(API_URL, { httpsAgent })
  .then((response) => {
    // Successfully received data
    console.log('Data received:', response.data);
  })
  .catch((error) => {
    // Error handling
    console.error('Error fetching data:', error.message);
  });

// Basic Node.js server setup (optional)
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('API Consumer is running\n');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
