import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = () => {
  const [countries, setCountries] = useState([]); // - Array এর ভিতরে যদি অনেকগুলি object আকারে মান থাকে তাহলে তার ডিফল্ট মান হবে একটা empty array []
  const [visitedCountries, setVisitedCountries] = useState([]); // jeheto onek golo desh e jete pari tahole [] er moddhe rakhte hobe ar jeheto [] te rakhci tai default value empty array [] dite hobe
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    console.log("add this to your visited country");
    // console.log(country);
    /* 
    visitedCountries.push(country) eta korle hobe na react e karon hocche :- 
      tumi kono ekta state er moddhe array rakho eitake jodi tumi change korte chao push pop egola diye kaj korle hobge na karon Bydefault 
      react immutable hisbe orthat she nijer optimization jonno tumi jodi push pop koro shetake she ignore kore etar jonno she Dom take she change kore na.
      Dom take jodi tumake change korte hoi tahole tumar ekto kahini kore change kore korte hobe prttek bar tumake naton akta array banaite hobe
      tar jonno amra sprad operator use korbo tahole she copy hobe abong comma diye naton array jeta dite chacchi sheta diye dibo
      example:-     const newVisitedCountries = [...visitedCountries, country];
                          setVisitedCountries(newVisitedCountries);

      to newVisitedCountries etake abar state diye set kore dilam
    */
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flag) => {
    // amra shorashori push pop korte parina array er state er moddhe tai eta korar jonno naton ekta array create kore sheitake ami state er moddhe set korte pari
    // console.log("flag adding");
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  // remove item from an array in a state
  // use filter to select all the elements except the one you want to remove

  return (
    <div>
      <h3>Countries: {countries.length}</h3>

      {/* visited country */}
      <div>
        <h5>Visited Countries: {visitedCountries.length}</h5>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>

      <div className="flag-container">
        {visitedFlags.map((flag, idx) => (
          <img key={idx} src={flag}></img>
        ))}
      </div>

      {/* display countries */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
