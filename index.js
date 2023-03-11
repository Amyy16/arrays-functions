// 1. What are the differences between mutating array methods and non-mutation array methods in JavaScript.
//    Mutating methods are ones that change the object after the method has been used. 
//    Non-mutating methods do not change the object after the method has been used.
//    some of them mutate the array (changes the original array) whereas some of them create a new array.


// List 5 array methods that fall under each of them.
// Mutating Methods
// array.pop()
// array.push()
// array.shift()
// array.sort()
// array.splice()
// array.unshift().

// Non-Mutating Methods
// concat()
// filter()
// flat()
// flatMap()
// map()


// No. 2

let languages = ["C#", "Javascript", "Ruby", "PHP", "Python"];

// 1.
languages.push("kotlin")
// console.log(languages);

// //2.
languages.splice(3, 0, "Java")
// console.log(languages);

// // 3.
languages.shift()
// console.log(languages);

// // 4.
languages.splice(0, 0, "Scala", "swift")
// console.log(languages);

// //5.
languages.splice(3, 1, "Go", "Rust")
// console.log(languages);


// No. 3
let fruit = ['apple', 'mango', 'banana'];
function changeFruit( fruit ) {
		fruit[2] = "orange";
		return fruit;
}

// console.log(fruit);
// The value of fruit is given as:  ['apple', 'mango', 'banana']


// No. 4
function Array(array) {
    let maxNumber = array[0];
   
    for (let i = 1; i < array.length; i++) {
       if (array[i] > maxNumber)
           maxNumber = array[i];
    }
   
    return maxNumber;
   }

let array = [24, 170, 350, 650, 1450, 200, 15]

console.log("Largest in the array is " + Array(array));


// No. 5

function valTimesIndex(_value) {

}

// let new_array = [1, 3, 5, 7, 9]
// console.log(valTimesIndex(new_array))


function valTimesIndex(array2) {
    return array2.map(function(value, index) {
      return value * index;
    });
}

let input = [2, 4, 6, 8, 10];
let output = valTimesIndex(input);
console.log(output); 
