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
          <p>Planet: ${internals.data.planet.name}</p>
          <p>Type: ${internals.data.planet.type}</p>
          <p>Gravity: ${internals.data.planet.gravity}</p>
          <p>Average surface temperature: ${internals.data.planet.temperature}</p>
          <p>Diameter: ${internals.data.planet.Diameter}</p>
          <p>Satellites: ${internals.data.planet.satellites} Names: ${internals.data.planet.satellites[0]}, ${internals.data.planet.satellites[1]}</p>
          <p>Distance to the Sun: ${internals.data.planet.sunDistance}</p>
          <p>Light travel time: ${internals.data.planet.oneWayLightToTheSun}</p>
          </div>
          <div class="flip-card-back">
            <h1>${internals.data.sailors.scoutName}</h1> 
            <p>Name: ${internals.data.sailors.englishName}/${internals.data.sailors.japaneseName}</p>
            <p>Description : ${internals.data.sailors.description}</p>
            <p>Birthday : ${internals.data.sailors.birthday}</p>
            <p>Transformation phrase : ${internals.data.sailors.transformation_phrase}</p>
            <p>Powers : ${internals.data.sailors.powers}</p>
            <p>Likes : ${internals.data.sailors.likes}</p>
            <p>Dislikes : ${internals.data.sailors.dislikes}</p>
          </div>
        </div>
      </div>`;
        return card;
    };

    internals.createButton = function () {
        const backToMenu = `<div class="backToMenu"><button id="backToMenu">Solar System</button></div>`;
        return backToMenu;
    };

    internals.createPlanetDiv = function() {
        const planetDiv = `<div class="planet"><div class="moon"></div></div>`
        return planetDiv
    }

    internals.createSailor = function() {
        const sailor = `<div class="sailor"><img id="sailor" src="img/sailor.png"></div>`
        return sailor;
    }

    internals.createMainDiv = function() {
        const card = internals.createCard();
        const planetDiv = internals.createPlanetDiv();
        const sailor = internals.createSailor();
          

        const mainDiv = `<div id="mainDiv">${planetDiv}${sailor}${card}</div>`
        return mainDiv;
    }

    internals.renderMainDiv = function() {
        if(internals.elements.mainDiv) {
            return;
        }

        internals.elements.mainDiv = $('#mainDiv')
        internals.elements.mainDiv = $(internals.createMainDiv());
        internals.elements.app.append(internals.elements.mainDiv);
        console.log("Main div Rendered");
    }

    internals.renderButton = function() {
        if(internals.elements.button) {
            return;
        }

        internals.elements.button = $(internals.createButton());
        internals.elements.app.append(internals.elements.button);
        console.log("Button is rendered");
    }

    externals.render = function (sailor, planet) {

        internals.data.sailors = sailor;
        internals.data.planet = planet;
        internals.elements.app = $('body');
        internals.renderButton();
        internals.renderMainDiv();
    };

    return externals;
});
