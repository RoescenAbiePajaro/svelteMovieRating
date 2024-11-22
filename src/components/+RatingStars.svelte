<script>
// @ts-nocheck
    import { submitRating } from '..api.js';
  
    export let movieId;
    export let currentRating = 0;
    
    const setRating = async (rating) => {
      await submitRating(movieId, rating);
      currentRating = rating;
    };
  </script>
  
  <div class="stars">
    {#each Array(5).fill(0).map((_, i) => i + 1) as star}
      <span
        class="{star <= currentRating ? 'active' : ''}"
        on:click={() => setRating(star)}
      >
        ★
      </span>
    {/each}
  </div>
  
  <style>
    .stars span {
      cursor: pointer;
      font-size: 2rem;
      color: #ddd;
      margin: 0 0.1rem;
    }
  
    .stars span.active {
      color: gold;
    }
  </style>

