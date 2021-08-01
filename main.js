function setup() {
        canvas = createCanvas(300, 300);
        canvas.center();
        video = createCapture(VIDEO);
        video.hide();

        classfier = ml5.imgClassifier("https://teachablemachine.withgoogle.com/models/BSdG7fIzL/"json);
}
function draw() {

}
  