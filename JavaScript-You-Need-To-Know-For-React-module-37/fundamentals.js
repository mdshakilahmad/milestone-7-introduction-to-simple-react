// 1. how to declare a variable using let and const :
const fatherName = "Arnold";
let season = "rainy";
season = "winter";
// orthat jodi kono ekta variable er manta jodi change houar ashongkha thake tahole let diye korbo
// ar jodi manta jodi change houar ashongkha na thake tahle const diye korbo
// ar var namer jinishta matha theke otamoti jhere felte hobe

// 2. conditons
// 6 basic conditions: >, <, ===, !==, <=, >=
// multiple conditions: &&, ||

if (fatherName === "Arnold" || season === "rainy") {
} else if (fatherName === "Arnold") {
} else {
}

// 3. Array declare :
// index
// length, push
const numbers = [89, 35, 98, 12];
numbers[0] = 56;

// 4. for loop :
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

// 5. function :
function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}

const result = multiply(5, 2);
console.log(result);

// 6. object :
// 3 ways to Access property by name
const student = {
  name: "salib khan",
  age: 32,
  movies: ["king khan", "Dhakar Mastan"],
};

const myVariable = "age";
console.log(student.age); // direct by property
console.log(student["age"]); // Access via property name string
console.log(student[myVariable]); // Access via property name in a variable
