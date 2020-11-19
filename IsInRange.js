//Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive)
function isInRange(num, range) {
	let min = range.min;
	let max = range.max;
	return (num >= min && num <= max);
}