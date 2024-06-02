const numbers = [89, 35, 98, 12];
const student = {
  name: "salib khan",
  age: 32,
  movies: ["king khan", "Dhakar Mastan"],
};

const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also likes movies ${student.movies[0]}`;
console.log(about);

// jodi single line e arrow function likhi tahole return dite hobe na.
// jodi multyple line e arrow function likhi tahole return dite hobe.

// 2 arrow function
const getFiftyFive = () => 55;
console.log(getFiftyFive());

const getSixtyFive = (num) => num + 65;
console.log(getSixtyFive(5));

const isEven = (x) => x % 2 == 0;
/* const isEven = (x) => {
  if (x % 2 === 0) {
    return "even number";
  }
  return "odd number";
}; */
console.log(isEven(10));

const addThree = (x, y, z) => x + y + z;
console.log(addThree(10, 10, 10));

const doMath = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};

// spread operator
// array moloto refarence take dhore rakhe tai array er copy korar jonno spread operator diye korte hoi.
// const newNumbers = numbers; // evabe dile orginal array teo change hoye jabe
const newNumbers = [...numbers]; // evabe dile orginal array te change hobe na

// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55]; // amra chaile naton kore element jog o korte pari spread korar poreo multiple element chaile comma diye shegulio dite thakbo

numbers.push(99);
numbers.push(99);
numbers.push(99);

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);
