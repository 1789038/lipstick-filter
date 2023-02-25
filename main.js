function preload(){
    lip_stick=loadImage('https://i.postimg.cc/sxKGkQLh/lipstick-removebg-preview.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
    poseNet.on('pose',gotPoses);
}

lipX=0;
lipY=0;

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        lipX=results[0].pose.nose.x-12;
        lipY=results[0].pose.nose.y+12;
        console.log("lip x="+results[0].pose.nose.x);
        console.log("lip y="+results[0].pose.nose.y);
    }
}
function draw(){
image(video,0,0,300,300);
image(lip_stick,lipX,lipY,30,30);
}

function take_snapshot(){
    save('myFilterImage.png');
}