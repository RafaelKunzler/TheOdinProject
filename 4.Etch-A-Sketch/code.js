let num = 16;
let penColor = "black";
let bgColor = "#fff1e6";

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

function changeColor() {        
    var title = document.querySelectorAll(".square");               
    for (let i = 0; i < title.length; i++) {                                    
        title[i].addEventListener("mousemove", function(e){                            
            if(e.which == 1) {
                penColor = document.getElementById("penColor").value;
                this.style.backgroundColor = penColor;
                this.classList.add("inked");
            }
            if (e.shiftKey) {
                this.style.backgroundColor = bgColor.select();
            }
        });
    }     
}



function bgChange() {    
    bgColor = document.getElementById("bgColor").value;
    let title = document.querySelectorAll(".square")
    for (let i = 0; i < title.length; i++) {  
        if (!title[i].classList.contains('inked')) {
            title[i].style.backgroundColor = bgColor;   
        }
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
bgChange();



