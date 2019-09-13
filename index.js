

window.onload = function(){
    function renderState(){
        var state = localStorage.getItem("state") || 'R';
        if(state === "L"){
            img.setAttribute("transform", "");
            el.innerText = "L";
            img.className.baseVal = "";
            //localStorage.setItem("state", "L")
        } else if (state === "R") {
            img.setAttribute("transform", "translate(400,0) scale(-1,1)");
            img.className.baseVal = "";
            el.innerText = "R";
            //localStorage.setItem("state", "R")
        } else {
            img.className.baseVal = "hide"
        }
    }
    function toggleState(){
        var state = localStorage.getItem("state")
        if(state==="R"){
            localStorage.setItem("state","L");
        } else {
            localStorage.setItem("state", "R");
        }
    }

    var defaultState = {"side": "R", color: ""}
    var currentState = localStorage.getItem('state');
    if(!currentState){
        localStorage.setItem('state',"R");
    }

    var img = document.getElementById("baby")
    var el = document.getElementById("state");
    var color = document.getElementById("colors")
   
    var settings = document.getElementById("settings");
    var settingsWrapper = document.getElementById("settingsWrapper");

    renderState()
    //var switchButton = document.getElementById("switch");
    //settingsWrapper.onclick = function(ev){
    //    settings.style = "";
    //}
    //
    //
    console.log(settingsWrapper)
    switchButton = document.getElementById("switch")
    color.onclick = function(ev){
        var target = ev.currentTarget;
    }

    switchButton.onclick = function(ev){
        toggleState();
        renderState();
    }
}

window.addEventListener('beforeinstallprompt', (e) => {
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can add to home screen
  showInstallPromotion();
});
