var toggle = true;
var mode = "adjust"
const darkOverlays = [];

var imageToDisplay = 0;
var lastChangeTime = 0;
const changeInterval = 5000;
var overlayInterval = 0

var globeX;
var globeY;
var globeWidth;
var globeHeight;


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
function ratio(width){
  return width / (5906/2067)
}
function setup() {
  
  createCanvas(windowWidth, windowHeight);
  var imageHeight = ratio(windowWidth)
  // globeX = -windowWidth/2;
  // globeY = imageHeight*-1/2;
  globeX = 0;
  globeY = imageHeight/2
  globeWidth =  windowWidth 
  globeHeight = imageHeight

  console.log("Default:", globeX,globeY)
}

function draw() {
 
  switch(mode){
    case "display":
      displayMode()
      break;
    case "presentation":
      presentation()
      break;
    case "noHighLights":
      noHighlights()
      break;
    case "adjust":
      Adjust()
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
  image(bg, globeX, globeY, globeWidth, globeHeight);
  
  if(toggle){
    image(textOverlay1, globeX, globeY, globeWidth, globeHeight);
  }else image(textOverlay2, globeX, globeY, globeWidth, globeHeight);

  timer()

  tint(255, 235);
  image(darkOverlays[imageToDisplay], globeX, globeY, globeWidth, globeHeight)
}



function presentation() {
  background("#000");

  
  fill("#fff")
  rect(globeX, globeY, globeWidth, globeHeight)

  tint(255, 255);

  // timer()
  if(toggle){
    image(textOverlay1, globeX, globeY, globeWidth, globeHeight);
  }else image(textOverlay2, globeX, globeY, globeWidth, globeHeight);

  timer()

  tint(255, 235);
  image(darkOverlays[imageToDisplay], globeX, globeY, globeWidth, globeHeight)
}


function noHighlights() {
  background("#fff");

  
  // fill("#fff")
  // // rect(-windowWidth/2, imageHeight*-1, windowWidth, imageHeight)

  // tint(255, 255);

  if(toggle){
    image(textOverlay1, globeX, globeY, globeWidth, globeHeight);
  }else image(textOverlay2, globeX, globeY, globeWidth, globeHeight);

  timer()

  // image(darkOverlays[imageToDisplay], -windowWidth/2, imageHeight*-1, windowWidth, imageHeight)
  // if(toggle){
  //   image(textOverlay1, -windowWidth/2, imageHeight*-1, windowWidth, imageHeight);
  // }else image(textOverlay2, -windowWidth/2, imageHeight*-1, windowWidth, imageHeight);
}

function Adjust(){
  console.log("Adjust Mode")
  background("#fff");
  fill("green")
  rect(globeX, globeY, globeWidth, globeHeight)
  image(textOverlay1, globeX, globeY, globeWidth, globeHeight);

  fill("red")
  circle(globeX + globeWidth/2, globeY + globeHeight/2, 20)
}


function keyPressed(e){
  console.log("KeyPressed:", keyCode)
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

    case 78 ||110:
      mode = "noHighLights";
      break;

    case 49:
      mode = "adjust";
      break;

    case 187:
      console.log("HERE")
      if(mode === "adjust") {
        globeWidth +=10
        globeHeight = ratio(globeWidth)
      }
      console.log("PLUS:", globeWidth,globeHeight)
      break;

    case 189:
      if(mode === "adjust") {
        globeWidth -=10
        globeHeight = ratio(globeWidth)
      }

      console.log("MINUS:", globeWidth,globeHeight)
      break;
  
    default:
      toggle = (!toggle)
      lastChangeTime = millis(); // Reset the timer
      break;


  }

}
function mousePressed(){
  if(mode == "adjust"){
    globeX = mouseX;
    globeY = mouseY;

    console.log("Mouse:", mouseX, mouseY)
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}