// server.js or app.js
const express = require('express');
const cors = require('cors');
const app = express();
const port =  5000;

app.use(cors()); // Enable CORS
app.use(express.json());

// Sample blog data
const blogs = [
  { id: 1, title: 'Understanding React', content: 'React is a JavaScript library...' },
  { id: 2, title: 'Getting Started with Express', content: 'Express is a minimal and flexible Node.js...' },
  // Add more blog posts as needed
];

// Route to get blog posts
app.get('/api/blogs', (req, res) => {
  res.json(blogs);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
