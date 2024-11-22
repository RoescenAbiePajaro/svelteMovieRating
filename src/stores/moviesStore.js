// src/stores/moviesStore.js
import { writable } from 'svelte/store';

export const movies = writable([
    { id: 1, title: 'Transformer One', image: '/assets/images/movie1.jpg', rating: 0, votes: 0 },
    { id: 2, title: 'John Wick', image: '/assets/images/movie2.jpg', rating: 0, votes: 0 },
    { id: 3, title: 'Joker', image: '/assets/images/movie3.jpg', rating: 0, votes: 0 }
]);
