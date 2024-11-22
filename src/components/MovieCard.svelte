<script>
    import MovieRatingForm from './MovieRatingForm.svelte';
  
    export let movie;
    export let onRate;
  </script>
  
  <div class="movie-card">
    <img src={`http://localhost:5000${movie.image}`} alt={movie.title} />
    <h3>{movie.title}</h3>
    <p>Current Rating: {movie.rating}%</p>
  
    <MovieRatingForm {movie} {onRate} />
  </div>
  
  <style>
    .movie-card {
      border: 1px solid #ccc;
      padding: 1rem;
      border-radius: 8px;
      margin: 1rem;
      text-align: center;
    }
  
    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }
  </style>
  