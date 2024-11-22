export const API_URL = 'http://localhost:5000/api/ratings'; // Replace with your API URL

export const fetchRatings = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch ratings');
    return await response.json();
  } catch (error) {
    console.error(error);
    return {};
  }
};

export const submitRating = async (movieId, rating) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ movieId, rating }),
    });
    if (!response.ok) throw new Error('Failed to submit rating');
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
