const API_URL = "https://the-wacky-toons-server.vercel.app/animatedMovies";

fetch(API_URL)
  .then(response => response.json())
  .then(displayMovies);

function displayMovies(movies) {
  const container = document.getElementById("movie-recommendation");
  container.innerHTML = "";

  movies.forEach(movie => {
    const movieContainer = document.createElement("div");

    const img = document.createElement("img");
    img.src = movie.img;
    img.alt = movie.title;
    img.addEventListener("click", () => showMovieDetails(movie));

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.addEventListener("click", () => deleteMovie(movie.id));

    movieContainer.appendChild(img);
    movieContainer.appendChild(deleteBtn);
    container.appendChild(movieContainer);
  });
}

function showMovieDetails(movie) {
  document.getElementById("animatedMovie-image").src = movie.img;
  document.getElementById("animatedMovie-title").textContent = movie.title;
  document.getElementById("animatedMovie-plot").textContent = movie.plot;
  document.getElementById("animatedMovie-genre").textContent = movie.genre.join(", ");
  document.getElementById("animatedMovie-rating").textContent = movie.rating;
}

document.getElementById("animatedMovie-form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const newMovie = {
    title: document.getElementById("title").value,
    plot: document.getElementById("plot").value,
    image: document.getElementById("image").value,
    rating: parseFloat(document.getElementById("rating").value), 
    genre: document.getElementById("genre").value.split(", ") 
  };

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newMovie)
  })
  .then(response => response.json())
  .then(() => {
    document.getElementById("animatedMovie-form").reset(); 
    return fetch(API_URL);
  })
  .then(response => response.json())
  .then(displayMovies);
});

function deleteMovie(id) {
  fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  })
  .then(() => fetch(API_URL))
  .then(response => response.json())
  .then(displayMovies);
}
