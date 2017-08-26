/*theme hip hop rap songs*/
/*display values of the array hidden and underlining each letter*/

var word1 = ["s","i","l","l","y"];
var word2 = ["C", "R", "A", "N", "K","D", "A", "T"];
var songs = [word1, word2];
var dashes = ["_ "]
var playerOptions =["a","b","c","d","e","f","g","h","i","j","k","l","m","o","p","q","r","s","t","u","v","w","x","y","z"]


//"WALK IT OUT", "TEACH ME HOW TO DOUGIE", "STANKY LEGG", "IN DA CLUB", "LEAN BACK"];


//display dashes that are the same length as the hangman word
for (var i = 0; i < word1.length; i++){ 
			word1[i] = "_ "

		}

		document.getElementById()
//create variable for players letter guess, keyboard input 
document.onkeyup = function(event){

//makes note of the key on the event param of above function
		var playerGuess = event.key;
}
//create function to check if playerGuess is in word1
function letterCheck(letter){

			if 		(word1.indexOf(letter)===-1){

					return(false)
					}
			else if (word1.indexOf(letter) === undefined){
					return(false)
					}
			else 	{
					return(true)
					}
		
}


//when letterCheck function comes back true we want the playerGuess to replace a dash in dashes
//when 
//if letterCheck == true   replace i with  where word1.indexof(playerGuess) = true replace i where i=word1.indexOf(playerGuess)
//if letterCheck == true









