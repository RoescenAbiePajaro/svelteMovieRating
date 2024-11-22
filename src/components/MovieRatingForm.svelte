<script>
    export let movie;
    export let onRate;
  
    let rating = '';
  
    const submitRating = () => {
      if (rating) {
        onRate(movie.id, rating);
        rating = '';
      }
    };
  </script>
  
  <div>
    <input
      type="number"
      min="1"
      max="100"
      placeholder="Rate (1-100)"
      bind:value={rating}
    />
    <button on:click={submitRating}>Submit Rating</button>
  </div>
  
  <style>
    input {
      padding: 0.5rem;
      margin-right: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  
    button {
      padding: 0.5rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  </style>
  