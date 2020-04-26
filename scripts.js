let a = 7;
if (a < 5) {
    console.log(a / 2);
} else {
    console.log(a * 2);
};

//First part//

for (let i = 0; i < 10; i++) {
    console.log(i);
};

for (let i = 1; i <= 10; i++) {
    console.log(i);
};

for (let i = 2; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
};

//údajně by mělo na sudá čísla fungovat i "let i = 0; i < 10; i = i + 2" {
//console.log(i)}


let add = (a, b) => {
    return a+b;
};
console.log(add(1,2)); //= 3

//Exercise 1//

let printNumbersTill = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
};
printNumbersTill(20);

printNumbersTill(15);

//Exercise 2//

let name = 'Mark!';

let getGreetingTo = (name) => {
    return "Hello, " + name;
};
console.log(getGreetingTo(name));

//Exercise 3//

let array = [0, 3, 6, 7, 9];

let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
};
printValues([0, 3, 6, 7, 9]);

//For Loop ...  "for Each"//
let myNumbers = [10, 20, 30, 50, 12];
myNumbers.forEach((number) => {
    console.log(number);
});

let printValues2 = [0, 3, 6, 7, 9];
printValues2.forEach((number) => {
    console.log(number);
});