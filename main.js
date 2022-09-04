var stats = false;
function setup() {
    canvas = createCanvas(460,460);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
image(video,0,0,460,460);
if (stats) {
objectDetector.detect(video,gotResult);
}
}
function modelLoaded() {
    console.log("cocossd is loaded");
    stats = true;
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function gotResult(error,results) {
    if (error) {
        console.log("Error");
    }else {
        console.log(results);
    }
}
function start() {
    document.getElementById("status").innerHTML = "Status : Loading Nueral Network...";
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
 
}