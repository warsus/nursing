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

window.addEventListener('beforeinstallprompt', (e) => {
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can add to home screen
  showInstallPromotion();
});
