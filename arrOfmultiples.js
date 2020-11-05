//Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length
const arrayOfMultiples = (num, length) =>
  Array.from({ length }, (_, i) => num * (i + 1));