//create needed variables

var word1 = ["h","a","k","u","n", "a"," ", "m", "a", "t","a","t", "a"];
var word2 = ["a", " ", "w", "h", "o", "l","e", " ", "n", "e", "w", " ", "w", "o", "r", "l", "d"];
var word3 = ["u", "n", "d", "e", "r", " ", "t", "h", "e", " ", "s", "e", "a"]
var word4 = ["c", "o", "l", "o", "r", "s", " ", "o", "f", " ", "t", "h", "e"," ", "w", "i", "n", "d"]
var word5 = ["l", "e", "t", " ", "i", "t", " ", "g", "o"]
var word6 = ["i", " ", "j", "u", "s", "t", " ", "c", "a", "n", "t", " ", "w","a", "i", "t", " ", "t" , "o", " ", "b", "e", " ", "k", "i", "n", "g"]
var word7 = ["r", "e", "f", "l", "e", "c", "t", "i", "o", "n"]
var word8 = ["j", "u", "s", "t", " ", "a", "r", "o", "u", "n", "d", " ", "t","h", "e", " ", "r", "i" , "v", "e", "r", "b", "e", "n", "d"]
var word9 = ["y", "o", "u", "l", "l", " ", "b", "e", " ", "i", "n", " ", "m","y", " ", "h", "e", "a" , "r", "t"]
var word10 = ["c", "a", "n", " ", "y ", "o", "u", " ", "f", "e", "e", "l", " ","t", "h", "e", " ", "l" , "o", "v","e", " ", "t", "o","n","i", "g","h","t"]
var songs = [word1, word2, word3, word4, word5, word6, word7, word8, word9, word10];
var counter= 0;

//randomly loop through songs array to get gameWord
var gameWord = songs[Math.floor(Math.random()*songs.length)]
console.log(gameWord)

//readying document
document.addEventListener('DOMContentLoaded', function() {

//create empty array for letters already guessed
var guessed = []

//loop through the word array to replace html elements created with dashes 
for (var i = 0; i < gameWord.length; i++){ 
		var list = document.createElement("div")
		var iDashes = document.createElement("li");
		iDashes.setAttribute("id",i)
		iDashes.innerHTML = "_ "
		list.appendChild(iDashes)
    	document.body.appendChild(list)
   	}; 

//create variable for players letter guess, keyboard input and check player guess with word index then replace dash
document.addEventListener("keyup", function(event){
	var playerGuess=event.key
	for (var i = 0; i < gameWord.length; i++){ 
	if (playerGuess == gameWord[i]){
	document.getElementById(i).innerHTML = playerGuess
	//add counter for correct guesses
	counter+=1
	console.log(counter)
		}
		if (gameWord.length ===counter){
	alert("you got it")

//remove song already played and redisplay new word if all letters are guessed under guess limit
songs.splice(songs.indexOf(gameWord), 1)
gameWord = songs[Math.floor(Math.random()*songs.length)]
console.log(gameWord)
var t =document.getElementById(i)
t.parentNode.removeChild(iDashes)

//learn how to clear old word and guessed letters
//loop through the word array to replace html elements created with dashes 
for (var i = 0; i < gameWord.length; i++){ 
		var list = document.createElement("div")
		var iDashes = document.createElement("li");
		iDashes.setAttribute("id",i)
		iDashes.innerHTML = "_ "
		list.appendChild(iDashes)
    	document.body.appendChild(list)
   	}; 
//play song for song guessed
}
		else {console.log(playerGuess)
	   			 }
	   		}
//show guessed letters in HTML
guessed.push(playerGuess)
		var l= document.getElementById("letters")
		l.innerHTML=guessed.join(" ")

//need to not reprint letters that have already been guessed

});
});

/*
//NEW WORD CODE BLOCK


//create variable for players letter guess, keyboard input and check player guess with word index then replace dash
document.addEventListener("keyup", function(event){
	var playerGuess=event.key
	for (var i = 0; i < gameWord.length; i++){ 
	if (playerGuess == gameWord[i]){
	document.getElementById(i).innerHTML = playerGuess
	counter+=1
		}
		else {console.log(playerGuess)
	   			 }
	   		}
//show guessed letters in HTML
guessed.push(playerGuess)
		var l= document.getElementById("letters")
		l.innerHTML=guessed.join(" ")

//need to not reprint letters that have already been guessed

});

//add number of guess remaining
//create variables for games won
//created variables for games lost
// add limit to guess 18 letters thta can be pressed
}
});
*/