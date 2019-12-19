// ** go find my html elements and give them a variable/El name to work with in the script;
var outputEl = document.getElementById("passwordOutput");
var lengthEl = document.getElementById("lengthInput");
var lowerCaseEl = document.getElementById("lowerCaseCheckbox");
var upperCaseEl = document.getElementById("upperCaseCheckbox");
var numericalEl = document.getElementById("numericalCheckbox");
var specialEl = document.getElementById("specialCheckbox");
var generateEl = document.getElementById("generate");
var clipboardEl = document.getElementById("clipboard");

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// to log the function you need the open parentheses after the function;
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

generateEl.addEventListener("click", function() {
	var length = +lengthEl.value;
	var hasLower = lowerCaseEl.checked;
	var hasUpper = upperCaseEl.checked;
	var hasNumerical = numericalEl.checked;
	var hasSpecial = specialEl.checked;
	// console.log(length, hasLower, hasUpper, hasNumerical, hasSpecial);
	outputEl.innerText = generatePassword(
		hasLower,
		hasUpper,
		hasNumerical,
		hasSpecial,
		length
	);
});

function generatePassword(lower, upper, numerical, special, length) {
	var resultArr = [];
	if (lower === true) {
		resultArr.push(getRandomLower());
	}
	if (upper === true) {
		resultArr.push(getRandomUpper());
	}
	if (numerical === true) {
		resultArr.push(getRandomNumerical());
	}
	if (special === true) {
		resultArr.push(getRandomSpecial());
	}
	// console.log(resultArr);
	var newPassword = "";
	for (i = 0; i < length; i++)
		newPassword += resultArr[Math.floor(Math.random() * resultArr.length)];
	return newPassword;
}
