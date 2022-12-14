// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create the code that determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create the code that determines if a given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process: I created a conditional else if statement using the constant variable "temp" to determine if the number inputted is 212, above 212, or below 212. Using an if statement if "temp" is exactly equal to (using ===) 212 then the console log, using string interpolation to retrieve the number inputted in the constant variable, will say "212 is at boiling point". I then used else if statements to see if temp is below 212 (using <) or above 212 (using >). Finally I added a final else to output an Error! if anything else was in the "temp" variable.


const temp = 42
if (temp === 212) {
    console.log (`${temp} is at boiling point`)
} else if (temp < 212) {
    console.log (`${temp} is below boiling point`)
} else if (temp > 212) {
    console.log (`${temp} is above boiling point`)
} else {
    console.log ("Error!")
}

// Expected output: "42 is below boiling point"

// const temp = 350
// if (temp === 212) {
//     console.log (`${temp} is at boiling point`)
// } else if (temp < 212) {
//     console.log (`${temp} is below boiling point`)
// } else if (temp > 212) {
//     console.log (`${temp} is above boiling point`)
// }
//
// Expected output: "350 is above boiling point"

// const temp = 212
// if (temp === 212) {
//     console.log (`${temp} is at boiling point`)
// } else if (temp < 212) {
//     console.log (`${temp} is below boiling point`)
// } else if (temp > 212) {
//     console.log (`${temp} is above boiling point`)
// }
//
// Expected output: "212 is at boiling point"


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process: I used .concat to add the 1998 array to the 1984 array. After that I added a console.log with the 1984 array with .length at the end, and added (using +) the 1998 array also with .length at the end, to get the combined length of both arrays which is 9.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns));
console.log(padres1984WorldSeriesRuns.length + padres1998WorldSeriesRuns.length)


// Expected output: 9


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process: I put first put currentCohort into a console.log with the split accessor to split the string into an array, as the reverse function would not work with a string. Now that "Foxtrot 2022" is split and seperated into an array, I used .reverse to reverse the array. Finally I used .join to reconnect the now reversed array back into a string to output 2202 tortxoF.

const currentCohort = "Foxtrot 2022"
console.log(currentCohort.split("").reverse("").join(""))


// Expected output: "2202 tortxoF"


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process: To return the last index of a given value from this array we must use lastIndexOf in the console log, as there are repeat numbers and using indexOf would bring us the first value which is not what we want. 

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
console.log(myNumbers.lastIndexOf(givenValue1))
// Expected output: 7

const givenValue2 = 10
console.log(myNumbers.lastIndexOf(givenValue2))
// Expected output: 8


// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process: I first put the variable sanDiegoSummerTemperatures inside of a console.log and then used the .sort accessor to sort the numbers in order. This gave me the array that was from smallest to largest, so similarily with question #3 I added another accessor to the console log to reverse the order to largest to smallest which was .reverse.  

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
console.log(sanDiegoSummerTemperatures.sort().reverse())
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
console.log(sanDiegoWinterTemperatures.sort().reverse())
// Expected output: [68, 67, 66, 66, 62, 59, 59]
