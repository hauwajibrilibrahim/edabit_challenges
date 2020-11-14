//Create a function that returns how many possible outcomes can come from a certain number of switches (on / off). In other words, for a given number of switches, how many different combinations of on and off can we have?
function posCom(num) {
	return Math.pow(2, num)
}