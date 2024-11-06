var toggle = true;
var mode = "adjust"
const darkOverlays = [];
const circleOverlays = [];

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
  circleOverlays.push(circle(195,317))
}


function ratio(width){
  return width / (5906/2067)
}
function setup() {
  
  createCanvas(windowWidth, windowHeight);

  loadGlobeSettings();
  // globeX = -windowWidth/2;
  // globeY = imageHeight*-1/2;
}

function loadGlobeSettings() {
  // Get the stored settings
  let storedSettings = localStorage.getItem('p5JSglobeSettings');
  
  if (storedSettings) {
    // Parse the JSON string back to an object
    let size = JSON.parse(storedSettings);
    
    // Update the global variables
    globeX = size.x;
    globeY = size.y;
    globeWidth = size.w;
    globeHeight = size.h;
    
    console.log('Settings loaded:', size);
  } else {
    console.log('No saved settings found');
    
    var imageHeight = ratio(windowWidth)
    globeX = 0;
    globeY = imageHeight/2
    globeWidth =  windowWidth 
    globeHeight = imageHeight
  
    console.log("Default:", globeX, globeY, globeWidth, globeHeight)
  }
}

function saveGlobeSettings() {
  // Create the size object
  let size = {
    x: globeX,
    y: globeY,
    w: globeWidth,
    h: globeHeight
  };
  
  // Save to localStorage
  // Note: localStorage only stores strings, so we need to convert object to JSON
  console.log(`${globeX}, ${globeY}, ${globeWidth}, ${globeHeight}`)
  localStorage.setItem('p5JSglobeSettings', JSON.stringify(size));
  console.log('Settings saved!');
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
    case "spotlight":
      spotLightM()

  }

  
}

function timer(){
  if (millis() - lastChangeTime > changeInterval) {
    toggle = (!toggle) //text
    overlayInterval+=1 //overlay
    console.log("IMG", overlayInterval)

    if(overlayInterval >= 2) {
      
      imageToDisplay+=1 
      overlayInterval = 0
    }
    if ((darkOverlays.length !== 0 && imageToDisplay >= darkOverlays.length) || (circleOverlays.length !== 0 && imageToDisplay >= circleOverlays.length)) imageToDisplay = 0

    lastChangeTime = millis(); // Reset the timer
  }

}
var loadedImages1 = false;

function displayMode(){
  background("#141414");
  tint(255, 255);

  if(!loadedImages1){
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
    loadedImages1 = true;
  }

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

  if(!loadedImages1){
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
  loadedImages1 = true;
}
  
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

  if(toggle){
    image(textOverlay1, globeX, globeY, globeWidth, globeHeight);
  }else image(textOverlay2, globeX, globeY, globeWidth, globeHeight);

  timer()
}

var loadImage2 = false;
function spotLightM(){

  background("#9c9c9c")
  if(!loadImage2){
    // overlays
    for(var i=1; i<=10; i++){
      circleOverlays.push(loadImage(`assets/circleOverlay/${i}.png`))
    }
    loadImage2 = true;
  }

  image(circleOverlays[imageToDisplay], globeX, globeY, globeWidth, globeHeight)

  if(toggle){
    image(textOverlay1, globeX, globeY, globeWidth, globeHeight);
  }else image(textOverlay2, globeX, globeY, globeWidth, globeHeight);

  timer()

  
}



function Adjust(){
  console.log("Adjust Mode")
  background("#fff");
  fill("green")
  rect(globeX, globeY, globeWidth, globeHeight)
  if(toggle){
    image(textOverlay1, globeX, globeY, globeWidth, globeHeight);
  }else image(textOverlay2, globeX, globeY, globeWidth, globeHeight);

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

    case 83:
      mode = "spotlight"
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
    
    case 37:
      //left
      if(mode === "adjust") {
        if(keyIsDown(82)) {
          globeWidth -= 5
        }else globeX -=5
      }
      break;
    
    case 39:
      //right
      if(mode === "adjust") {
        if(keyIsDown(82)) {
          globeWidth += 5
        }else globeX +=5
      }
      break;
    
    case 38:
      //up
      if(mode === "adjust") {

        if(keyIsDown(82)) {
          globeHeight -= 5
        }else globeY -=5
      }
      break;
    
    case 40:
      //down
      if(mode === "adjust") {
        if(keyIsDown(82)) {
          globeHeight += 5
        }else globeY +=5
      }
      break;
    
    case 13:
      saveGlobeSettings()
      break;

    case 221:
      if(keyIsDown(219))
      console.log("reset")
      localStorage.removeItem('p5JSglobeSettings');
      break;

    default:
      toggle = (!toggle)
      lastChangeTime = millis(); // Reset the timer
      break;


  }

}
function mousePressed(){

  console.log("MousePressed:", mouseX, mouseY)
  if(mode == "adjust"){
    globeX = mouseX;
    globeY = mouseY;

    console.log("Mouse:", mouseX, mouseY)
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}