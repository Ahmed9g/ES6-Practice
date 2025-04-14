

// ctrl + / to make a comment
// we are learning modern JavaScript its called ES6, research more on ES6


console.log("Hi there");

console.log(10); // number
console.log("10"); // string


// // typeof to check the data type

console.log(typeof 10);
console.log(typeof "10");


// // JS can do Math for us

console.log(10 + 9);


// //  MODULUS OPERATOR %

console.log(10 / 3);


console.log(10 % 3);


console.log(10 % 5); // 0

// // JS has inbuilt Math object

console.log(Math);

console.log(Math.random()); // it generates a random number between 0 and 1

console.log(Math.PI);

console.log(Math.floor(5.67));


console.log(Math.round(5.47));


// // try to generate a random number in between 0 and 10
// console.log(Math.floor(Math.random()));

// console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));

// // concatenation
console.log("21" + 10); // 2110

// parseInt("string") it converts the string number to an actual number

console.log(parseInt("21") + 10);

// // isNaN() is not a number

console.log(isNaN("Hello")); // true
console.log(isNaN(10)); // false
console.log(isNaN("10")); // false


// added commit
// // strings
// // sequesces of unicode characters

console.log("Hello");
console.log("Hello".length );

console.log("Hello Ahmed".length);

console.log("Hi There".charAt(1)); // i
console.log("Hi There".charAt(6)); // r

console.log("hi i should be in uppercase".toUpperCase());

console.log('THIS SHOULD BE IN LOWERCASE'.toLowerCase());