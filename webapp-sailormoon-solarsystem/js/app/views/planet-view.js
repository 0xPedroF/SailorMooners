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
          <p class="text"><Strong>Type: </Strong>${internals.data.planet.type}</p>
          <p class="text"><Strong>Gravity</Strong>: ${internals.data.planet.gravity}</p>
          <p class="text"><Strong>Average surface temperature: </Strong>${internals.data.planet.temperature}</p>
          <p class="text"><Strong>Diameter: </Strong>${internals.data.planet.Diameter}</p>
          <p class="text"><Strong>Satellites: </Strong>${internals.data.planet.satellites}</p>
          <p class="text"><Strong>Distance to the Sun: </Strong>${internals.data.planet.sunDistance}</p>
          <p class="text"><Strong>Light travel time: </Strong>${internals.data.planet.oneWayLightToTheSun}</p>

          </div>
          <div class="flip-card-back">
            <h1>${internals.data.sailors.scoutName}</h1> 
            <p class="text"><Strong>Name: </Strong>${internals.data.sailors.englishName}/${internals.data.sailors.japaneseName}</p>
            <p class="text"><Strong>Description : </Strong>${internals.data.sailors.description}</p>
            <p class="text"><Strong>Birthday : </Strong>${internals.data.sailors.birthday}</p>
            <p class="text"><Strong>Transformation phrase : </Strong>${internals.data.sailors.transformation_phrase}</p>
            <p class="text"><Strong>Powers : </Strong>${internals.data.sailors.powers}</p>
            <p class="text"><Strong>Likes : </Strong>${internals.data.sailors.likes}</p>
            <p class="text"><Strong>Dislikes : </Strong>${internals.data.sailors.dislikes}</p>
          </div>
        </div>
      </div>`;
    return card;
  };

  internals.createButton = function () {
    const backToMenu = `<div class="backToMenu"><button id="backToMenu">I WANT ANOTHER SAILOR!!</button></div>`;
    return backToMenu;
  };

  internals.createPlanetDiv = function () {
    const planetDiv = `${internals.data.planet.div}`;
    return planetDiv;
  };

  internals.createSailor = function () {
    const sailor = `<img id="sailor" src="${internals.data.sailors.url}">`;
    return sailor;
  };

  internals.createMainDiv = function () {
    const card = internals.createCard();
    const planetDiv = internals.createPlanetDiv();
    const sailor = internals.createSailor();

    const mainDiv = `<div id="mainDiv">${planetDiv}${sailor}${card}</div>`;
    return mainDiv;
  };

  internals.renderMainDiv = function () {
    internals.elements.mainDiv = $("#mainDiv");
    internals.elements.mainDiv = $(internals.createMainDiv());
    internals.elements.app.append(internals.elements.mainDiv);
    console.log("Main div Rendered");
  };
  externals.bind = function (event, handler) {
    internals.handlers[event] = handler;
  };

  internals.renderButton = function () {
    internals.elements.button = $(internals.createButton());
    internals.elements.button.click(() => {
        internals.handlers["backToMenu"]();
        internals.data.audio.pause();
    })
    internals.elements.app.append(internals.elements.button);
    console.log("Button is rendered");
  };

  externals.render = function (sailor, planet) {
    internals.data.sailors = sailor;
    internals.data.audio = new Audio(sailor.audio)
    console.log(sailor, planet);
    internals.data.planet = planet;
    internals.elements.app = $("#app");
    internals.renderButton();
    internals.renderMainDiv();
    setTimeout(() => {
      internals.data.audio.play();
    }, 1000);
  };

  return externals;
});
