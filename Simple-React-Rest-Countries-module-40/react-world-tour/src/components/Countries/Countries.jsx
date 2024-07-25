import React from "react";
import { useEffect, useState } from "react";
const Countries = () => {
  const [countries, setCountries] = useState([]); // - Array এর ভিতরে যদি অনেকগুলি object আকারে মান থাকে তাহলে তার ডিফল্ট মান হবে একটা empty array []

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h3>Countries</h3>
    </div>
  );
};

export default Countries;
