import { useEffect, useState } from "react";
import "./App.css";
import Watch from "./components/Watch/Watch";

function App() {
  const [watches, setWatches] = useState([]);
  /* 
  useEffect(() => {
    fetch("watches.json")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);
   */

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/mdshakilahmad/watches-data/main/watches.json"
    )
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);

  /*   
const watches = [
    {
      id: 1,
      name: "Apple watch",
      price: 200,
    },
    {
      id: 2,
      name: "Samsu watch",
      price: 200,
    },
    {
      id: 3,
      name: "MI watch",
      price: 200,
    },
  ]; 

*/
  /* 
  const watches = [
    {
      id: 1,
      name: "Apple Watch Series 9",
      price: 399,
    },
    {
      id: 2,
      name: "Samsung Galaxy Watch 6",
      price: 349,
    },
    {
      id: 3,
      name: "Garmin Forerunner 265",
      price: 499,
    },
    {
      id: 4,
      name: "Fitbit Versa 4",
      price: 229,
    },
    {
      id: 5,
      name: "Huawei Watch GT 4",
      price: 299,
    },
  ];
 */
  return (
    <>
      <h1>Vite + React</h1>
      {watches.map((watch) => (
        <Watch key={watch.id} watch={watch}></Watch>
      ))}
    </>
  );
}

export default App;
