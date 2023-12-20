define(() => {

    var internals = {};
    var externals = {};


    internals.routes = {

        list: {

            hash: "#list",
            controller: "film-controller"
        },

        details: {

            hash: "#details",
            controller: "planet-controller"
        }

    };

    internals.deafultRoute = "details";

    //quando estiver a declarar o loadcontroller crio a propriedade currenthash
    internals.currentHash = "";


    function loadController(controllerName) {

        internals.currentHash = window.location.hash;

        require(['controllers/' + controllerName], function (controller) {


            try {

                controller.start();

            } catch (err) {

                console.log(err.stack);

                loadDeafultRoute();
            }


        })
    }

    function loadDeafultRoute() {

        window.location.hash = internals.routes[internals.deafultRoute].hash;
        loadController(internals.routes[internals.deafultRoute].controller)

    }



    function hashCheck() {


        if (window.location.hash === internals.currentHash) {
            return;
        }

        var routeName = Object.keys(internals.routes).find(function (name) {
            return window.location.hash === internals.routes[name].hash;
        });

        if (!routeName) {

            loadDeafultRoute();
            return;
        }

        loadController(internals.routes[routeName].controller);

    }



    externals.start = function () {


       // window.location.hash = window.location.hash || internals.routes[internals.deafultRoute].hash
        
        if(!window.location.hash)
           window.location.hash = internals.routes[internals.deafultRoute].hash;
        //}

        setInterval(hashCheck, 100);
    }

    return externals;

});