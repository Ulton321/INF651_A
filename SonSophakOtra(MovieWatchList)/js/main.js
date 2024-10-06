
const movieInput = document.getElementById('movie-name');
const categoryInput = document.getElementById('movie-category');
const ratingInput = document.getElementById('movie-rating');
const releaseDateInput = document.getElementById('movie-release');
const addMovieBtn = document.getElementById('add-movie-btn');
const movieList = document.getElementById('movie-list');
const searchInput = document.getElementById('search-movie');
const filterCategory = document.getElementById('filter-category');
const sortBySelect = document.getElementById('sort-by');


let movies = [];


function addMovie() {
  const movieName = movieInput.value.trim();
  const movieCategory = categoryInput.value;
  const movieRating = parseFloat(ratingInput.value.trim());
  const movieReleaseDate = releaseDateInput.value.trim();

  if (movieName === '' || movieCategory === '' || isNaN(movieRating) || movieReleaseDate === '') {
    alert('Please fill in all movie details.');
    return;
  }


  const movie = {
    name: movieName,
    category: movieCategory,
    rating: movieRating,
    releaseDate: movieReleaseDate
  };

 
  movies.push(movie);

  renderMovies();

  // Clear input fields
  movieInput.value = '';
  categoryInput.value = '';
  ratingInput.value = '';
  releaseDateInput.value = '';
}


function removeMovie(index) {
  movies.splice(index, 1);
  renderMovies();
}


function renderMovies() {
  movieList.innerHTML = ''; 

  const filteredMovies = filterMovies();
  const sortedMovies = sortMovies(filteredMovies);

  // Display the movies
  sortedMovies.forEach((movie, index) => {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.innerHTML = `
      <strong>${movie.name}</strong> (${movie.category}) - Rating: ${movie.rating}/10 - Release Date: ${movie.releaseDate}
      <button class="btn-small red right" onclick="removeMovie(${index})">Remove</button>
    `;
    movieList.appendChild(li);
  });
}


function filterMovies() {
  const searchQuery = searchInput.value.toLowerCase();
  const selectedCategory = filterCategory.value;

  return movies.filter(movie => {
    const matchesSearch = movie.name.toLowerCase().includes(searchQuery);
    const matchesCategory = selectedCategory === '' || movie.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
}

function sortMovies(filteredMovies) {
  const sortBy = sortBySelect.value;

  if (sortBy === 'rating') {
    return filteredMovies.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'release-date') {
    return filteredMovies.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
  }

  return filteredMovies; 
}


addMovieBtn.addEventListener('click', addMovie);

searchInput.addEventListener('input', renderMovies);

filterCategory.addEventListener('change', renderMovies);


sortBySelect.addEventListener('change', renderMovies);
