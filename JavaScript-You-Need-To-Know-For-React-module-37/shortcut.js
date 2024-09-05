// "almas", 5, true, {}, [],
// '', 0, false, null, undefined //egolo chara baki ja kicho ache sob goli truthy hobe

// check truthy
let myVar = 5;
// check any truthy
if (myVar) {
  myVar = myVar * 100;
} else {
  myVar = 0;
}
// console.log(myVar);

let myMoney = 50;
// you check negative or falsy anything
if (!myMoney) {
}

const money = 800;
let food;
if (money > 100) {
  food = "biriyani";
} else {
  food = "cha biscuit";
}

// ternary
let food1 = money > 100 ? "biriyani" : "cha biscuit";
// console.log(food1);

let drink = money > 100 && myVar > 100 ? "coke" : "filter water";
// console.log(drink);

// number to string conversion
const num1 = 52;
// console.log(num1);
const numStr = num1 + ""; // jodi kono ekta number er sathe emty string jog kori tahole string hoye jabe
// console.log(numStr);

// string to number
const input = "560";
const inputNum = +input; // shortcut e amra string ke number e porinoto korlam
// console.log(inputNum);

//
let isActive = true;
// const isActive = false;
const showUser = () => console.log("display User");
const hideUser = () => console.log("hide User");
// isActive ? showUser() : hideUser(); // kono ekta shorto shapekkheo amra function ke call korte pari
// use && if the left side is true then right side will be executed
isActive && showUser(); // ekhane duitai shotti hote hobe orthat isActive ture hote hobe ebong showUser() thakte hobe tahole output pabo
// use || if the left side is fasle then right side will be executed
isActive || hideUser(); // duitar ekta thaklei hobe

// toggle boolean
isActive = !isActive; // jodi shotti hoi orthat true hoi tahole false kore dibe
