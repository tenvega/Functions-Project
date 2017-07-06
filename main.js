// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.
// Your answer here
function max(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(max(3, 2));


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.
// Your answer here
function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num3) {
    return num1;
  } else {
    return num2 || num3;
  }
}
console.log(maxOfThree(3, 2, 1));


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char) {
  if (char === "a" || "A") {
    return true;
  } else {
    return false;
  }
}
console.log(isVowel("A"))


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(a, b) {
  return a + b
}
console.log(sum(3, 2));



// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(x, y, z) {
  return (x + y + z) / 3
}
console.log(avg(23, 45, 57));



// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(x) {
  return x.length;
}
console.log(getLength("lion"));


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(m, n) {
  if (m > n) {
    return true;
  }
}
console.log(greaterThan(3, 2));



// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(name){
  return "hello, " + (name);
}
console.log(greet("Enoc"));


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
var names = ["Enoc ", "Ana ", "Micol "];
var verbs = ["dreams ", "yells ", "flies "];
var phrases = ["so crazy  ", "was eaten by a molusc ", "jumping across the street "];
var nouns = ["tiger", "computer", "coconut"];
// (Math.floor(Math.random()*3)+1)
function rand() {
  return Math.floor(Math.random() * 3)
}

function madlibs(name, verb, phrase, noun) {
  return name + verb + phrase + noun;
}
console.log(madlibs(names[rand()], verbs[rand()], phrases[rand()], nouns[rand()]));
