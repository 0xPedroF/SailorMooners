define(function () {
    var internals = {
        handlers: {},
        elements: {},
        data: {},
    };

    var externals = {};

    internals.createCard = function () {
        const card = `<div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
          <h1>${internals.data.planet.name}</h1>
          <p class="text">Type: ${internals.data.planet.type}</p>
          <p class="text">Gravity: ${internals.data.planet.gravity}</p>
          <p class="text">Average surface temperature: ${internals.data.planet.temperature}</p>
          <p class="text">Diameter: ${internals.data.planet.Diameter}</p>
          <p class="text">Satellites: ${internals.data.planet.satellites} Names: ${internals.data.planet.satellites[0]}, ${internals.data.planet.satellites[1]}</p>
          <p class="text">Distance to the Sun: ${internals.data.planet.sunDistance}</p>
          <p class="text">Light travel time: ${internals.data.planet.oneWayLightToTheSun}</p>
          </div>
          <div class="flip-card-back">
            <h1>${internals.data.sailors.scoutName}</h1> 
            <p class="text">Name: ${internals.data.sailors.englishName}/${internals.data.sailors.japaneseName}</p>
            <p class="text">Description : ${internals.data.sailors.description}</p>
            <p class="text">Birthday : ${internals.data.sailors.birthday}</p>
            <p class="text">Transformation phrase : ${internals.data.sailors.transformation_phrase}</p>
            <p class="text">Powers : ${internals.data.sailors.powers}</p>
            <p class="text">Likes : ${internals.data.sailors.likes}</p>
            <p class="text">Dislikes : ${internals.data.sailors.dislikes}</p>
          </div>
        </div>
      </div>`;
        return card;
    };

    internals.createButton = function () {
        const backToMenu = `<div class="backToMenu"><button id="backToMenu">Solar System</button></div>`;
        return backToMenu;
    };

    internals.createPlanetDiv = function () {
        const planetDiv = `${internals.data.planet.div}`
        return planetDiv
    }

    internals.createSailor = function () {
        const sailor = `<img id="sailor" src="${internals.data.sailors.url}">`
        return sailor;
    }

    internals.createMainDiv = function () {
        const card = internals.createCard();
        const planetDiv = internals.createPlanetDiv();
        const sailor = internals.createSailor();


        const mainDiv = `<div id="mainDiv">${planetDiv}${sailor}${card}</div>`
        return mainDiv;
    }

    internals.renderMainDiv = function () {
       

        internals.elements.mainDiv = $('#mainDiv')
        internals.elements.mainDiv = $(internals.createMainDiv());
        internals.elements.app.append(internals.elements.mainDiv);
        console.log("Main div Rendered");
    }
    externals.bind = function(event,handler){
        internals.handlers[event] = handler;
    }

    internals.renderButton = function () {
       

        internals.elements.button = $(internals.createButton());
        internals.elements.button.click(internals.handlers['backToMenu'])
        internals.elements.app.append(internals.elements.button);
        console.log("Button is rendered");
    }

    externals.render = function (sailor, planet) {

        internals.data.sailors = sailor;
        console.log(sailor,planet);
        internals.data.planet = planet;
        internals.elements.app = $('#app');
        internals.renderButton();
        internals.renderMainDiv();
    };

    return externals;
});
