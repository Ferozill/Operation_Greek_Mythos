let sound1, sound2, sound3, sound4, sound5, sound6;
let sounds = [];
let minoface1, minoface2, minoface3;

function preload(){
  
  sound1 = loadSound("Bull1.wav");
  sound2 = loadSound("Bull2.wav");
  sound3 = loadSound("Bull3.wav");
  sound4 = loadSound("Bull4.wav");
  sound5 = loadSound("Bull5.wav");
  sound6 = loadSound("Bull6.wav");
  
  sounds = [sound1, sound2, sound3, sound4, sound5, sound6];
  
  minoface1 = loadImage("minoface1.png");
  minoface3 = loadImage("minoface3.png");
  
}

function setup(){
  let canvas = createCanvas(600, 600);
  canvas.parent("game");
  background(255);
  imageMode(CENTER);
  image(minoface1, width/2, height/2, width, height);
  delay = new p5.Delay();
}

function draw(){

}

function keyPressed(){
  if (keyIsDown(32)){ //keyCode(32) = 'Spacebar'
    image(minoface3, width/2, height/2, width, height); // Red flash pt1
    let randomIndex = floor(random(sounds.length));
    let randomSound = sounds[randomIndex];
    randomSound.rate(random(1, 1.25));
    randomSound.play();
  }
}

function keyReleased(){
        image(minoface1, width/2, height/2, width, height); // Red flash pt2
}