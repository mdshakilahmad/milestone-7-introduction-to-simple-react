// JSON = stringify , parse
const student = {
  name: "Salib Khan",
  age: 32,
  movies: ["king khan", "Dhakar Mastan"],
};

const studentJSON = JSON.stringify(student); // kono ekta object ke JSON er string e convert korlam
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON); // JSON er string thaka obosthai ami JSON.parse kore javascript er object baniye fellam
// console.log(studentObj);

// 2 fetch
// amra async await 95% use korbo
/* fetch("url")
  .then((res) => res.json())
  .then((data) => console.log(data));
 */

// keys, values
const keys = Object.keys(student); // jodi array akare pete chai tahole evabe dibo
console.log(keys);
const values = Object.values(student);

// for
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach((num) => console.log(num)); // jodi return na pete chai tahole forEach korbo
numbers.map((num) => num * 2);

// for of on array like object
// loop on an object using for in

// add or remove from an array
const products = [
  { name: "laptop", price: 3200, brand: "len", color: "silver" },
  { name: "phone", price: 7000, brand: "HTC", color: "golden" },
  { name: "watch", price: 3000, brand: "casio", color: "yellow" },
  { name: "sunglass", price: 300, brand: "ray", color: "black" },
  { name: "camera", price: 9000, brand: "canon", color: "gray" },
];

const newProduct = { name: "webcam", price: 700, brand: "Lal" };
// copy products array and then add newProduct
const newProducts = [...products, newProduct]; // product take copy korlam pasha pashi newProduct add kore nilam speard operator er maddhome
console.log(newProducts);

//create a new array withut one specific item
//remove phone means create a new array withut the phone
const remaining = products.filter((product) => product.name !== "phone"); // jeguli te phone nai shegula niye nichi
console.log(remaining);
