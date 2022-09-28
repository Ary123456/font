left_wristX = 0;
right_wristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("model is done");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        left_wristX = results[0].pose.leftWrist.x;
        right_wristX = results[0].pose.rightWrist.x;
        difference = floor(right_wristX - left_wristX);
    }
}

function draw() {
   background("9, 10, 82");
   document.getElementById("text_value").innerHTML = "The font size is "+difference+"pixels"; 
   textSize(difference);
   fill("255, 0, 111");
   text("Aryan's font manipulator", 40, 500);
}