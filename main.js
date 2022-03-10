function soundclassifier(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/pqvaZSsvK/",modelLoaded);

}
function modelLoaded(){
console.log("Model loaded sucessfully")    
}
