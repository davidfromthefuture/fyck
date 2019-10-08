let img;

function preload(){
 
  img= loadImage('polly.jpg');
  
}


function setup() {
  createCanvas(535, 800,WEBGL);
  let img = createImage(100, 100);  }

function draw() {
 // background(251,255,23);
 

  noStroke();
  
  texture(img); 
  
  plane(535,800);
  
  
  
 
}