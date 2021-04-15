let bg;
let puntos="Puntaje: 10"
let myFont;
let tiempo= 30;
let compuestos=[];
let compuesto; //variable que contiene el compuesto random
let random; // numero random 

function preload(){

    bg=loadImage("./data/PantalladeJuego.jpg");
     myFont = loadFont('data/Jost-Bold.ttf');

}
function setup(){

    createCanvas(1280,720);
    background(bg);
    compuestos.push(new Compuesto("Metano",1,4,"lorem"));
    compuestos.push(new Compuesto("Etano",2,6,"lorem"));
    compuestos.push(new Compuesto("Butano",4,10,"lorem"));
    compuestos.push(new Compuesto("Butano",5,12,"lorem"));
   
    seleccionarCompuesto();
}

function draw(){

    background(bg);
    textFont(myFont);
    textSize(25);
    fill('#4639B9');
    text(puntos,637,90);
    fill('#F1F1F1');
    text(tiempo,550,90);
    text("Construye un",551,230)
    fill("#FB2D5D");
    //pinta nombre del compuesto random
    text(compuesto.nombre,551,260);

    if (frameCount % 60 == 0 && tiempo > 0) {

        tiempo --;       
    }
 
}

function seleccionarCompuesto(){

    random=Math.floor(Math.random() * compuestos.length);
    compuesto=compuestos[random];
    
}

