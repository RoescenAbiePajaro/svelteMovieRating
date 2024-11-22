<script>
    import { onMount } from 'svelte';
    import { getMovies, postRating } from '../lib/api.js';
    import MovieCard from '../components/MovieCard.svelte';
  
    let movies = [];
  
    onMount(async () => {
      movies = await getMovies();
    });
  
    const handleRating = async (movieId, rating) => {
      const response = await postRating(movieId, rating);
      if (response.success) {
        alert('Rating submitted!');
        movies = movies.map((movie) =>
          movie.id === movieId ? { ...movie, rating } : movie
        );
      }
    };
  </script>
  
  <div class="movie-list">
    {#each movies as movie}
      <MovieCard {movie} onRate={handleRating} />
    {/each}
  </div>
  
  <style>
    .movie-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 2rem;
    }
  </style>
  