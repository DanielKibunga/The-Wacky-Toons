
fetch("http://localhost:3000/animated movies")
  .then(response => response.json())
  .then(displayMovies);

  function displayMovies(movies){
    const container = document.getElementById("movie-recommendation");
    container.innerHTML="";

    movies.forEach(movie=>{
        const img = document.createElement("img");
        img.src= movie.img;
        img.alt =movie.title;

        img.addEventListener("click",()=>showMovieDetails(movie));

        container.appendChild(img);
    })
  }

  function showMovieDetails(movie){
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
  
    
    fetch("http://localhost:3000/animatedMovies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMovie)
    })
    .then(response => response.json())
    .then(movie => {
      document.getElementById("animatedMovie-for").reset(); 
      return fetch("http://localhost:3000/animatedMovies"); 
    })
    .then(response => response.json())
    .then(displayMovies);
  });
  