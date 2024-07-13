import { useState } from "react";

export default function Counter() {
  /*   const abc = useState(50);
  console.log(abc); */
  /* count ta hocche ekta variable er name ekhane change kore amra rakhbo hocche setCount e . 
    ar useState holo inisial value rakhi 
  */
  const [count, setCount] = useState(0); // third bracket er moddhe first e jei name dibo shetar sathe abar Set kothati likhe abar arekta likhbo ekhabe miliye

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount); // poribortonio man er variable ke setCount e rekhe dilam
  };

  const handleReduce = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <div style={{ border: "2px solid yellow" }}>
      <h3>Counter: {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}
