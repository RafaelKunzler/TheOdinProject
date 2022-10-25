function checkPass() {
    let pw = document.getElementById("password").value;
    let pw2 = document.getElementById("password2").value;
    let error = document.getElementById("password");
    let error2 = document.getElementById("password2");    
    if(pw != pw2) {
        error.classList.add("errorPassword");   
        error2.classList.add("errorPassword");  
        const txt = document.getElementById("msg")   
        txt.innerHTML = "*Password do not match"    
        return false;        
    } else {
        error.classList.remove("errorPassword");   
        error2.classList.remove("errorPassword"); 
        const txt = document.getElementById("msg")   
        txt.innerHTML = ""  
        return true;
    }
}

