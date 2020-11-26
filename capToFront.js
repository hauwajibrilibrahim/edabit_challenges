//Create a function that moves all capital letters to the front of a word
function capToFront(str) {
	let lowerCase = [...str].filter(l => l === l.toLowerCase())
	let upperCase = [...str].filter(l => l === l.toUpperCase())
	return [...upperCase,...lowerCase].join("")
}