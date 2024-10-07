var toggle = true;

var lightOverlays = [];
var imageToDisplay = 0;

let lastChangeTime = 0;
const changeInterval = 5000;

function preload(){
  bg = loadImage('/assets/illustration.PNG');
  textOverlay1 = loadImage('/assets/textOverlay-01.PNG')
  textOverlay2 = loadImage('/assets/textOverlay-02.PNG')

  // overlays
  lightOverlays.push(loadImage("assets/overlay/alexa-dark.png"))
  lightOverlays.push(loadImage("assets/overlay/abu-dark.png"))
  lightOverlays.push(loadImage("assets/overlay/frank-dark.png"))
  lightOverlays.push(loadImage("assets/overlay/larena-dark.png"))
  lightOverlays.push(loadImage("assets/overlay/moo-dark.png"))
  lightOverlays.push(loadImage("assets/overlay/reya-dark.png"))
  lightOverlays.push(loadImage("assets/overlay/rosie-dark.png"))
  lightOverlays.push(loadImage("assets/overlay/sity-dark.png"))
  lightOverlays.push(loadImage("assets/overlay/strawberryMan-dark.png"))
  lightOverlays.push(loadImage("assets/overlay/xiaoming-dark.png"))
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#fff");
  image(bg, 0, 0, windowWidth, windowHeight/2.3);
  
  

  if(toggle){
    image(textOverlay1, 0, 0, windowWidth, windowHeight/2.3);
  }else image(textOverlay2, 0, 0, windowWidth, windowHeight/2.3);


  if (millis() - lastChangeTime > changeInterval) {
    imageToDisplay+=1 
    if (imageToDisplay >= lightOverlays.length) imageToDisplay = 0

    lastChangeTime = millis(); // Reset the timer
  }

  tint(255, 200);
  image(lightOverlays[imageToDisplay], 0, 0, windowWidth, windowHeight/2.3)
  
}
function keyPressed(e){
  console.log(mouseX, mouseY)
  toggle = (!toggle)
}