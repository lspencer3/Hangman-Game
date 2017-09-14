//create object and 
//create needed variables
var words = {
	word1: ["h","a","k","u","n", "a"," ", "m", "a", "t","a","t", "a"],
	word2: ["a", " ", "w", "h", "o", "l","e", " ", "n", "e", "w", " ", "w", "o", "r", "l", "d"],
	word3: ["u", "n", "d", "e", "r", " ", "t", "h", "e", " ", "s", "e", "a"],
	word4: ["c", "o", "l", "o", "r", "s", " ", "o", "f", " ", "t", "h", "e"," ", "w", "i", "n", "d"],
	word5: ["l", "e", "t", " ", "i", "t", " ", "g", "o"],
	word6: ["i", " ", "j", "u", "s", "t", " ", "c", "a", "n", "t", " ", "w","a", "i", "t", " ", "t" , "o", " ", "b", "e", " ", "k", "i", "n", "g"],
	word7: ["r", "e", "f", "l", "e", "c", "t", "i", "o", "n"],
	word8: ["j", "u", "s", "t", " ", "a", "r", "o", "u", "n", "d", " ", "t","h", "e", " ", "r", "i" , "v", "e", "r", "b", "e", "n", "d"],
	word9: ["y", "o", "u", "l", "l", " ", "b", "e", " ", "i", "n", " ", "m","y", " ", "h", "e", "a" , "r", "t"],
	word10: ["c", "a", "n", " ", "y ", "o", "u", " ", "f", "e", "e", "l", " ","t", "h", "e", " ", "l" , "o", "v","e", " ", "t", "o","n","i", "g","h","t"]
}
var songs = [words.word1, words.word2, words.word3, words.word4, words.word5, words.word6, words.word7, words.word8, words.word9, words.word10];
var counter = 0;
var guesses = 12;

var gameWord;
var playerGuess;
var score;

//create empty array for letters already guessed
var guessed = []

//create function that loops through the songs.word array to replace html elements created with dashes or spaces 
function getWord() {

	if (songs == []){

		document.getElementById("word").innerHTML = "Awesome Job!! You guessed" + " " + score + "/10 Disney songs correctly !!"  
	}
	
	else{

		//reset guesses and display
		guesses = 12;
		
		document.getElementById("guesses").innerHTML = guesses

		//randomly loop through songs array to get gameWord
		gameWord = songs[Math.floor(Math.random()*songs.length)]

		console.log(gameWord)

		//begin to loop
		for (var i = 0; i < gameWord.length; i++) { 
			
			var list = document.createElement("div")

			var iDashes = document.createElement("li");

				iDashes.setAttribute("id",i)

			if (gameWord[i] === " "){
					
					iDashes.innerHTML = " " + " " 

					//add to counter for spaces
					counter ++
				}

			else {
					iDashes.innerHTML = "_"  + " "
				}

			list.appendChild(iDashes)

		    document.getElementById("word").appendChild(list)
		};
    }
}

//readying document
document.addEventListener('DOMContentLoaded', function() {

	//start game
	getWord();

	//create variable for player's letter guess, keyboard input and check player guess with word index then replace dash
	document.addEventListener("keyup", function(event) {
		
		//exclude non letter keys
		if (event.which >= 65 && event.which <= 90) {

			playerGuess = event.key

			if (guessed.includes(playerGuess)) {

				alert("Already Guessed !")  
			}
			//show guessed letters in HTML
			else if (gameWord.includes(playerGuess)) {
				
				guessed.push(playerGuess)

				var l = document.getElementById("letters")

				l.innerHTML=guessed.join(" ")
					
				for (var i = 0; i < gameWord.length; i++) { 
				
					if (playerGuess == gameWord[i]) {

						document.getElementById(i).innerHTML = playerGuess
			
						//add counter for correct guesses so that the game knows when there is a win
						counter+=1
			
						console.log(counter)
					}
				}
			}
			else if (gameWord.includes(playerGuess) == false) {

				console.log(playerGuess)
					
				guesses--

				document.getElementById("guesses").innerHTML = guesses

				guessed.push(playerGuess)

				var l = document.getElementById("letters")

				l.innerHTML=guessed.join(" ")
			}
			if (guesses == 0) {

				document.getElementById("results").innerHTML = "Aw! Out of guesses!" +" " + "The song was" + " " + "\"" + gameWord.join("") + "\""

				//reset all html and variables and rerun function
				document.getElementById("word").innerHTML = ""

				document.getElementById("letters").innerHTML = ""
					
				counter = 0;

				guesses = 0;

				guessed = [];
					
				getWord();
			}
			if (gameWord.length === counter) {
			
				document.getElementById("results").innerHTML = "You got it!!!"

				//add to games won
				score++

				//play song for song guessed

				//remove song already played and redisplay new word if all letters are guessed under guess limit
				songs.splice(songs.indexOf(gameWord), 1)

				gameWord = songs[Math.floor(Math.random()*songs.length)]

				console.log(gameWord)

				//reset all html and variables and rerun function
				document.getElementById("word").innerHTML = ""

				document.getElementById("letters").innerHTML = ""
					
				counter = 0;

				guessed = [];

				guesses = 0;
					
				getWord();
			}
		}
	});
});

