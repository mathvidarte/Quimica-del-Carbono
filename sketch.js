let bg;
let winImg;
let correct;
let incorrect;
//let btnClose;
let correctos=0;
let incorrectos=0;
let myFont;
let nombre;
let minutos = 3;
let tiempo = 180;
let puntuacion = 0;
let puntos = "Puntaje:  ";
let compuestos = [];
let compuesto; //variable que contiene el compuesto random
let random; // numero random 
let carbonoGlobal = 0;
let hidrogenoGlobal = 0;
let ceros = false;
let mix = 0;
let pantalla = 0;
let cont;
let bpista = false;
const arrowPlusC = document.querySelector('.btnM');
const arrowMinusC = document.querySelector('.btn-');
const arrowPlusH = document.querySelector('.btnM2');
const arrowMinusH = document.querySelector('.btn-2');
const mixButton = document.querySelector('.btnCombinar');
const btnpista = document.querySelector('.btnpista');
const pistadesign = document.querySelector('pistadesign');
const btnCloseReal = document.querySelector('.btnClose');
const btnContinuar = document.querySelector('.btnContinuar');

function preload() {

    correct = loadImage('./data/pro.png')
    incorrect = loadImage('./data/wrong.png');
    bg = loadImage("./data/PantalladeJuego.jpg");
    winImg = loadImage("./data/pantallaFinal.png");
    myFont = loadFont('data/Jost-Bold.ttf');
    //btnClose = loadImage('./data/btnClose.png');

}

function setup() {

    createCanvas(1280, 720); 
    background(bg);
    compuestos.push(new Compuesto("Metano",1,4,"Es el primer hidrocarburo\n y es el más sencillo."));
    compuestos.push(new Compuesto("Etano",2,6,"Es el segundo alcano. Recuerda que \nlos carbonos aumentan de a 1 y los\n hidrógenos aumentan de a 2."));
    compuestos.push(new Compuesto("Propano",3,8,"Si este es el tercer hidrocarburo,\n ¿cúantos hidrógenos tiene?"))
    compuestos.push(new Compuesto("Butano",4,10,"Si es el cuarto alcano,\n ¿cúantos hidrógenos tiene? "));
    compuestos.push(new Compuesto("Pentano",5,12,"Si un pentágono tiene 5 puntas,\n entonces ¿el pentano cuántos carbonos?"));
    compuestos.push(new Compuesto("Metilo",1,3,"Si es el primer alquilo,\n ¿cuántos hidrógenos se le quitaría?"));
    compuestos.push(new Compuesto("Etilo",2,5,"El prefijo Et es para dos carbonos \npero recuerda que al alquilo \nse le quita un hidrógeno."));
    compuestos.push(new Compuesto("Propilo",3,7,"Es el tercero y para crear un alquilo,\n piensa en la composición del alcano\n y restale un hidrógeno."));
    compuestos.push(new Compuesto("Butilo",4,9,"Su prefijo es el cuarto \n y la cantidad de hidrógenos \nes un número impar"));
    compuestos.push(new Compuesto("Pentilo",5,11,"Si un pentágono tiene 5 puntas,\n entonces ¿el pentano cuántos carbonos?"));
    seleccionarCompuesto();

    
}

