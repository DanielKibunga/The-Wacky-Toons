let animatedMovies = [  {
    
    id : 1,
    title: "Son of Batman",
    year: 2014,
    genre: ["Animation", "Action", "Adventure"],
    plot: "Batman discovers his son, raised by the League of Assassins, and must protect him from Deathstroke.",
    rating: 7.0,
    image:"images/56f51b47-e547-481e-a7e7-7a45edb3df6e.jpeg"
},
{
    id : 2,
    title : "Batman Hush",
    year: 2019,
    genre: ["Animation", "Action", "Mystery"],
    plot: "Batman faces a new villain, Hush, who manipulates Gotham's underworld while targeting him personally.",
    rating: 6.9,
    image:"images/5d500398-54ab-483c-8991-968658ab6fb9.jpeg"
},
{
    id: 3,
    title: "Young Justice",
    year: 2010,
    genre: ["Animation", "Action", "Adventure"],
    plot: "A team of young superheroes, mentored by the Justice League, navigate missions and personal challenges while proving themselves as heroes.",
    rating: 8.6,
    image:"images/4aaed223-12d4-4768-8b0b-7defbfe962f7.jpeg"
},

{
    id: 4,
    title: "Batman: Soul of the Dragon",
    year: 2021,
    genre: ["Animation", "Action", "Martial Arts"],
    plot: "Batman joins forces with his former martial arts classmates to battle a deadly menace from their past.",
    rating: 6.1,
    image:"images/f1fd04ae-0f01-4ac0-8965-44a8788b4eed.jpeg"
},

{
    id: 5,
    title: "Big Hero 6",
    plot: "A young robotics prodigy, Hiro Hamada, teams up with his inflatable healthcare companion, Baymax, and friends to stop a mysterious villain in San Fransokyo.",
    year: 2014,
    genre: ["Animation", "Action", "Adventure"],
    rating: "PG",
    image: "images/4aaed223-12d4-4768-8b0b-7defbfe962f7.jpeg"
},

{
    id: 6,
    title: "Wish",
    plot: "A young girl named Asha makes a heartfelt wish upon a star, only to have it answered in an unexpected way that changes her world forever.",
    year: 2023,
    genre: ["Animation", "Fantasy", "Adventure"],
    rating: "PG",
    image:"images/d67f2f97-0b82-4299-adb5-f3beecbad617.jpeg"
},

{
    id: 7,
    title: "Ratatouille",
    plot: "A rat named Remy dreams of becoming a great chef and tries to achieve his goal by forming an unlikely alliance with a young kitchen worker in a famous Paris restaurant.",
    year: 2007,
    genre: ["Animation", "Comedy", "Family"],
    rating: "G",
    image:"images/Mira todas las pelis que habrá en Warner Channel en mayo.jpeg"

},

{
    id: 8,
    title: "Kung Fu Panda 2",
    plot: "Po and the Furious Five set out to defeat a new enemy, Lord Shen, who has a powerful weapon that threatens to conquer China and destroy kung fu.",
    year: 2011,
    genre: ["Animation", "Action", "Adventure"],
    rating: "PG",
   image:"images/Kung fu panda 2.jpeg"
},

{
    id: 9,
    title: "Demon Slayer: Mugen Train",
    plot: "Tanjiro and his friends join the Flame Hashira, Kyojuro Rengoku, to investigate a series of disappearances aboard the Mugen Train, only to face a powerful demon threat.",
    year: 2020,
    genre: ["Animation", "Action", "Fantasy"],
    rating: "R",
    image:"images/劇場版「鬼滅の刃」「2020_HD」完全版.jpeg"


},

{
    id: 10,
    title: "Batman Ninja",
    plot: "Batman and his allies are transported to feudal Japan, where they must battle the Joker and other villains who have become feudal lords.",
    year: 2018,
    genre: ["Animation", "Action", "Adventure"],
    rating: "PG-13",
    image:"images/Batman v Superman_ _Dawn Of Justice.jpeg"

}
]

function displayAnimatedMovies(){
    menubar.innerHTML ="";
    animatedMovies.forEach((animatedMovie) => {
        let img = document.createElement("img");
        img.src = animatedMovie.image;
        img.alt = animatedMovie.title;
        img.addEventListener("click",()=> handleclick(animatedMovie));
        menu.appendChild(img);
    });
}

function handleclick(animatedMovie) {
    document.get
}



