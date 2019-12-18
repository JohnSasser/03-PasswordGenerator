// ** go find my html elements and give them a variable/El name to work with in the script;
var outputEl = document.getElementById("passwordOutput");
var lengthEl = document.getElementById("lengthInput");
var lowerCaseEl = document.getElementById("lowerCaseCheckbox");
var upperCaseEl = document.getElementById("upperCaseCheckbox");
var numericalEl = document.getElementById("numericalCheckbox");
var specialEl = document.getElementById("specialCheckbox");
var generateEl = document.getElementById("generate");
var clipboardEl = document.getElementById("clipboard");

// set up a variable to create a key out of the checked box values;
var randomFunction = {
	lower: getRandomLower,
	upper: getRandomUpper,
	numerical: getRandomNumerical,
	special: getRandomSpecial
};
// console.log(randomFunc);
clipboardEl.addEventListener("click", function() {
	var copyText = document.getElementById("passwordOutput");
	copyText.select();
	/*For mobile devices*/
	copyText.setSelectionRange(0, 99999);
	/* Copy the text inside the text field */
	document.execCommand("copy");
	/* Alert the copied text */
	alert("Copied your new password");

	// var copyPassword = document.querySelector("#passwordOutput");
	// copyPassword.querySelector("#passwordOutput");
	// document.execCommand("copy");
	// alert("You're new password has been copied to the clipboard!");
});

// check the current value of the checkboxes and
// length of characters that the user is requesting.
generateEl.addEventListener("click", function() {
	var length = parseInt(lengthEl.value);
	var checkedLower = lowerCaseEl.checked;
	var checkedUpper = upperCaseEl.checked;
	var checkedNumerical = numericalEl.checked;
	var checkedSpecial = specialEl.checked;
	// set up the function to return the values that
	// will be generated below where the function is run/defined.
	outputEl.innerText = generatePassword(
		checkedLower,
		checkedUpper,
		checkedNumerical,
		checkedSpecial,
		length
	);
});

function generatePassword(lower, upper, numerical, special, length) {
	// init pasWord var
	// filter out unchecked
	// loop over the length
	// add final password to var and return
	var emptyPassword = "";
	// typesCount will allow us to loop through the checked state values
	var typesCount = lower + upper + numerical + special;
	// typesArray is an array with object keys providing a boolean value to the checked states. they are then removed by the .filter() operator of any unchecked/false values.
	var typesArray = [{ lower }, { upper }, { numerical }, { special }].filter(
		item => Object.values(item)[0]
	);
	console.log("typesArray: ", typesArray);

	if (typesCount === 0) {
		return "nonsense, you want a password, don't you?";
	}

	for (var i = 0; i < length; i += typesCount) {
		typesArray.forEach(type => {
			// funcName is in the position of the current typesArray key index position;
			var funcName = Object.keys(type)[0];
			// console.log("funcName: ", funcName);

			// adding the new character to the empty string;
			emptyPassword += randomFunction[funcName]();
		});
	}
	var resultPassword = emptyPassword.slice(0, length);
	console.log(resultPassword);
	return resultPassword;
}

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// ** to log the function you need the open parentheses after the function; **
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumerical() {
	return String.fromCharCode(Math.random(Math.floor() * 10) + 48);
}
function getRandomSpecial() {
	var specials = "!@#$%^&*()<>?:';/.,;";
	return specials[Math.floor(Math.random() * specials.length)];
}
