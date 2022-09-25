let num = 16;
let penColor = "black";

function createDiv(num) {
    for(i=0; i<num ; i++) {
        for(j=0; j<num ; j++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("square")
        
        content.appendChild(newDiv)
        }
    }   
    resize(num);
}

function removeDiv() {
    var element = document.querySelectorAll(".square");
    for (let i = 0; i < element.length; i++) {
        element[i].remove();
    }
}

function resize(num) {
    let resize = document.querySelector(".content")
    resize.style.gridTemplateColumns = "repeat(" + num + ", 1fr)";
}

function isClicked() {    
    var title = document.querySelectorAll(".square");
    for (let i = 0; i < title.length; i++) {
        title[i].addEventListener("mousedown", function(){                            
            return true;
        });
    }    
}


function changeColor() {  
      
    var title = document.querySelectorAll(".square");               
    for (let i = 0; i < title.length; i++) {                                    
        title[i].addEventListener("mousemove", function(e){                            
            if(e.which == 1) {
                penColor = document.getElementById("penColor").value;
                this.style.backgroundColor = penColor;
            }
            if (e.shiftKey) {
                this.style.backgroundColor = "#fff1e6";
            }
        });
    }        
}

function restartGame() {    
    removeDiv();
    const newNum = prompt("Choose the size of your grid (max: 100):"); 
    const floorNum = Math.floor(newNum)   
    if ((floorNum <= 100) && (floorNum > 0)) {
        createDiv(floorNum);   
        changeColor();    
    } else {
        alert("Error, choose a size between 1 to 100!");
        createDiv(num)   
        changeColor();      
    }
}



createDiv(num);
changeColor();



