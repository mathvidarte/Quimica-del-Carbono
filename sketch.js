let bg;
let puntos="Puntaje: 10"
let myFont;
let tiempo= 30;


function preload(){

    bg=loadImage("./data/PantalladeJuego.jpg");
     myFont = loadFont('data/Jost-Bold.ttf');

}
function setup(){

    createCanvas(1280,720);
    background(bg);
    
}

function draw(){

    textFont(myFont);
    textSize(25);
    fill('#4639B9');
    text(puntos,637,90);

    fill('#F1F1F1');
    text(tiempo,550,90);
}