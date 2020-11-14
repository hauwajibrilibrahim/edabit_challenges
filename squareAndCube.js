//Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number
function checkSquareAndCube(arr) {
	if (Math.sqrt(arr[0]) == Math.cbrt(arr[1])){
		return true;
	} else {
		return false;
	}
}