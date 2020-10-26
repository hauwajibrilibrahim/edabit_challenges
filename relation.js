//Write a function that determines if the relation is true or false
function isTrue(relation) {
	return eval(relation.replace("=","=="))
}