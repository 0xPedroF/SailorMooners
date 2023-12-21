define(["../views/script",'./planet-controller'] ,function(view, planetController){
    var externals = {};

    externals.start = function(){
       
        view();
        setTimeout(() => {
            
            $("#canvas").remove();

            const element = `<canvas class="canvas"  id="canvas"></canvas>`
            $(element).appendTo('body');
            
            console.log("LOADING CONTROLLER")
            planetController.start();
        },2000);
    }

    return externals;
})