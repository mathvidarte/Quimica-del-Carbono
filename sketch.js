let bg;
let myFont;
let nombre;

let tiempo= 60;
let puntuacion = 0;
let puntos = "Puntaje:  ";
let compuestos=[];
let compuesto; //variable que contiene el compuesto random
let random; // numero random 
let carbonoGlobal = 0;
let hidrogenoGlobal = 0;
let ceros = false;
let mix = 0;

const arrowPlusC = document.querySelector('.btnM');
const arrowMinusC  = document.querySelector('.btn-');

const arrowPlusH = document.querySelector('.btnM2');
const arrowMinusH  = document.querySelector('.btn-2');

const mixButton = document.querySelector('.btnCombinar');

function preload(){

    bg = loadImage("./data/PantalladeJuego.jpg");
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
    text(puntuacion, 735, 90);
    fill('#F1F1F1');
    text(tiempo,550,90);
    fill('#4639B9');
    text("Construye un",551,230)
    fill("#FB2D5D");
    
    //pinta nombre del compuesto random

    try {
        
        nombre = compuesto.nombre;
        text(nombre,551,260);
    } catch (error) {
        
    }
  
    //pinta el numero del carbono
    text(carbonoGlobal,510,420);
    fill("#FB2D5D");
    //pinta el numero del hidrogeno
    text(hidrogenoGlobal,750,420);
    fill("#FB2D5D");

    //tiempo
    if (frameCount % 60 == 0 && tiempo > 0) {
        tiempo --;       
    }

    if (ceros == true){
        fill('#4639B9');
        text("texto que diga algo de que carbono y hidrogeno no pueden estar en ceros", 50,20);
    }

    if(mix == 1){
        fill('#4639B9');
        text("ALGO DE RESPUESTA CORRECTA", 50,20);
    }

    if(mix == 2){
        fill('#4639B9');
        text("ALGO DE RESPUESTA INCORRECTA", 50,20);
    }

    
}

//random compuesto
function seleccionarCompuesto(){

    if(compuestos.length==0){

        alert("se acabo el juego")
    }
    random = Math.floor(Math.random() * compuestos.length);
    compuesto = compuestos[random];
    compuestos.splice(random,1);

    console.log(compuestos);
    mix = 0;
}

//para aumentar el carbono
arrowPlusC.addEventListener('click',() => {
    if (carbonoGlobal < 10) {
        carbonoGlobal ++ ;
        ceros = false;
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
    if (hidrogenoGlobal < 30) {
        hidrogenoGlobal ++ ;
        ceros = false;
        } 
});

//para disminuir el HIDROGENO
arrowMinusH.addEventListener('click',()=> {
   if (hidrogenoGlobal > 0) {
    hidrogenoGlobal -- ;
    }
});

//para comprobar la combinacion
mixButton.addEventListener('click', ()=> {
    if (carbonoGlobal == 0 || hidrogenoGlobal == 0){
        ceros = true;

    }else{
        ceros = false;

        if(compuesto.carbon == carbonoGlobal && compuesto.hidrogeno == hidrogenoGlobal){
            //console.log("SUPER");
    
            //suma 10 puntos
            puntuacion += 10;
    
            //vuelve a 0 la combinacion de carbono e hidrogeno
            carbonoGlobal = 0;
            hidrogenoGlobal = 0;

            mix = 1;
    
            
            seleccionarCompuesto();
            compuestos.remove(compuesto);
    
        }else{
            //console.log("BAD");
    
            //vuelve a 0 la combinacion de carbono e hidrogeno
            carbonoGlobal = 0;
            hidrogenoGlobal = 0;

            mix = 2;

            seleccionarCompuesto();

        }
    }
});
