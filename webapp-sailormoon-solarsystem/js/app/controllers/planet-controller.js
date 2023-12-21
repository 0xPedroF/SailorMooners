define(['views/planet-view', 'services/service'], function (
    planetView,
    service
) {
    // public methods and properties
    var externals = {};
    // private methods and properties
    var internals = {};

    // initialize the module
    externals.start = function () {
        internals.bindEventHandlers();
        planetView.render(service.getSailor(),service.getPlanet());
    };

    // bind event handlers for the film planetView
    internals.bindEventHandlers = function () {
        //    planetView.bind('button', internals.buttonHandler);
        planetView.bind('backToMenu',internals.goBackSolarSystem);
    };
     internals.goBackSolarSystem = function(){
         window.location.hash = 'sailorMoonSolarSystem';
         
     }
 

    return externals;
});


