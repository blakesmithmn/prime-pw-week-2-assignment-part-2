// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// we set a variable under name - using the string Dane
// next, we have a conditional that checks the variable 'name' to see if it matches exactly to 'Mary'
// if our name was Mary, it would print 'Hi Mary!' to the console log ... however, our name is Dane! SO
// our 'else' catches this and the console log introduces itself to us by printing 'How do you do?'
// as stated above the final log would be 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Here we start out with an undefined variable secret - it does not have a value YET
// we also introduce the variable code with the numberic value of 123
// our conditional checks to see if the variable 'code' matches the numeric value 123 (exactly) and it does!
// in this case - it assigns the value 'super' to the variable secret established in line 56, while aslo reassigning
// the value of code to twice itself. Since the new value of code is LESS THAN 250 ... the value of secret is unchanged!
// if the value of 'code' heading into line 68 would have been greater than 250 the value of secret would have changed to 'duper' along with the final log
//the final log of the variable secret is 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// here we start by setting the variable 'isStudent' to the boolean value true, also set variable age to 
// the numeric value 34, and also setting our zip variable to 55407 - another numeric value.
// our conditional is first checking that our student status is exactly true, while also checking to see if our zip code value is greater than 80000
// if both of those statements were true it would log that we are a student on the west coast!
// the else if means if that first 'if' is not applicable ... try this one! this time it is checking to see if we are not a student, or under the age of 30
// if EITHER of those statements are true it will log asking "what are your Hobbies?"
//finally - our else will check for any other potential outcomes of the answers - and simply default to asking about the weather.
// this conditional will end up logging "How about the weather?" since none of the other conditionals apply to our demographic

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// colorOne should be set to 'blue'
let colorOne = 'red';
// colorTwo should be set to 'red'
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  //missing code below
  colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
// as stated above it is a variable not a constant - let time = 4;
const time = 4;

// the conditional below is using the OR (||) ... we should be using AND &&
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
//once again this is stated as a constant but should be a variable ... let minAge = 21;
const minAge = 21;


// i would flip this around? i'm not sure it's the answer but it makes much more sense ...?
if (age >= minAge) {
  console.log('enter');
} else {
  console.log('no entry');
}




if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

