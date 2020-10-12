//Create a function that takes voltage and current and returns the calculated power
function circuitPower(voltage, current) {
	return voltage * current;
}

//Create a function that takes a number as an argument, increments the number by +1 and returns the result
function addition(num) {
	return num + 1;
}

//Given a 10x10 grid of numbers 1-100, return the Spotlight Sum, given a number n. The spotlight sum can be defined asthe total of the 8 numbers immediately surrounding the number n on the grid, including n in the total.
const spotlightSum = n => n * 9;

//Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order
function minMax(arr) {
	return [Math.min(...arr), Math.max(...arr)];
}

//Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false
function lessThanOrEqual(num) {
  if(num <= 0)
        return true;
  else
        return false;
}  

//Create a function that returns true when num1 is equal to num2; otherwise return false
function isSameNum(num1, num2) {
	if (num1 === num2){
		return true;
	}else{
		return false;
	}
}