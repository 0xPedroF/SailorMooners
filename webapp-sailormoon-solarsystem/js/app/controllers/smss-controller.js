define(['views/smss-view'], function (
    smssView,

) {
    var internals = {};
    var externals = {};
    var orbit1Opacity = 0;

    externals.start = function () {
        internals.bindEventHandlers();
        smssView.render();

    };
    internals.goToPlanet = function (planet) {    


        window.location.hash = planet;
        console.log("PLANET", planet)      
        orbit1Opacity = 0;  
// if I change view(goToPlanet) I have to reset the orbit1 opacity to 0 or else when I came back to the solar system view the opacity is set to 1 and it will change the order.
    }
    internals.bindEventHandlers = function () {
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
        internals.planetNewOrbits = document.querySelectorAll('.mercury1_orbit, .venus1_orbit, .earth1_orbit, .mars1_orbit, .jupiter1_orbit, .saturn1_orbit, .uranus1_orbit, .neptune1_orbit')
        internals.planets.forEach(planet => {
            planet.classList.toggle('paused');
        });
        internals.planetsOrbits.forEach(planetOrbit => {
            planetOrbit.classList.toggle('paused');
        });
        console.log(orbit1Opacity)
        if (orbit1Opacity === 0) {
            internals.planetNewOrbits.forEach(planetNewOrbits => {
                planetNewOrbits.style.opacity = 1;
                orbit1Opacity = 1;
                console.log("orbits1 opacity 1")
                return;
                
            }); 
        }else {  
            internals.planetNewOrbits.forEach(planetNewOrbits => {
                planetNewOrbits.style.opacity = 0;
                console.log("orbits1 opacity 0")
                orbit1Opacity = 0;
            });
        }
    }


        return externals;
    });
