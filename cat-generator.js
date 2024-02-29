let cats = [];
let hats = [];
let sounds = [];
let bgImage;
let themeAudio; 

function preload() {
  bgImage = loadImage("background.png");
  themeAudio = loadSound("NekoThemeSong.mp3");
  for(let i = 1; i <= 14; i++) {
     cats[i] = loadImage('cat/cat' + i + '.png', 250, 500);
  }
  for(let j = 1; j <= 14; j++) {
    hats[j] = loadImage('hat/hat' + j + '.png', 250, 500);
  }
  for(let k = 1; k <= 7; k++) {
    sounds[k] = loadSound('sounds/sound' + k + '.mp3');
  }
}
function setup() {
  createCanvas(1000, 1000);
  background(bgImage);
  themeAudio.play();
}

function generateRandomCat() {
  background(bgImage);
  catImage = random(cats);
  image(catImage, 250,500);
}

function generateRandomHat() {
  hatImage = random(hats);
  image(hatImage, 250, 500);
}

function mousePressed() {
   generateRandomCat();
   generateRandomSound(); 
}

function generateRandomSound() {
  catSound = random(sounds);
  catSound.play();
}

function keyPressed() {
  if(keyCode === ENTER) {
    generateRandomSound();
    generateRandomCat();
    generateRandomHat();
  }
}
