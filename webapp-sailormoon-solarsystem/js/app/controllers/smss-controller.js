define(['views/smss-view','services/smss-service'], function(
    smssView,
    smssService
) {
    var internals = {};
    var externals = {};



    externals.start = function(){
        internals.bindEventHandlers();
        smssView.render();
        
    };
    internals.goToPlanet = function(planet){
        window.location.hash = planet;
        console.log("PLANET",planet)
    }
   internals.bindEventHandlers = function(){
       console.log("binding events")
        smssView.bind('stop-button', internals.stopAnimation);
        
        smssView.bind('mercury', internals.goToPlanet); 
        smssView.bind('venus', internals.goToPlanet);
        smssView.bind('moon', internals.goToPlanet);
        smssView.bind('mars', internals.goToPlanet);
        smssView.bind('jupiter', internals.goToPlanet);
        smssView.bind('saturn', internals.goToPlanet);
        smssView.bind('uranus', internals.goToPlanet);
        smssView.bind('neptune', internals.goToPlanet);

        
        
     
    };

    // Function to pause or resume the animation
    internals.stopAnimation = function () {
       

    console.log("stopanimation");
    internals.planets = document.querySelectorAll('.mercury, .venus, .earth, .moon, .mars, .jupiter, .saturn, .uranus, .neptune');
    internals.planetsOrbits = document.querySelectorAll('.mercury_orbit, .venus_orbit, .earth_orbit, .mars_orbit, .jupiter_orbit, .saturn_orbit, .uranus_orbit, .neptune_orbit')
    internals.planets.forEach(planet => {
    planet.classList.toggle('paused');
  });
   internals.planetsOrbits.forEach(planetOrbit => {
       planetOrbit.classList.toggle('paused');
        
    });
    
}
   

    return externals;
});
