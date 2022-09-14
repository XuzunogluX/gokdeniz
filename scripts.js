var words = [
  [["dog","köpek"],["cat","kedi"],["bird","kuş"]],
  [["monkey","maymun"],["lion","aslan"],["tiger","kaplan"]],
  [["fish","balık"],["shark","köpek balığı"],["whale","balina"]]
];
var unit;
var sira;

function unitChange(number) {
  unit = number;
  sira = 0;
  playAgain();
}

function control() {
  document.getElementById("image").style.display = "block";
  if(document.getElementById("answer").value.toLowerCase() == words[unit][sira][0]) {
    if(sira != words[unit].length - 1) {
      sira++;
      document.getElementById("word").innerHTML = words[unit][sira][1];
      document.getElementById("answer").value = null;
      document.getElementById("image").src = "images/thumbs-up_king.png";
      audio = new Audio('sounds/thumbs-up-king.mp3');
      audio.play();
    }
    else {
      sira = 0;
      document.getElementById("answer").value = null;
      document.getElementById("gameScreen").style.display = "none";
      document.getElementById("finish").style.display = "block";
      document.getElementById("image").style.display = "none";
    }
  }
  else {
    document.getElementById("image").src = "images/crying_king.png";
    audio = new Audio('sounds/crying-king.mp3');
    audio.play();
  }
}

function playAgain() {
  document.getElementById("selectUnit").style.display = "none";
  document.getElementById("gameScreen").style.display = "block";
  document.getElementById("finish").style.display = "none";
  document.getElementById("creditButton").style.display = "none";
  document.getElementById("description").innerHTML = "Anlamı verilen kelimenin ingilizcesini yazın.";
  shuffleArray(words[unit]);
  document.getElementById("word").innerHTML = words[unit][sira][1];
}

function unitSelect() {
  document.getElementById("finish").style.display = "none";
  document.getElementById("selectUnit").style.display = "block";
  document.getElementById("creditButton").style.display = "block";
}
function credit() {
  document.getElementById("credit").style.display = "block";
  document.getElementById("selectUnit").style.display = "none";
  document.getElementById("description").innerHTML = "Emeği Geçenler";
  document.getElementById("creditButton").style.display = "none";
  document.getElementById("mainMenuButton").style.display = "block";
}

function mainMenu() {
  document.getElementById("credit").style.display = "none";
  document.getElementById("creditButton").style.display = "block";
  document.getElementById("mainMenuButton").style.display = "none";
  document.getElementById("selectUnit").style.display = "block";
  document.getElementById("description").innerHTML = "Çalışmak istediğiniz üniteyi seçin.";
}

function shuffleArray(array) {
  for (var i=array.length-1; i>0; i--) {
    var j = Math.floor(Math.random()*(i+1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}