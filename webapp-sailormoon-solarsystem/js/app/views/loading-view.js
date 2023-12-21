define(function(){

    var externals = {};

    externals.start = function(){
        
        function setup() {
        // A Nice Canvas to Draw
        createCanvas(350, 600);
      }
      
      function SpaceBackground() {
        // Space is Dark
        background(0, 0, 0);
        rectMode(CORNER);
        fill(240);
        rect(400, 0, 75, 500);
      
        noStroke();
        fill(255);
        textSize(18);
        text("We are, each of us, a small universe !", 20, 100);
      
        this.linedist = random(20, 40);
        this.x = random(0, 350);
        this.y = random(0, 550);
        this.r = random(1, 3);
      
        for (let i = 0; i < random(100); i++) {
          ellipse(this.x, this.y, this.r);
        }
      }
      
      function SpaceShip() {
        ellipseMode(RADIUS);
        noStroke();
        fill(240);
        fill(255, 255, 255);
        ellipse(175, 428, 30, 12);
        fill(150);
        fill(255);
        triangle(175, 470, 175 + 30, 430, 175 - 30, 430);
        fill(255);
        quad(175 - 10, 465, 175 + 10, 465, 175 + 20, 480, 175 - 20, 480);
        fill(255,0,0);
        // Thruster The Y axis of the third Point is Random to mimic a Thruster
        triangle(175 - 10, 480, 175 + 10, 480, 175, (random(480, 600)));
      }
      
      function draw() {
        background('black');  
        SpaceBackground()
        SpaceShip()
      }

 };
 return externals;
});
