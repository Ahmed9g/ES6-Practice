/**
 * JS Objects
 * 
 * Objects are collections of name-value pairs
 * 
 * syntax:
 * var myObj = {1: "Chris"} // 1 is the key and Chris is the value
 */


// // traditional way to make objects
// var myObj = new Object();

// console.log(myObj);
// console.log(typeof myObj);

// // // filling in the values 

// myObj['1'] = "Ahmed"
// myObj['10'] = "Huzaifa"
// myObj['3'] = "ALi"
// myObj['7'] = "Sara"
// myObj['fifthKey'] = "Polina"

// console.log(myObj);

// // // accessing values in objects

// console.log(myObj['1']); // Ahmed

// var myName = myObj['1']

// console.log(myName);

// console.log(myObj['fifthKey']);

// // // accessing alphabetical keys with dot operator

// console.log(myObj.fifthKey); // Polina
// console.log(myObj.1); // x NOT THE RIGHT WAY


// // Modern way to make objects


var myObj = {
    1: "Ahmed",
    10: "Huzaifa",
    3: "ALi",       
    7: "Sara",
    fifthKey: "Polina"

}

console.log(myObj['3']);

myObj['3']= "Ehab";
console.log(myObj['3']);


var demoObject = {
    firstName: "Ahmed",
    lastName: "Sayed",
    age: 23,
    maritialStatus: "single",
    phNo: {
        home: 1234567890,
        office: 123121,
    },
    address: {
        home:"abc street, egypt",
        office:" ssss street, egypt",
    }
}


// console.log(demoObject[address{'home'}]);

console.log(demoObject.address.office);