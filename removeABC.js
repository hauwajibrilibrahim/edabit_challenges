//Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null
function removeABC(str) {
	const res = str.replace(/[abc]/gi, "");
	return res === str ? null : res;
  }