var input = document.querySelector ("#input-box")
var translateButton = document.querySelector ("#translate-btn")
var output = document.querySelector ("#output-box")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function apiURL (text) {
    return serverURL + "?" + "text=" + text
}

function clickHandler () {
    var inputText = input.value
    fetch(apiURL(inputText))
    .then (response => response.json ())
    .then (json => output.innerText = json.contents.translated)
}

translateButton.addEventListener ("click", clickHandler)

var initialScreenSize = window.innerHeight; 
window.addEventListener("resize", function() {
   if(window.innerHeight < initialScreenSize){
        $("footer").hide(); 
   } else{ 
        $("footer").show(); } });