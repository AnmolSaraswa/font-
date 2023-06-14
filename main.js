function setup() {
    video = createCapture(VIDEO);
    video.position(50, 100);
    video.size(570, 500);
    canvas = createCanvas(570, 500);
    canvas.position(1110, 125);
    a = ml5.poseNet(video, modelLoaded);
    a.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("Posenet is Initialized");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}
function draw() {
    background(245, 203, 241);
}