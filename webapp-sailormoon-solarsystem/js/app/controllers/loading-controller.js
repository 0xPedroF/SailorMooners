define(["../views/script",'./planet-controller'] ,function(view, planetController){
    var externals = {};

    externals.start = function(){
       
        view();
        setTimeout(() => {
            
            const canvas = document.getElementById("canvas")
            const context = canvas.getContext('2d');
            context.setTransform(0, 0, 0, 0, 0, 0);
            context.clearRect(0, 0, canvas.width, canvas.height);
   
            context.beginPath()
           
            canvas.style.display="none";
            
            console.log("LOADING CONTROLLER")
            planetController.start();
        },2000);
    }

    return externals;
})