//Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
//Total number of slices.
//Number of recipients.
//How many slices each person gets.

//The function will be in this form:
//equalSlices(total slices, no. recipients, slices each)

function equalSlices(total, people, each) {
	return (people * each) <= total
}