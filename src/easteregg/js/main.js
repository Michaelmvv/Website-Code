//Easter Egg JS Code

var textboxvalue = document.getElementById("enterClue")
switch (textboxvalue()) {
	case "Christmas":
		textboxvalue = "Well Done";
		break;
	case "Easter";
		textboxvalue = "Try Again";
		break;		
}
document.getElementById("answer").innerHTML = "" + textboxvalue;