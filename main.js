function preload(){
    imag1e = loadImage('dog_cat.jpg');
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw(){
    image(imag1e, 0, 0, 640, 420);
    fill('orange');
    noFill();
    stroke('orange');
    rect(100, 60, 350, 250);
    text("Dog", 110, 80);
}