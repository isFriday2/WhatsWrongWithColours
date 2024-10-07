var toggle = false;
var mode = "display"
const darkOverlays = [];

var imageToDisplay = 0;
var lastChangeTime = 0;
const changeInterval = 5000;
var overlayInterval = 0


var imageHeight;

function preload(){
  bg = loadImage('/assets/illustration.PNG');
  textOverlay1 = loadImage('/assets/textOverlay-01.PNG')
  textOverlay2 = loadImage('/assets/textOverlay-02.PNG')

  // overlays
  darkOverlays.push(loadImage("assets/overlay/alexa-dark.png"))
  darkOverlays.push(loadImage("assets/overlay/abu-dark.png"))
  darkOverlays.push(loadImage("assets/overlay/frank-dark.png"))
  darkOverlays.push(loadImage("assets/overlay/larena-dark.png"))
  darkOverlays.push(loadImage("assets/overlay/moo-dark.png"))
  darkOverlays.push(loadImage("assets/overlay/reya-dark.png"))
  darkOverlays.push(loadImage("assets/overlay/rosie-dark.png"))
  darkOverlays.push(loadImage("assets/overlay/sity-dark.png"))
  darkOverlays.push(loadImage("assets/overlay/strawberryMan-dark.png"))
  darkOverlays.push(loadImage("assets/overlay/xiaoming-dark.png"))

}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  imageHeight = windowWidth / (5906/2067)
}

function draw() {
 

  translate(windowWidth/2, windowHeight/2);
  switch(mode){
    case "display":
      displayMode()
      break;
    case "presentation":
      presentation()
      break;
  }
  
  
}

function timer(){
  if (millis() - lastChangeTime > changeInterval) {
    
    
    toggle = (!toggle) //text
    overlayInterval+=1 //overlay

    if(overlayInterval >= 2) {
      imageToDisplay+=1 
      overlayInterval = 0
    }
    if (imageToDisplay >= darkOverlays.length) imageToDisplay = 0

    lastChangeTime = millis(); // Reset the timer
  }

}

function displayMode(){
  background("#141414");
  tint(255, 255);
  image(bg, -windowWidth/2, imageHeight/2*-1, windowWidth, imageHeight);
  
  if(toggle){
    image(textOverlay1, -windowWidth/2, imageHeight/2*-1, windowWidth, imageHeight);
  }else image(textOverlay2, -windowWidth/2, imageHeight/2*-1, windowWidth, imageHeight);

  timer()

  tint(255, 235);
  image(darkOverlays[imageToDisplay], -windowWidth/2, imageHeight/2*-1, windowWidth, imageHeight)
}



function presentation() {
  background("#000");

  
  fill("#fff")
  rect(-windowWidth/2, imageHeight/2*-1, windowWidth, imageHeight)

  tint(255, 255);

  if(toggle){
    image(textOverlay1, -windowWidth/2, imageHeight/2*-1, windowWidth, imageHeight);
  }else image(textOverlay2, -windowWidth/2, imageHeight/2*-1, windowWidth, imageHeight);

  timer()

  image(darkOverlays[imageToDisplay], -windowWidth/2, imageHeight/2*-1, windowWidth, imageHeight)
  if(toggle){
    image(textOverlay1, -windowWidth/2, imageHeight/2*-1, windowWidth, imageHeight);
  }else image(textOverlay2, -windowWidth/2, imageHeight/2*-1, windowWidth, imageHeight);
}


function keyPressed(e){
  console.log(mouseX, mouseY)
  switch(keyCode){
    case BACKSPACE:
      location.reload();
      break;

    case 80 || 112:
      mode = "presentation";
      break;

    case 68 || 100:
      mode = "display";
      break;

    default:
      toggle = (!toggle)
      lastChangeTime = millis(); // Reset the timer
      break;

  }

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}