const products = [
  { name: "laptop", price: 3200, brand: "lenovo", color: "silver" },
  { name: "phone", price: 7000, brand: "iphone", color: "golden" },
  { name: "watch", price: 3000, brand: "casio", color: "yellow" },
  { name: "sunglass", price: 300, brand: "ray", color: "black" },
  { name: "camera", price: 9000, brand: "canon", color: "gray" },
];

// map korle return korte hoi
const brands = products.map((product) => product.brand);
// console.log(brands);

const prices = products.map((product) => product.price);
// console.log(prices);

// forEach korle return hoina
// jehono return korbe na forEach tai bap pashe kono variable nile output undefined pabo
// products.forEach((products) => console.log(products));
// products.forEach((products) => console.log(products.color));

// multiline eo forEach kora jabe
products.forEach((products) => {
  // ekhane je kono kichoi kora jabe
  // jemon getElementBYId dhore kono kaj kora jabe
});

// 3. filter
// filter hocche ami kono ekta shorto dibo to jaderke shei shorto onojayi pabe shei jinish guli dibe arki
// filter ekta array return korbe oorthan jeta jeta match khabe sheigulare she array hisebe dibe

// jeheto return dibe tahole variable er moddhe rakhi age niche dekhi
const cheap = products.filter((product) => product.price <= 5000);
// console.log(cheap);

const specificName = products.filter((product) => product.name.includes("n"));
console.log(specificName);

// 4. find
// filter ebong find e eki pray tobe ekta defrent ache sheta hocche jeta match korbe shetar prothom tai dibe find korle
// example:
const special = products.find((product) => product.name.includes("n"));
console.log(special);

// summary:
// 1. jodi array of object thake shekhan theke jodi ami prottekta product theke ba element theke naton ekta array pete chai ba return hisebe ami ekta arry pete chai tahole map use korbo
// 2. jodi return hisebe kicho na chai kinto prottekta element e kicho korte chai kinto return chaina tahole forEach use korbo
// 3 jodi ami shorto shapekkhe kono element ke ba kicho element ke select korte pari shekhane 1 ta hote pare 5 ta hote pare 0 tao hote pare kinto kono shorto diye ek ba ekadik ke ami select korte chai tahole ami filter use korbo
// filter korle array dibe
// 4. find hocche filter er motoni but she shorto onojayi dibe tobe first element jeita shorto poron korbe she shodo shetakei dibe
