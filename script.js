var numbersCuadros = 6;
var lista = document.querySelectorAll(".square");
var messageDisplay = document.querySelector(".message");
var h = document.querySelector("#container");
var displayColor = document.querySelector(".displayColor");
var  listaRGB = []; 
var h1 = document.querySelector("h1");
var resetButton = document.querySelector(".reset");
var easyButton = document.querySelector(".easy");
var hardButton = document.querySelector(".hard"); 
var modeButtons = document.querySelectorAll(".mode");

var modoHard = true;


var colorElegido;
init();
function init(){
    setupModeButtons();
    setupSquares();  
    
    
    reset();
}

setupModeButtons(){
    for(var i=0; i < modeButtons.length;i++){
       
        
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numbersCuadros = 3: numbersCuadros= 6;
            reset();
        });
    }
}
setupSquares(){
    for(var i = 0; i<lista.length;i++){
        lista[i].style.backgroundColor = listaRGB[i];
        lista[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;     
            if(clickedColor === colorElegido){
                messageDisplay.textContent = "You Are Win";
                h1.style.backgroundColor = colorElegido ;
                changeColors(colorElegido);
                resetButton.textContent = "Play again";         
            }else{
                
                
                this.style.backgroundColor= "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset(){
    listaRGB = generateRandomColors(numbersCuadros);
    colorElegido = pickColor();
    displayColor.textContent = colorElegido;

    for(var i = 0; i<lista.length;i++){
        if(listaRGB[i]){
            lista[i].style.display = "block";
            lista[i].style.backgroundColor = listaRGB[i];
        }else{
            lista[i].style.display = "none"
        }
        
    }
    h1.style.backgroundColor= "#steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New colors" 

    
}


// easyButton.addEventListener("click",function(){
//     modoHard = false;
//     easyButton.classList.add("selected");
//     hardButton.classList.remove("selected");
//     numbersCuadros = 3;
//     listaRGB = generateRandomColors(numbersCuadros);
//     colorElegido = pickColor();
//     displayColor.textContent = colorElegido;
//     for(var i = 0; i<lista.length;i++){
//         if(listaRGB[i]){
//             lista[i].style.backgroundColor = listaRGB[i];
//         }else{
//             lista[i].style.display = "none"; 
//         }
//         h1.style.backgroundColor= "steelblue"; 
        
//     }
//     messageDisplay.textContent = "";
//     resetButton.textContent = "New colors" 
// });
// hardButton.addEventListener("click",function(){
//     modoHard = true;
//     hardButton.classList.add("selected");
//     easyButton.classList.remove("selected");
//     numbersCuadros= 6;
//     listaRGB = generateRandomColors(numbersCuadros);
//     colorElegido = pickColor();
//     displayColor.textContent = colorElegido;
//     for(var i = 0; i<lista.length;i++){
//         if(listaRGB[i]){
//             lista[i].style.backgroundColor = listaRGB[i];
//             lista[i].style.display = "block"; 
//         }
//         h1.style.backgroundColor= "steelblue"; 
        
//     }
//     messageDisplay.textContent = "";
//     resetButton.textContent = "New colors" 

// });

resetButton.addEventListener("click",function(){
    reset();  
});




function changeColors(color){
    for(var i = 0; i<lista.length;i++){
        lista[i].style.backgroundColor = color;
    }
}


function pickColor(){
    var aleatorio = Math.floor(Math.random()*listaRGB.length);
    return listaRGB[aleatorio];
}

function generateRandomColors(n){
    var listaf = [];
    for(var i = 0; i<n;i++){
        
        
        listaf.push(randomColor());
        //lista[i].style.backgroundColor = rgb;
    
    
    }
    return listaf;
}

function randomColor(){
    var r = String(Math.floor(Math.random()*256));
    var g = String(Math.floor(Math.random()*256));
    var b = String(Math.floor(Math.random()*256));
    var rgb = "rgb("+r+", "+g+", "+b+")";
    return rgb;
}