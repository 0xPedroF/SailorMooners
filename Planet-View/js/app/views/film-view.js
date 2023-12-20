define(function() {
    var internals = {
        handlers: {},
        elements: {}
    };

    var externals = {};

    internals.createButton = function() {
        return '<button class="random-film">Click Me for a Random Film</button>';
    };

    internals.createFilmCard = function(film) {
        return (
            '<div>' +
            '<p><strong>Title: </strong>' +
            film.name +
            '</p>' +
            '<p><strong>Year: </strong>' +
            film.year +
            '</p>' +
            '<p><strong>Director: </strong>' +
            film.director +
            '</p>' +
            '<p><strong>IMDB rating: </strong>' +
            film.imdbRating +
            '</p>' +
            '</div>'
        );
    };

    
    internals.renderFilm = function(film) {
        if (internals.elements.filmCard) {
            internals.elements.filmCard.empty();
        }

        internals.elements.filmCard = $(internals.createFilmCard(film));
        internals.elements.app.append(internals.elements.filmCard);
    };

    internals.renderButton = function() {
        if (internals.elements.button) {
            return;
        }

        internals.elements.button = $(internals.createButton());
        internals.elements.button.click(internals.handlers['button']);
        internals.elements.app.append(internals.elements.button);
    };

    externals.bind = function(event, handler) {
        internals.handlers[event] = handler;
    };

    externals.render = function(film) {
        internals.elements.app = $('#app');
        internals.renderButton();

        if (film) {
            internals.renderFilm(film);
        }
    };

    return externals;
});
