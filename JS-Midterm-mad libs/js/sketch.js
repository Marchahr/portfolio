

var data;

var txt = '$$Exclamation$$! they said $$Adverb$$ as they jumped into their $$Noun$$ and flew off with their $$Adjective$$ $$PluralNoun$$.';

function setup() {
  noCanvas();
  Tabletop.init({
    key: '15WyEmfu6B1UCzzqeacYnzI8lutrxF6uWvFDiSteBqTs',
    callback: gotData,
    simpleSheet: true
  });

  var button = createButton('generate madlib');
  button.mousePressed(generate);
}

function replacer(match, pos) {
  var entry = random(data);
  return entry[pos];
}
//this allows the word that replaces the submited value to be different each time

function generate() {
  //console.log('generate');
  var madlib = txt.replace(/\$\$(.*?)\$\$/g, replacer);
  createP(madlib);
}

function gotData(stuff) {
  data = stuff;
}

//creates and stores each anwer box
let answers  = {
first_word: "",
second_word: "",
third_word: "",
fourth_word: "",
fifth_word: "",
};

answers [0] 

var answers_payload = JSON.stringify(answers);
 console.log(answers);
 console.log(answers_payload);
//converting data to json
 var answersn_object = JSON.parse(answers_payload);
 // console.log(converted);

//AJAX METHODS - GET
let button = document.getElementById('getAnswerData');
//button to send the form




//POST
const form = document.getElementById("createUser");
 
button.addEventListener("click", SendData);
function SendData(event) {
    event.preventDefault();

    const ul = document.createElement('ul');
  
//each one of the below connects the API with each of the different values

    let url = "https://api.datamuse.com/words?max=5&ml=" + form.first_word.value;
    callApi(url, "Exclamation");

    url = "https://api.datamuse.com/words?max=5&ml=" + form.second_word.value;
    callApi(url, "Adverb");

    url = "https://api.datamuse.com/words?max=5&ml=" + form.third_word.value;
    callApi(url, "Noun");

    url = "https://api.datamuse.com/words?max=5&ml=" + form.fourth_word.value;
    callApi(url, "Adjective");

    url = "https://api.datamuse.com/words?max=5&ml=" + form.fifth_word.value;
    callApi(url, "PluralNoun");

  function callApi(sendurl, location) {
    fetch(sendurl)
    .then(function(response) {
      //getting the data
      return response.json();
      //converting the data to json
      //if I needed to add additional APIs - that would be done here and then another .then would be added 
    })
    .then(function(resp) {
        let random = Math.floor(Math.random() * resp.length);
        resp[random].word;
        console.log(resp[random].word);
        document.getElementById(location).innerHTML = resp[random].word;
    })
    .catch(function(resp) {
      document.getElementById("Output").innerHTML = "There was an error";
    });
  }
}