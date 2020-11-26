//Create a function that squares every digit of a number
function squareDigits(n) {
	let arr = String(n).split('')
	return +arr.map(num => Math.pow(+num, 2)).join('')
}