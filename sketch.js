var bgImg;

var cat,cat1,cat2,cat3;

var mouse,m1,m2,m3;

var cat;
function preload() {
    //load the images here
 bgImg = loadImage("images/garden.png");

 cat1 = loadAnimation("images/cat1.png");
 cat2 = loadAnimation("images/cat2.png","images/cat3.png");
 cat3 = loadAnimation("images/cat4.png");

 m1 = loadAnimation("images/mouse1.png");
 m2 = loadAnimation("images/mouse2.png","images/mouse3.png");
 m3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here



    mouse = createSprite(200,600);
    mouse.addAnimation("mouse",m1);
    mouse.scale = 0.1;

    cat = createSprite(870,600);
    cat.addAnimation("cat",cat1);
    cat.scale = 0.15;


}

function draw() {
    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
        cat.addAnimation("catSitting",cat3);
        cat.changeAnimation("catSitting");
        cat.velocityX = 0;
        
        mouse.addAnimation("mouseSearching",m3);
        mouse.changeAnimation("mouseSearching");
    }

    
    drawSprites();
}

function keyPressed(){
  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW) {
      mouse.addAnimation("mouseTeasing",m2);
      mouse.frameDelay = 25;
      mouse.changeAnimation("mouseTeasing");  
      cat.velocityX = -5;
      cat.addAnimation("catRunning",cat2);
      cat.changeAnimation("catRunning") 
  }
}

