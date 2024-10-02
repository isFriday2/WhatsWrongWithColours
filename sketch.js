var toggle = true;
function preload(){
  bg = loadImage('/assets/illustration.PNG');
  textOverlay1 = loadImage('/assets/textOverlay-01.PNG')
  textOverlay2 = loadImage('/assets/textOverlay-02.PNG')
 
}

function setup() {
  createCanvas(screeenWidth, screenHeight);
}

function draw() {
  background("#fff");
  image(bg, 0, 0, screenWidth, screenHeight/2.86);
  
  if(toggle){
    image(textOverlay1, 0, 0, screenWidth, screenHeight/2.86);
  }else image(textOverlay2, 0, 0, screenWidth, screenHeight/2.86);
  
  
}
function keyPressed(e){
  console.log(mouseX, mouseY)
  toggle = (!toggle)
}