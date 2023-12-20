define(['views/planet-view'], function (
    planetView,
) {
    // public methods and properties
    var externals = {};
    // private methods and properties
    var internals = {};

    // initialize the module
    externals.start = function () {
        internals.bindEventHandlers();
        planetView.render();
    };

    // bind event handlers for the film planetView
    internals.bindEventHandlers = function () {
        //planetView.bind('button', internals.buttonHandler);
    };

    // handle button click events
    // internals.buttonHandler = function () {
    //     planetService.getCharacters(1, function() { console.log('Hey')});
    //     console.log("Characters gotten - buttonHandler() works");
    // };

    internals.buttonHandler = function () {
        planetView.render();
    };

    return externals;
});


