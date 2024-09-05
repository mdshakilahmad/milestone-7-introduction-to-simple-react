// alada file e jodi ei function gulike niye kaj korte chai tahole export korte hobe
const add = (first, second) => {
  return first + second;
};

const multiply = (first, second) => {
  return first * second;
};

const devideTheFirstNumberByTheSecondNumber = (first, second) => {
  return first / second;
};

// export default add; // to etake jodi comment kori tahole ei funcion ar onno file theke khoje pabo na

/* 
// 1. tumi chaile distructue kore object kore pathaite pari
// 2. tumi chaile array akareo pathaite paro jodi tumi use korte chao amra jokhon custom hook korbo tokhon use korbo
 */

/* 
   3.
// ami chaile evabeo korte pari objet baniye tar por exporot kortechi
const calculator = { add: add };
export default calculator;
 */

// export { add, multiply };

export { add, multiply, devideTheFirstNumberByTheSecondNumber };
