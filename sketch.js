var toggle = true;
function preload(){
  bg = loadImage('/assets/illustration.PNG');
  textOverlay1 = loadImage('/assets/textOverlay-01.PNG')
  textOverlay2 = loadImage('/assets/textOverlay-02.PNG')
 
}

function setup() {
  createCanvas(5906, 2067);
}

function draw() {
  background("#fff");
  image(bg, windowWidth/2, windowHeight/2);
  
  if(toggle){
    image(textOverlay1, windowWidth/2, windowHeight/2);
  }else image(textOverlay2, windowWidth/2, windowHeight/2);
  
  
}
function keyPressed(e){
  console.log(mouseX, mouseY)
  toggle = (!toggle)
}