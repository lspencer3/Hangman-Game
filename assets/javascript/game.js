/*theme hip hop rap songs*/
/*display values of the array hidden and underlining each letter*/

var word1 = ["s","i","l","l","y"];
var word2 = ["C", "R", "A", "N", "K","D", "A", "T"];
var songs = [word1, word2];
var dashes = ["_ "];
var indexes =[];
var playerOptions =["a","b","c","d","e","f","g","h","i","j","k","l","m","o","p","q","r","s","t","u","v","w","x","y","z"];
//"WALK IT OUT", "TEACH ME HOW TO DOUGIE", "STANKY LEGG", "IN DA CLUB", "LEAN BACK"];


//display dashes that are the same length as the hangman word by pushing to new array at same size
var dashDiv =document.createElement("div")
dashDiv.setAttribute("id", "dash")
var newDashArray = [];
for (var i = 0; i < word1.length; i++){ 
	var d= newDashArray.push(dashes[0])

}

//document.getElementById("stuff").innerHTML = "d"

//create variable for players letter guess, keyboard input

document.addEventListener("keyup", function(event){
	var playerGuess = (event.key);
	letterCheck(playerGuess);
})



//create function to check if playerGuess is in word1
function letterCheck(letter){

			if 		(word1.indexOf(letter)===-1){

					return false
					}
			else if (word1.indexOf(letter) === undefined){
					return false
					}
			else 	{
					return true
					}
		
}

function getAllIndexes(arr, val) {
    i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;

}


//var indexes = getAllIndexes(Cars, "Nano");

//if statement that replaces dash of the new array with the letters from player guess when lettercheck is true
//set playerGuess == newDashArray[i]

//var dashIndex = newDashArray.indexOf("_ ");
//if (letterCheck == true ){word1.forEach(function(){})

	//create function to return indexes and values
//when value matches letter check/playerGuess
//run function to return indexes and values of dashes array
//update dashes array where indexes= indexs of 







