define(["../views/script",'./planet-controller'] ,function(view, planetController){
    var externals = {};

    externals.start = function(){
       
        view();
        let audio = new Audio("audio/whoosh.mp3")
        audio.play();
        setTimeout(() => {
            
            $("#canvas").remove();

            const element = `<canvas class="canvas"  id="canvas"></canvas>`
            $(element).appendTo('body');
            
            console.log("LOADING CONTROLLER")
            planetController.start();
        },4000);
    }

    return externals;
})