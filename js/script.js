
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