//Given a string of numbers separated by a comma and space, return the product of the numbers
function multiplyNums(nums) {
	return Number(nums.split(', ').reduce((a , b) => a * b));
}