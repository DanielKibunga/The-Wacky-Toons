
fetch("http://localhost:3000/animatedMovies")
  .then(response => response.json())
  .then(displayMovies);

  function displayMovies(movies){
    const container = document.getElementById("movie-recommendation");
    container.innerHTML="";

    movies.forEach(movie=>{
        const img = document.createElement("img");
        img.src= movie.image;
        img.alt =movie.title;

        img.addEventListener("click",()=>showMovieDetails(movie));

        container.appendChild(img);
    })
  }

  function showMovieDetails(movie){
    document.getElementById("animatedMovie-image").src = movie.image;
  document.getElementById("animatedMovie-title").textContent = movie.title;
  document.getElementById("animatedMovie-plot").textContent = movie.plot;
  document.getElementById("animatedMovie-genre").textContent = movie.genre.join(", ");
  document.getElementById("animatedMovie-rating").textContent = movie.rating;
}