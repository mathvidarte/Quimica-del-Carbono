let bg;
let puntos="Puntaje: 10"
let myFont;
let tiempo= 30;
let compuestos=[];
let compuesto; //variable que contiene el compuesto random
let random; // numero random 
let carbonoGlobal = 0;
let hidrogenoGlobal = 0;
const arrowPlusC = document.querySelector('.btnM');
const arrowMinusC  = document.querySelector('.btn-');

const arrowPlusH = document.querySelector('.btnM2');
const arrowMinusH  = document.querySelector('.btn-2');

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
    compuestos.push(new Compuesto("Pentano",5,12,"lorem"));
    compuestos.push(new Compuesto("Metilo",5,12,"lorem"));
    compuestos.push(new Compuesto("Etilo",5,12,"lorem"));
    compuestos.push(new Compuesto("Propilo",5,12,"lorem"));
    compuestos.push(new Compuesto("Butilo",5,12,"lorem"));
    compuestos.push(new Compuesto("Pentilo",5,12,"lorem"));
   
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
    //pinta el numero del carbono
    text(carbonoGlobal,510,420);
    fill("#FB2D5D");
    //pinta el numero del hidrogeno
    text(hidrogenoGlobal,750,420);
    fill("#FB2D5D");

    if (frameCount % 60 == 0 && tiempo > 0) {

        tiempo --;       
    }
 
}

function seleccionarCompuesto(){

    random=Math.floor(Math.random() * compuestos.length);
    compuesto=compuestos[random];
    
}


//para aumentar el carbono
arrowPlusC.addEventListener('click',() => {
    if (carbonoGlobal < 10) {
        carbonoGlobal ++ ;
        }
   
   

});
//para disminuir el carbono
arrowMinusC.addEventListener('click',()=> {


    if (carbonoGlobal > 0) {
         carbonoGlobal -- ;
         }
});



//para aumentar el HIDROGENO
arrowPlusH.addEventListener('click',() => {

    if (hidrogenoGlobal <30) {
        hidrogenoGlobal ++ ;
        }
   
   

});
//para disminuir el HIDROGENO
arrowMinusH.addEventListener('click',()=> {
   
  
   if (hidrogenoGlobal > 0) {
    hidrogenoGlobal -- ;
    }
 
});
