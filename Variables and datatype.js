// // Declare a variable age and assign it your age
let age = 58;
console.log(age);

//difference between let const and var
// These three keywords are used to declare a variable but have different scope like let is to used to declare a variable but it is blocked scope whereas var is to used to declare a variable but it is globally scoped and we use const to declare a value which is fixed

//swap numbers
let a = 20,b=10, temp;
console.log(`before swapping: a= ${a}`);
console.log(`before swapping b= ${b}`);
temp = a;
a = b;
b = temp;
console.log(`after swapping a= ${a}`);
console.log(`after swapping b= ${b}`);