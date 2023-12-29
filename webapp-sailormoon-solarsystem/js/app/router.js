/**
 * Router Module
 */
define(function () {
  var internals = {}; // internal module config and state vars
  var externals = {}; // module external api

  internals.routes = {
    // film route

    sailorMoonSolarSystem: {
      hash: "#sailorMoonSolarSystem",
      controller: "smss-controller",
    },
    mercury: {
      hash: "#sailors/mercury",
      controller: "loading-controller",
    },
    venus: {
      hash: "#sailors/venus",
      controller: "loading-controller",
    },

    moon: {
      hash: "#sailors/moon",
      controller: "loading-controller",
    },
    mars: {
      hash: "#sailors/mars",
      controller: "loading-controller",
    },
    jupiter: {
      hash: "#sailors/jupiter",
      controller: "loading-controller",
    },
    saturn: {
      hash: "#sailors/saturn",
      controller: "loading-controller",
    },
    uranus: {
      hash: "#sailors/uranus",
      controller: "loading-controller",
    },
    neptune: {
      hash: "#sailors/neptune",
      controller: "loading-controller",
    },
  };

  let isAudio = false;

  let audio = new Audio("audio/solarsystem.mp3");
  internals.defaultRoute = "sailorMoonSolarSystem";
  internals.currentHash = ""; // required to track hash changes

  internals.hashCheck = function () {
    if (window.location.hash === internals.currentHash) {
      return;
    }

    var routeName = Object.keys(internals.routes).find(function (name) {
      return window.location.hash === internals.routes[name].hash;
    });

    if (!routeName) {
      routeName = internals.defaultRoute;
      window.location.hash = internals.routes[internals.defaultRoute].hash;
    }

    internals.loadController(internals.routes[routeName].controller);
  };

  internals.loadController = function (controllerName) {
    internals.currentHash = window.location.hash;
    require(["controllers/" + controllerName], function (controller) {
      try {
       
        $("#app").empty();

        controller.start(); if (window.location.hash === "#" + internals.defaultRoute) {
          const tryToPlay = setInterval(() => {
                audio.play()
                    .then(() => {
                        clearInterval(tryToPlay);
                    })
                    .catch(error => {
                        console.info('User has not interacted with document yet.');
                    });
            }, 1000); 
        } else {
          audio.pause();
          audio.currentTime = 0;
          isAudio = false;
        }
      } catch (err) {
        console.log(err.stack);
        window.location.hash = internals.routes[internals.defaultRoute].hash;
      }
    });
  };

  externals.start = function () {
    window.location.hash =
      window.location.hash || internals.routes[internals.defaultRoute].hash;

    setInterval(internals.hashCheck, 150);
  };

  return externals;
});
