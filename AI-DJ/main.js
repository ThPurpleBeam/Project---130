var song=" "
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
righttWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;
function preload()
{
    song=loadSound("Super_mario.mp3");
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function setup()
{
    canvas=createCanvas(600, 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
// Intializing Pose Net
    poseNet = ml5.poseNet(video, modalLoaded);
// Exectuing Pose Net
    poseNet.on('pose', gotPoses);
}

function modalLoaded()
{
    console.log('Pose Net is Initialized');
}

function draw()
{
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#FF0000");

    circle(rightWristX,rightWristY,20);

if(scoreRightWrist >  0.2)
{
    if(rightWristY >0 && rightWristY,100)
    {
        document.getElementById("speed").innerHTML = "Speed  = 0.5x";
        song.rate(0.5);
    }
    else if(rightWristY >100 && rightWristY <= 200)
    {
        document.getElementById("speed").innerHTML = "Speed 1x";
        song.rate(1);
    }
    else if(rightWristY >200 && rightWristY <= 300)
    {
        document.getElementById("speed").innerHTML = "Speed 1x";
        song.rate(1.5);
    }
    else if(rightWristY >300 && rightWristY <= 400)
    {
        document.getElementById("speed").innerHTML = "Speed 1x";
        song.rate(2);
    }
    else if(rightWristY >400 && rightWristY <= 500)
    {
        document.getElementById("speed").innerHTML = "Speed 1x";
        song.rate(2);
    }
}
    
    if(scoreLeftWrist > 0.2)
    {
    circle(leftWristX, leftWristY, 20);
    InNumberleftWristY = Number(leftWristX);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "Volume = " + volume;
    song.setVolume(volume);
}
}

function gotPoses(results)
{
    if(result.length > 0)
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist + "scoreRightWrist = " + scoreRightWrist);

        leftWristX = results[0].pose.leftWristX.x;
        leftWristY = results[0].pose.leftWristY.y;
        console.log("lestWristX = " + leftWristX +" leftWristY = " + leftWristY);
        rightWristX = results[0].pose.rightWristX.x;
        rightWristY  = results[0].pose.rightWristY .y;
        console.log("rightWristX = " + rightWristX +" rightWristY = " + rightWristY);
    }
}