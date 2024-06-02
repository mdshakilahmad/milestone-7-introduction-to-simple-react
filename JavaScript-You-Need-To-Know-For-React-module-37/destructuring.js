//1. array destructuring
// array er khetre destructuring er name er belar serial onojayi dite hobe
// orthat first name er jonno 0 index second name er jonne 1 index evabe dhorbe
// destructuring er dan pashe shorasori value dileo hobe na thakleo hobe kono ekta varibale thakleo hobe destructuring

const numbers = [42, 65];
// const x = number[0]; // eivabe kora ta jhamle tai niche destructuring dekhbo
// const y = number[1]; // eivabe kora ta jhamle tai niche destructuring dekhbo

// const [x, y] = [42, 65];  // eta kinto destructuring korche

const [x, y] = numbers; // ar eta oporer 6 number line er motoni tobe ekhane variable use kora hoiche oi vitore same e
console.log(x, y);

// ekhon ekto kothin vabe kori
// keo jodi ei duita parameter diye dei tahole ei function take array baniye chere dibe
function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}

// const [first, second] = [90, 34];
const [first, second] = boxify(90, 34); // etao kinto destructuring hobe

const student = {
  name: "salib khan",
  age: 32,
  movies: ["king khan", "Dhakar Mastan"],
};

// const [firstMovie, secondMovie] = ["king khan", "Dhakar Mastan"];
const [firstMovie, secondMovie] = student.movies;

console.log(boxify(90, 34));

//2. object destructuring
// object er khetre serial kono bisoy na
const { name, age } = { name: "alu", age: 14 };
// const { name, age } = {id:12 name: "alu", age: 14 };

const employee = {
  ide: "Vs code",
  designation: "developer",
  machine: "mac",
  languages: ["html", "css", "js"], // eta jeheto array tai etar belai array destructuring korte hobe
  // dui lavel kinto ekbare destructuring korte parbo na
  specification: {
    height: 66,
    weight: 67,
    address: "kumarkhali",
    drink: "water",
    watch: {
      color: "black",
      price: 500,
      brand: "garmin",
    },
  },
};

const { machine, ide } = employee;

// const { weight, address } = employee;  // dui lavel kinto ekbare destructuring korte parbo na
const { weight, address } = employee.specification; // ekhon hobe

// const { brand } = employee.specification.watch;
const { brand } = employee?.specification?.watch; // optional chaining dilam karon ei employee te ache specification jodi aro employee nitam tahole shekhane jodi na thakto tahole evabe nibo nahole na thakle undefined diye dibe
