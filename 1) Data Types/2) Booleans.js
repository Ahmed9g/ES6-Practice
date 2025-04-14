

/**
 * 
 * Booleans are true and false
 * 
 * they are used for decision making in programming
 */

console.log(true);
console.log(false);


var shouldBetrue = true

if(shouldBetrue === true){
    console.log("It will run");
} else {
    console.log("It won't run");
}



// // the following will always evaluate to true

var hasContent = "something"

var isOne = 1
var isTrue = true


console.log(Boolean(isOne));
console.log(Boolean(hasContent));


// // the following will always evaluate to false

var diesNotHaveContent = ""
var isZero = 0
var isFalse = false
var isUndefined = undefined
var isNull = null
var nonInitializedVar 
var ISNAN = NaN



console.log(Boolean(nonInitializedVar));
console.log(Boolean(ISNAN));


// // Array

var myArray = [1,3, 6, "Hi there"]

console.log(myArray);