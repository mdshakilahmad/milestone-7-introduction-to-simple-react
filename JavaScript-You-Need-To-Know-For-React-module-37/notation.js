const person = {
  name: ":Lal Nil Holud mia",
  profession: "Trafic Surgeon",
  age: 39,
  25: "summer", // ekhane jodi ei property take accece korte chai dot notation diye tahole kinto hobe na tai ekhane bracket notation diye korte hobe
  "son-name": "Sunny", // ekhane jodi ei property take accece korte chai dot notation diye tahole kinto hobe na tai ekhane bracket notation diye korte hobe
  adderess: "shahabag",
};

// dot notaion
const prof1 = person.profession;

// bracket notation
// const prof2 = person[profession]; // eta kinto hobena
const prof2 = person["profession"]; // eta hobe karon bracket notation korle []er moddhe string e dite hobe
console.log(prof2);

// arekta vabe kora jabe variable kore niye tobe variable er value hishebe "" tring dite hobe oi property er name take.
const pName = "profession";
const prof3 = person[pName]; // to ekhane profession ta likha ar pName likhata eki kotha arki
console.log(prof3);

// const season = person.25 // to eta kinto evabe dekhte parbo na output
const season = person[25]; // to etake evabe bracket notaion diye korte holo ekhon dekhte parbo
console.log(season);

// const son = person.son-name; // eta diye kinto hobe na ekhane bracket notation kora lagbe
const son = person["son-name"]; // ekhon hobe karon ekhane bracket notation use korlam
console.log(son);

// summary:
// amra sob jaiga te dot notation use kore output pabo na kicho jaigai bracket notation use korte hobe.
// kono ekta object theke property er man ber korte chai amra simple string value jodi property ta er name hoi tahole amra dot notation diye ber korte pari
// ar maximum khetre amra bracket notaion use korbo
// bracket notation ta aro onek kaje lage jemon :
// loop throw korlam ekta loop chalailam for in loop ba kicho ekta loop chalailam
// prottekta property er name ashbe tar pore shei name take jokhon amra use korte chai tokhon kinto amra ei bracket notation use korbo
// bracket notation er aro onek use ache shamne chaile beshi sikhte pari but ekhane te chotto kore ekta idia nilam arki
