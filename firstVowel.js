//Create a function that returns the index of the first vowel in a string
function firstVowel(str) {
	return str.indexOf(str.match(/[aeiou]/i));
}