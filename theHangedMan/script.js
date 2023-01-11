let wordNum = Math.floor(Math.random() * 300);
let record = [];
let word, tries = 0;

function setLanguage(){
  let lang = getCookie("language");
  if(lang == ""){
    $('span[lang="es"]').hide();
    window.languageModal.showModal();
  }else{
    document.documentElement.lang = lang; 
    $('span[lang="es"]').hide();
    $('span[lang="en"]').hide();
    $('span[lang="' + lang + '"]').toggle();
  }
}

function setLanguageCookie(lang){
  setCookie('language', lang); 
  setLanguage();
  window.languageModal.close(); 
}

function setMode(mode){
  window.modeModal.close();
  mode == 1 ? prepareSoloMode(): window.duoModal.showModal();
}

function writeSpaces(){
  let wordField = document.getElementById('word');
  word.split("").forEach((e) => {
    if(e != " ") wordField.innerHTML += "_";
    else wordField.innerHTML += " ";
  });
};

function prepareSoloMode(){
  document.documentElement.lang == "en" ? wordNum += 300: ""; 
  word = words[wordNum].toUpperCase().split("").join(" ");
  writeSpaces();
  
  // The game gives a hint at the start
  guessLetter(words[wordNum][Math.floor(Math.random() * words[wordNum].length)].toUpperCase());

}

function prepareDuoMode(){
  let inputWord = document.getElementById("inputWord").value;
  if(!checkWord(inputWord)) return;
  window.duoModal.close();
  word = inputWord.toUpperCase().split("").join(" ");
  writeSpaces();
  
  // The game gives a hint at the start
  guessLetter(inputWord[Math.floor(Math.random() * inputWord.length)].toUpperCase());
}

function checkWord(inputWord){
  let inputError = document.getElementById("inputError");
  if(inputWord.replaceAll("\\s+", "") == "") 
    document.documentElement.lang == "en" ?
      inputError.innerText = "Introduce a word": 
      inputError.innerText = "Debe introducir una palabra";
  else if(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ ]/.test(inputWord))
    document.documentElement.lang == "en" ?
      inputError.innerText = "The word cannot contain any special characters apart from accents": 
      inputError.innerText = "La palabra no puede incluir ningún caracter especial a parte de acentos";
  else return true;
  return false;
}

function getLetter(){
  let input = document.getElementById('inputLetter');
  if(checkLetter(input.value)) guessLetter(input.value.toUpperCase());
  input.value = "";
}

function checkLetter(input){
  console.log(record + " " + input);
  if(input.replaceAll("\\s+", "") == "") 
    document.documentElement.lang == "en" ?
      alert("That letter has already been used"): 
      alert("Ya se ha usado esa letra");
  else if(record.includes(input.toUpperCase()))
    document.documentElement.lang == "en" ?
        alert("That letter has already been used"): 
        alert("Ya se ha usado esa letra");
  else return true;
}

function guessLetter(letter) {
  let wordField = document.getElementById('word');
  let charsArray = wordField.innerText.split("");
  let index = word.normalize('NFD').replace(/\p{Diacritic}/gu, "").indexOf(letter.normalize('NFD').replace(/\p{Diacritic}/gu, ""));
  if(index != -1){
    for(let key in word) 
      if(word[key].normalize('NFD').replace(/\p{Diacritic}/gu, "") == letter.normalize('NFD').replace(/\p{Diacritic}/gu, "")) 
        charsArray[key] = word[key];
    wordField.innerText = charsArray.join("");
  }else{
    document.getElementById("img_hanged").src = "images/hanged_" + ++tries + ".svg";
    document.getElementById("record").innerHTML += "<span class='mx-1 text-decoration-line-through'>" + letter + "</span>";
  }
  record.push(letter);
  if(isFinished()) showFinalMessage();
}

function isFinished(){
  let wordField = document.getElementById('word');
  if(wordField.innerText.indexOf("_") == -1 || tries == 7) return true;
  return false;
}

function showFinalMessage(){
  let wordField = document.getElementById('word'), text = document.getElementById('finalText'), lang = getCookie("language");
  if(wordField.innerText.indexOf("_") == -1) {
    text.classList.add("text-success");
    if(lang == "es") text.innerText = "Felicidades, has ganado!!\nLa palabra era: " + word.replaceAll(" ", "");
    else text.innerText = "Congrats, you've won!!\nThe word was: " + word.replaceAll(" ", "");
  }else{
    text.classList.add("text-danger");
    if(lang == "es") text.innerText = "Qué pena, has perdido!!\nLa palabra era: " + word.replaceAll(" ", "");
    else text.innerText = "Game Over, you've lost!!\nThe word was: " + word.replaceAll(" ", "");
  }
  window.finalModal.showModal();
}

function setCookie(cname, cvalue) {
  const d = new Date();
  d.setTime(d.getTime() + (365*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires;
}

function getCookie(cname) {
  let name = cname + "=", decodedCookie = decodeURIComponent(document.cookie), cookie = "";
  let cookies = decodedCookie.split(';');
  cookies.forEach(e => {
    while(e.charAt(0) == ' ') e = e.substring(1);
    if(e.indexOf(name) == 0) cookie = e.substring(name.length, e.length);
  });
  
  return cookie;
}