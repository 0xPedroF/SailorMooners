define(function () {
    var internals = {
        handlers: {},
        elements: {},
    };

    var externals = {};

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
        //const backToMenu = internals.createButton();
        const planetDiv = internals.createPlanetDiv();
        const sailor = internals.createSailor();
          

        const mainDiv = `<div id="mainDiv">${planetDiv}${sailor}</div>`
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

    externals.render = function () {
        internals.elements.app = $('body');
        internals.renderButton();
        internals.renderMainDiv();
    };

    return externals;
});
