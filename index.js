window.onload = function(){
    var el = document.getElementById("state");
    el.onclick = function(ev){
        if(ev.currentTarget.innerText === "R"){
            ev.currentTarget.innerText = "L";
        } else {
            ev.currentTarget.innerText = "R";
        }
    }
}
