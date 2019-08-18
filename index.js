window.onload = function(){
    var currentState = localStorage.getItem('state') || 'R';
    var el = document.getElementById("state");
    el.innerText = currentState;
    document.onclick = function(ev){
        if(el.innerText === "R"){
            el.innerText = "L";
            localStorage.setItem("state", "L")
        } else {
            el.innerText = "R";
            localStorage.setItem("state", "R")
        }
    }
}
