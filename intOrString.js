//Create a function that checks if the argument is an integer or a string. Return "int" if it's an integer and "str" if it's a string
function intOrString(param) {
	if (isNaN(param)){
		return 'str';
	} else{
		return 'int';
	}
}