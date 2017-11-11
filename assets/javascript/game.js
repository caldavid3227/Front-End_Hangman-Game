// The words that will be guessed
var words = ["Stargate", "Lightsaber", "StarTrek", "Enterprise", "Voyager", "Sith", "Jedi", "Atlantis", "Jaffa", "Goa'uld", "Hyperspace", "Clone", "Skywalker", "Hoth", "Phaser", "Borg",]
// choose ranodm word
var randNum = Math.floor(Math.random() * words.length);

var choosenWord = words[randNum];

var rightWord = [];

var wrongWord = [];

var underScore = [];

var docUnderScore = document.getElementsByClassName('underscore');
var docRightGuess = document.getElementsByClassName('RightGuess');
var docWrongGuess = document.getElementsByClassName('WrongGuess');



console.log(choosenWord);

var generateUnderscore = () => {
	for (var i = 0; i < choosenWord.length; i++) {
		underScore.push ('_');
	}
	return underScore;
}

console.log(generateUnderscore());

document.addEventListener('keypress', (event) => {
	var keycode = event.keyCode;
	var keyword = String.fromCharCode(keycode);
	if(choosenWord.indexOf(keyword) > -1) {
		
		rightWord.push(keyword);
		
			underScore[choosenWord.indexOf(keyword)] = keyword;
			docUnderScore[0].innerHTML = underScore.join(' ');
			

			if(underScore.join('') == choosenWord) {
				alert('You Win');
				}
			}

		else{
			wrongWord.push(keyword);
			console.log(wrongWord);
			}
});



generate.innerHTML[0] = generateUnderscore().join(' ');