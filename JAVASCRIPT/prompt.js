// const prompt = require('prompt-sync')()

// let userName = prompt('Enter your name')

// console.log(`Hello, ${userName}! Welcome to the JavaScript class.`)


                        // CLASS WORK
// Create a variable num that accepts user input and write a logic that check i the user input is a prime number.

let num = prompt("Enter a number:  ")

if(num % 2 != 0 && num % 3 != 0 && num % 5 != 0 && num % 7 != 0) {
    console.log(`${num} is a prime number.`)
} else if(num === 2 && num === 3 && num === 5  && num === 7 ) {
    console.log(`${num} is a prime number.`)
} else {
    console.log(`${num} is not a prime number`)
}

