function preload() {
mustace_download = loadImage('https://i.postimg.cc/hjjz5tLZ/th-1.jpg')
}
nose_x=0;

nose_y=0;
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet Is Initialized");
}

function draw() {
image(video,0,0,nose_x-15,nose_y-10,30,30);
image(mustace_download,nose_x,nose_y,30,30);
}

function fill_in() {
 save('filter.jpeg');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        console.log("nose x ="+results[0].pose.nose.x);
        console.log("nose y ="+ results[0].pose.nose.y);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
    }
}