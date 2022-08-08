window.addEventListener('load', init);
// Globals

// Available Levels 
const levels = {
    easy :5,
    medium :3,
    hard :2
}

// To Change levels 
const currentLevel = levels.easy;
let time = currentLevel;
let score = 0;
let isPlaying;
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);


//DOM Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");
const highScore = document.querySelector("#highScore");


const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition',
    'autofluorescent',
    'butterfly-shaped',
    'bacteriologists',
    'catheterisation',
    'destructiveness',
    'demagnetization',
    'discontinuation',
    'identifications',
    'hypochondriasis',
    'humanitarianism',
    'heterosexuality',
    'hypocellularity',
    'inaccessibility',
    'miscalculations',
    'misinterpreting',
    'miniaturization',
    'morphophonemics',
    'neuroanatomical',
    'neighbourliness',
    'povertystricken',
    'plenipotentiary',
    'ployelectrolyte',
    'procastination',
    'restrictiveness',
    'retropectively',
    'razzmatazz',
    'quizzeries',
    'embezzlers',
    'shimozzles',
    'puzzledoms',
    'bedazzling',
    'bumfuzzles',
    'passamezzo',
    'pozzolanixc',
    'blizzarded',
    'shemozzled',
    'strawberry',
    'motivation',
    'zizyphuses',
    'vajazzling',
    'jazzercise',
    'zigzaggery',
    'bumfuzzles',
    'kolkhoznik',
    'schemozzle',
    'mizzenmast',
    'pizzicatos',
    'passamezzo',
    'schizziest'
  ];

  //Initialise Game
  function init() {
    //Show number of seconds in UI
     seconds.innerHTML = currentLevel;
    //load word from array
    shoWord(words);
    //Start matching on word Input
    wordInput.addEventListener('input', startMatch);
    //Call countdown every second
    setInterval(countDown, 2000);
    
    // Check game status
    setInterval(checkStatus, 50);
  }

  // Start match
  function startMatch() {
    if(matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        shoWord(words);
        wordInput.value = "";
        score++;
        // hScore = score;

    }
    // if score = -1, display 0
    if(score === -1) {
    scoreDisplay.innerHTML = 0;
    }
    else {
    scoreDisplay.innerHTML = score;
    highScore.innerHTML = score;
    highScores.push(score);
    
    }
  }

  // Match currentWord to wordInput
  function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = "Correct!!!";
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }

  }

  //Pick & show random word
  function shoWord(words)
  {
    //Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);

    //Output random word
    currentWord.innerHTML = words[randIndex];

  }

  //Countdown timer
  function countDown()
  {
    //Make sure time is not run out
    if (time > 0) {
        //Decrement
        time--;
    }else if (time === 0) {
        //Game is over
        isPlaying = false;
    }
    //Show time
    timeDisplay.innerHTML = time;
  }

  //Check game Status
  function checkStatus() {
    if(!isPlaying && time === 0) {
      wordInput.value = "";

        message.innerHTML = "Game Over!!!";
        score = -1;
    }
  }


