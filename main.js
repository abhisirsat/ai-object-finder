
function preload(){

    
  
}

function setup(){

canvas = createCanvas(480 ,380);
canvas.center();
video=createCapture(VIDEO);
video.size(480,380);
video.hide();  
}

function detect(){
    
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("detect").innerHTML="Status : detecting object";
    object=document.getElementById("search").value;
}

function modelLoaded(){
    
        console.log("modelLoaded");
     status=true;
}

function gotResult(error, results){

if(error){

    console.error(error);
}

else{

    console.log(results);
}

}

function draw(){

        image(video , 0, 0,480 ,380);
        
        }