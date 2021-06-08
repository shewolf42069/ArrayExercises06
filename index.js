//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//a) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];
let table = [];
let namesLower = [];
let namesUpper = [];
let namesX = [];
let names1 = ["Bob", "Joe", "Ted"];
let names2 = ["Sam", "Fred", "Tom"];
let names3 = ["Ed", "Tim", "Mike"];
let names4 = ["Robert", "Joseph", "Teddy"];
let names5 = ["Samuel", "Frederic", "Thomas"];
let names6 = ["Edward", "Timothy", "Michael"];


//b) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
table.push(element1,element2,element26);
console.log(table);
console.log("table created");

namesLower.push(names1,names2,names3);
console.log(namesLower);
console.log("this is namesLower");
namesUpper.push(names4,names5,names6);
console.log(namesUpper);
console.log("this is namesUpper")
namesX.push(namesLower,namesUpper);
console.log(namesX);
console.log("this is 3 dim names");
//c) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(table[0][0]);
console.log(table[1][1]);
console.log(table[2][2]);
console.log("printing 00 11 22");

console.log(table[0]);
console.log(table[1]);
console.log(table[2]);
console.log("printing 0 1 2");
//d) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log(table[0][2]);
console.log(table[1][0]);
console.log(table[2][1]);
console.log("printing requested data");
//e) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
console.log(namesX[0][0][0], namesX[1][0][0]);
console.log(namesX[0][0][1], namesX[1][0][1]);
console.log(namesX[0][0][2], namesX[1][0][2]);
console.log(namesX[0][1][0], namesX[1][1][0]);
console.log(namesX[0][1][1], namesX[1][1][1]);
console.log(namesX[0][1][2], namesX[1][1][2]);
console.log(namesX[0][2][0], namesX[1][2][0]);console.log(namesX[0][2][1], namesX[1][2][1]);
console.log(namesX[0][2][2], namesX[1][2][2]);
