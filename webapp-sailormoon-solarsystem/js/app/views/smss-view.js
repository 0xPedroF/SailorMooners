define(function () {
    var internals = {
        handlers: {},
        elements: {}
    };

    var externals = {};


    internals.createButton = function () {
        return (

            '<button class="stop-button">STOP PLANETS ROTATION</button>' +
            '</div>')
    }
    internals.createSolarSystem = function () {
        return (
            '<body id="solarSystem"><div class="sun"></div>' +
            '<div class="mercury_orbit">' +
            '<div class="mercury"></div></div>' +
            '<div class="venus_orbit">' +
            '<div class="venus"></div></div>' +
            '<div class="earth_orbit">' +
            '<div class="earth">' +
            '<div class="moon_orbit">' +
            '<div class="moon"></div></div></div></div>' +
            '<div class="mars_orbit">' +
            '<div class="mars"></div></div>' +
            '<div class="jupiter_orbit">' +
            '<div class="jupiter"></div></div>' +
            '<div class="saturn_orbit">' +
            '<div class="saturn">' +
            '<div class="saturn_ring"></div></div></div>' +
            '<div class="uranus_orbit">' +
            '<div class="uranus"></div></div>' +
            '<div class="neptune_orbit">' +
            '<div class="neptune" title="Go to Neptune"></div></div></body>'

        );

    };
    
    internals.renderSolarSystem = function () {
        if (internals.elements.solarSystem) {
            internals.elements.solarSystem.empty();
        }


        internals.elements.solarSystem = $(internals.createSolarSystem());
        //internals.elements.solarSystem.click(internals.handlers['neptune']('neptune'))

        internals.elements.solarSystem.click(function (event) {
           
            const classToHandler = {
                

                'mercury': () => internals.handlers['mercury']('sailors/mercury'),
                'venus': () => internals.handlers['venus']('sailors/venus'),
                'moon': () => internals.handlers['moon']('sailors/moon'),
                'mars': () => internals.handlers['mars']('sailors/mars'),
                'jupiter': () => internals.handlers['jupiter']('sailors/jupiter'),
                'saturn_ring': () => internals.handlers['saturn']('sailors/saturn'),
                'uranus': () => internals.handlers['uranus']('sailors/uranus'),
                'neptune': () => internals.handlers['neptune']('sailors/neptune'),
                
            
            };

            const clickedClass = Array.from(event.target.classList).find(className => classToHandler.hasOwnProperty(className));

            if (clickedClass) {
                console.log('Clicked class:', clickedClass);
                classToHandler[clickedClass]();
            } else {
                console.log('Class not mapped:', event.target.classList);
                // Handle the case where the class is not mapped
                
            }
        });
        internals.elements.app.append(internals.elements.solarSystem);

        

    };

    internals.renderButton = function () {
        if (internals.elements.button) {
            internals.elements.button.empty();
            return;
        }
        internals.elements.button = $(internals.createButton())
        internals.elements.button.click(internals.handlers['stop-button']);
       
       
        internals.elements.app.append(internals.elements.button);
        
    };
 

    externals.bind = function (event, handler) {
        console.log(event, "HNDLER", handler)
        internals.handlers[event] = handler;
        console.log("[HANDLERS IN BINDING]:", internals.handlers)
    };

    externals.render = function () {
       
            internals.elements.app = $('#app');
            internals.renderButton();
            internals.renderSolarSystem();
            
    };
    return externals;
});