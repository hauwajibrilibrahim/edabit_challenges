//Create a function that takes a string and returns a string in which each character is repeated once
function doubleChar(str) {
  return str.split('').map(x => x + x).join('');
}
