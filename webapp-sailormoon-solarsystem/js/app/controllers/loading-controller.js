define(["../views/script"] ,function(view){
    var externals = {};

    externals.start = function(){
        view();
    }

    return externals;
})