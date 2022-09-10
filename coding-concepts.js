// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
//console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
//console.log(cohort.length)

// a) Your answer: The console log should output the length of the string "LEARN 2022" which has 9 characters inside. The output should be 9.
// b) Verify and explain: The output was 10, I forgot about the space counting as part of the length. 


// --------------------2) What will this log?

const greeting = "Hello World!"
//console.log(greeting[4])

// a) Your answer: This should give the 5th letter in the string "Hello World!" which would be o  
// b) Verify and explain: It did in fact output the letter o as it was the index of 4.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
//console.log(languages[index])

// a) Your answer: It should say just say Ruby, I'm not sure if languages["Ruby"] would do anything differently.
// b) Verify and explain: It does say Ruby. Ruby is the index of 1, and that is what is in the console log.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: It should say SATURDAY, SUNDAY, now uppercased because of the .toUpperCase in the console.log
// b) Verify and explain: It instead came with an error due to ["saturday", "sunday"] being the improper syntax for the .toUpperCase() function. It is an array and the .toUpperCase() should only work with strings. I believe the following is the correct way as I've changed the const to a string.
//const weekendDays = ('saturday, sunday')
//console.log(weekendDays.toUpperCase())
//output: SATURDAY, SUNDAY


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: To be honest I'm not sure, I think it could output 3, as it's the length of strings in the array. Or it could output object as the 3 strings in the array would be an object the 'typeof' is identifying. I'm not confident with either answer as I think something different happens when the two 'typeof' and '.length' are mixed.
// b) Verify and explain: The output was "number". I believe this is the output because it first determined the '.length' which was 3, and then output the 'typeof' of the number 3 which is of course a number. I'm not confident this is the correct explanation, and am struggling to find additional resources on the offical explanation on this so if I'm way off here, please let me know, thanks!