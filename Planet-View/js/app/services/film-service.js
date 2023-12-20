define(function() {
    var internals = {}; // internal state
    var externals = {}; // external api

    internals.films = [
        { title: 'Star Wars', year: 1977, director: 'George Lucas', imdbRating: 8.6 },
        { title: 'The Godfather', year: 1972, director: 'Francis Ford Coppola', imdbRating: 9.2 },
        { title: 'My Neighbour Totoro', year: 1988, director: 'Hayao Miyazaki', imdbRating: 8.2 },
        { title: 'Back to the Future', year: 1985, director: 'Robert Zemeckis', imdbRating: 8.5 },
        { title: 'The Room', year: 2003, director: 'Tommy Wiseau', imdbRating: 3.7 },
        {
            title: 'Das Cabinet des Dr. Caligari',
            year: 1920,
            director: 'Robert Wiene',
            imdbRating: 8.1
        }

    ];

var data;

var people = "people/" + Math.ceil(Math.random()*83);
    var data;
    async function fetchPlanets() { 
        const results = await fetch("https://www.swapi.tech/api/" + people);
        data = await results.json();
          console.log(data.result);
          console.log("test")
      } 
      fetchPlanets();


console.log(internals.films);
    externals.getFilm = function(cb) {

        console.log(data)
        cb(data.result.properties);
    };

    return externals;
});
