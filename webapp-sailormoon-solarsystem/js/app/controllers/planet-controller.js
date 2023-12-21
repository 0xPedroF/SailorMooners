define(['views/planet-view', 'services/service','views/script'], function (
    planetView,
    service,
    loading
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
        loading();
        $("#sailor").remove();
        $("#mainDiv").remove();
        let audio = new Audio("audio/whoosh.mp3")
        audio.play();
        setTimeout(() => {
            
            $("#canvas").remove();
            

            const element = `<canvas class="canvas"  id="canvas"></canvas>`
            $(element).appendTo('body');
            
            console.log("LOADING CONTROLLER")
            window.location.hash = 'sailorMoonSolarSystem';
        },4000);
         
     }
 

    return externals;
});


