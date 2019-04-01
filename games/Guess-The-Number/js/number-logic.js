const number = Math.floor(Math.random() * 50000 + 1);
var tried = 1;
var tip = null;
var cheat = 9547950611;
function guessNumber(){
	var guessField = document.getElementById("guessed");
	var reloadButton = document.getElementById("reloadButton");
	var submitButton = document.getElementById("guessButton");
	var guess = guessField.value;
	if(guess >= 1 && guess <=50000){
		if (guess == number) {
			tip = "Congrats! You Guessed the right number "+number+" in "+tried+" guesses!!!";
			guessField.style.visibility = 'hidden';
			reloadButton.style.visibility = 'visible';
			submitButton.style.visibility = 'hidden';
		}

		else if(guess > number){
			tried++;
			tip = "Sorry Dear! Try a SMALLER Number!";
			guessField.placeholder = guess;
			guessField.value = null;
		}
		else{
			tried++;
			tip = "Sorry Dear! Try a GREATER Number!";
			guessField.placeholder = guess;
			guessField.value = null;
		}
	}
	else if (guess == cheat) {
			confirm("You Cunning Human! The Number is "+number);
		}
	else{
		alert("Please Enter a Valid whole Number Between 1 and 50000");
	}

	document.getElementById("tips").innerHTML = tip;
}
document.getElementById("guessButton").addEventListener("click", function(event){
    event.preventDefault();
});
