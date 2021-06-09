
var buttonClick = document.querySelector("#btn-translate");
var inputText = document.querySelector("#textArea");
var outputText = document.querySelector("#txt-output");


var Url = "https://api.funtranslations.com/translate/yoda.json";

function mainUrl() {
    return Url+"?"+"text="+inputText.value;
    
} 

function errorHandler(){
    alert("There is a error,Please try again later.");
}


function clickEvent(){
    
    fetch(mainUrl())
    .then (response => response.json())
    .then( json =>{

        var translatedText = json.contents.translated;
        outputText.innerText = translatedText;

        }
    )

    .catch(errorHandler);

    
}

buttonClick.addEventListener("click",clickEvent);