function draw() {


      
    switch (pantalla) {

        case 0:

            background(bg);
            textFont(myFont);
            textSize(25);
            textAlign(CORNER);
            fill('#4639B9');
            text(puntos, 637, 90);
            text(puntuacion, 735, 90);
            fill('#F1F1F1');
            text(tiempo, 550, 90);
            fill('#4639B9');
            textAlign(CENTER);
            text("Construye un",1280/2,230)
            fill("#FB2D5D");
        
            //pinta nombre del compuesto random
        
            try {        
                nombre = compuesto.nombre;
                text(nombre, 1280/2, 260);
            } catch (error) {
        
            }

            if(tiempo<=0){

                pantalla=1;
            }
            textAlign(LEFT);
            //pinta el numero del carbono
            text(carbonoGlobal, 510, 420);
            fill("#FB2D5D");
            //pinta el numero del hidrogeno
            text(hidrogenoGlobal, 750, 420);
            fill("#FB2D5D");
        
            //tiempo
            if (frameCount % 60 == 0 && tiempo > 0) {
                tiempo--;

                if (tiempo <= 0) {
                    pantalla = 1;
                    btnpista.classList.add('remove');
                    btnContinuar.classList.add('btnCon')
                }
            }
        
            if (ceros == true) {
                fill('#4639B9');
                text("Agrega como minímo un carbono y un hidrógeno", 50, 20);
            }
        
            if (mix == 1) {
                
                fill('#DAD5F4')
                image(correct, 580, 335);
                //console.log("correcto");
                rectMode(CORNER);
                rect (550, 210, 180, 60)
                noStroke();
                fill('#52C21C');
                text("CORRECTO", 560, 250);

            }
        
            if (mix == 2) {
               
                fill('#DAD5F4')
                image(incorrect, 580,335);
                //incorrectos++;
                noStroke();
                rectMode(CORNER);
                rect (550, 210, 180, 60)
                fill('#FB2D5D');
                text("INCORRECTO", 560, 250);
            }

            if (bpista == true) {
                
                fill('#fffff'); 
                rectMode(CENTER);
                noStroke();
                rect(640, 300, 400, 150, 10);
                fill('#FB2D5D');
                textAlign(CENTER);
                textSize (20);
                text(compuesto.pista, 640, 280);
                //image(btnClose, 810,200)
               
              
                
                

            }else{
                bpista == false;
            }


        

            break;

        case 1:

            background(winImg);
            
            mixButton.style.visibility = "hidden";
            arrowMinusC.style.visibility = "hidden";
            arrowMinusH.style.visibility = "hidden";
            arrowPlusC.style.visibility = "hidden";
            arrowPlusH.style.visibility = "hidden";

            textSize(50)
            
            fill("#090D46");

            text(puntuacion,615,300);
            
            fill("#52C21C");

            textSize(35)
            text(correctos,812,381);

            fill("#FB2D5D");

            text(incorrectos,817,444);
            break;

    }
   

}

//random compuesto
function seleccionarCompuesto() {

    // verifica que todavia existan compuestos
    if (compuestos.length == 0) {

        pantalla=1;  
        btnpista.classList.add('remove'); 
        btnContinuar.classList.add('btnCon')

    }
    random = Math.floor(Math.random() * compuestos.length);
    compuesto = compuestos[random];
    compuestos.splice(random, 1);

    console.log(compuestos);
    mix = 0;
}

//para aumentar el carbono
arrowPlusC.addEventListener('click', () => {
    if (carbonoGlobal < 10) {
        carbonoGlobal++;
        ceros = false;
    }
});

//para disminuir el carbono
arrowMinusC.addEventListener('click', () => {
    if (carbonoGlobal > 0) {
        carbonoGlobal--;
    }
});

//para aumentar el HIDROGENO
arrowPlusH.addEventListener('click', () => {
    if (hidrogenoGlobal < 30) {
        hidrogenoGlobal++;
        ceros = false;
    }
});

//para disminuir el HIDROGENO
arrowMinusH.addEventListener('click', () => {
    if (hidrogenoGlobal > 0) {
        hidrogenoGlobal--;
    }
});

//para comprobar la combinacion
mixButton.addEventListener('click', () => {
    if (carbonoGlobal == 0 || hidrogenoGlobal == 0) {
        ceros = true;

    } else {
        ceros = false;

        if (compuesto.carbon == carbonoGlobal && compuesto.hidrogeno == hidrogenoGlobal) {
            //console.log("SUPER");

            //suma 10 puntos
            puntuacion += 10;

            //vuelve a 0 la combinacion de carbono e hidrogeno
            carbonoGlobal = 0;
            hidrogenoGlobal = 0;
            correctos++

            mix = 1;

                
            setTimeout(function(){
                seleccionarCompuesto();
                
        },2000); //delay is in milliseconds 
           

        } else {
            //console.log("BAD");

            //vuelve a 0 la combinacion de carbono e hidrogeno
            carbonoGlobal = 0;
            hidrogenoGlobal = 0;
            incorrectos++
            mix = 2;
           
            setTimeout(function(){
                    seleccionarCompuesto();
                    
            },2000); //delay is in milliseconds 

           
          
            

        }
    }
});

btnpista.addEventListener('click', () => {
    //alert(compuesto.pista);
    //bpista = true;

    

    if (bpista ==false) { 
        bpista = true;
        btnCloseReal.classList.add('--view');

    }else{
        bpista = false;
        
    }
  
});

btnCloseReal.addEventListener('click', () => {
    bpista = false;
    btnCloseReal.classList.remove('--view');
})

