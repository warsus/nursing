window.onload = function(){
    var el = document.getElementById("state");
    document.onclick = function(ev){
        if(el.innerText === "R"){
            el.innerText = "L";
        } else {
            el.innerText = "R";
        }
    }
}
