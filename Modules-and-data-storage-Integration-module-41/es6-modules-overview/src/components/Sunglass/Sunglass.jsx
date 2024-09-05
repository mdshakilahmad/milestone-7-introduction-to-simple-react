import React from "react";

import "./Sunglass.css";
import Watch from "../Watch/Watch";

import {
  add,
  multiply,
  devideTheFirstNumberByTheSecondNumber as devide,
} from "../../Utils/calculate"; // eta onno vabe import hocche karon evabe import kora :- export { add, multiply };
/* 
jodi boro name thake function er tahole oi name ta diye as likhe short kore kono name likhe shei short name use koreo kaj kora jabe
*/

// import add from "../../Utils/calculate"; //eta abar onno vabe import korteche :- export default add;

const Sunglass = () => {
  const first = 55;
  const second = 199;
  const sum = add(first, second);
  const mult = multiply(first, second); // to multiply ta import hobe kinto opore comma diye add er pasher tai boshbe
  const vag = devide(first, second);
  return (
    <div>
      <Watch></Watch>
    </div>
  );
};

export default Sunglass;
