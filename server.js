const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3005;

// Serve static files from the current directory
app.use(express.static('./'));

// Serve index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the birthday cake page from 96 directory
app.get('/96/birthday-cake.html', (req, res) => {
  res.sendFile(path.join(__dirname, '96/birthday-cake.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log(`Open your browser and navigate to http://localhost:${PORT} to see Shahen's birthday form!`);
}); 