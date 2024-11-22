const API_URL = 'http://localhost:5000';

export const getMovies = async () => {
  const response = await fetch(`${API_URL}/movies`);
  return await response.json();
};

export const postRating = async (movieId, rating) => {
  const response = await fetch(`${API_URL}/rate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: movieId, rating }),
  });
  return await response.json();
};
