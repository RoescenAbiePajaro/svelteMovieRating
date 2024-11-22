<script>
    import RatingStars from './+RatingStars.svelte';
    import { fetchRatings } from '../stores/api.js';
  
    let movies = [
      { id: 1, title: 'Transformer One', image: 'https://via.placeholder.com/300x150?text=Inception' },
      { id: 2, title: 'John Wick', image: 'https://via.placeholder.com/300x150?text=The+Dark+Knight' },
      { id: 3, title: 'Nobody', image: 'https://via.placeholder.com/300x150?text=Interstellar' },
      { id: 4, title: 'The Matrix', image: 'https://via.placeholder.com/300x150?text=The+Matrix' },
      { id: 5, title: 'Joker', image: 'https://via.placeholder.com/300x150?text=Pulp+Fiction' },
    ];
  
    let ratings = {};
  
    // Fetch initial ratings
    const loadRatings = async () => {
      ratings = await fetchRatings();
    };
  
    loadRatings();
  </script>
  
  <div>
    {#each movies as movie}
      <div class="movie">
        <img src={movie.image} alt="{movie.title}" class="movie-image" />
        <h2>{movie.title}</h2>
        <RatingStars movieId={movie.id} currentRating={ratings[movie.id] || 0} />
        <p>Average Rating: {ratings[movie.id] || 'No rating yet'}</p>
      </div>
    {/each}
  </div>
  
  <style>
    .movie {
      margin: 1rem 0;
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      text-align: center;
    }
  
    .movie-image {
      width: 100%;
      max-width: 300px;
      height: auto;
      border-radius: 5px;
      margin-bottom: 0.5rem;
    }
  </style>
  