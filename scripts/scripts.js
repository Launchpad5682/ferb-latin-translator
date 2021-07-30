const btn = document.querySelector("#btn-translate");
const textArea = document.querySelector("#txt-input");
const output = document.querySelector("#output");

const serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";

function getTranslationURL(sentence) {
  return serverURL + "?" + "text=" + sentence;
}

function errorHandler(error) {
    console.log("Error occurred: ", error);
    alert("Something went wrong! Try Again in some time");
  }
  
  function updateOutput(data) {
    let translatedText = data.contents.translated;
    output.innerHTML = translatedText;
    textArea.value = "";
  }
  
  function clickHandler() {
    let sentence = textArea.value;
  
    // fetching api and function reference
    fetch(getTranslationURL(sentence))
      .then((res) => res.json())
      .then(updateOutput)
      .catch(errorHandler);
  }
  
  btn.addEventListener("click", clickHandler);
  