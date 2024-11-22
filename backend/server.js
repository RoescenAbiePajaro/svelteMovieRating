const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample Data
let movies = [
  { id: 1, title: 'Inception', image: '/images/inception.jpg', rating: 85 },
  { id: 2, title: 'Interstellar', image: '/images/interstellar.jpg', rating: 90 },
  { id: 3, title: 'The Dark Knight', image: '/images/dark-knight.jpg', rating: 95 },
];

// Serve Static Images
app.use('/images', express.static('public/images'));

// GET Movies
app.get('/movies', (req, res) => {
  res.json(movies);
});

// POST Rating
app.post('/rate', (req, res) => {
  const { id, rating } = req.body;
  const movie = movies.find((m) => m.id === id);
  if (movie) {
    movie.rating = rating;
    res.status(200).json({ success: true, message: 'Rating updated', movie });
  } else {
    res.status(404).json({ success: false, message: 'Movie not found' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
