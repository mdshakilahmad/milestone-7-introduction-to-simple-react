import { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetail/CountryDetail";
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  // console.log(country);
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false); // default man false diye dialm
  const handleVisited = () => {
    // setVisited(true);

    setVisited(!visited); // !visited eta mane jodi visited na hoi orthat false hoi
  };

  // const passWithParams = () => handleVisitedCountry(country);

  // console.log(handleVisitedCountry);
  return (
    // <div className="country">
    // <div className={`country ${visited && `visited`}`}>
    <div className={`country ${visited ? `visited` : "non-visited"}`}>
      <h3 style={{ color: visited ? `purple` : "white" }}>
        name: {name.common}
      </h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>area: {area}</p>
      <p>
        <small>{cca3}</small>
      </p>

      {/* <button onClick={handleVisited}>Visited</button> */}

      {/* amra chaile ei button takeo ekto dynamic korte pari jemon niche
        jodi visited true hoi tahole "Visited" ei likha dekhabe ar jodi na hoi orthat false hoi thaole "Going" ei likha dekhabe
      */}
      {/* jeheto country parameter hisebe pathate hobe tai onClick er moddhe arrow function kore tar moddhe () => handleVisitedCountry(country) evabe dite hobe
      karon react e parameter dile seta sathe sathe call hoye jai tai arrow funcion er moddhe oi function orthat handleVisitedCountry etake diye dilam
      */}

      <button onClick={() => handleVisitedCountry(country)}>
        Mark visited
      </button>
      <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Add visited flag
      </button>
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {/* {visited ? "I have visited this country" : "I want to visit"} */}

      {/* অনেক সময় হয় যে  আমরা সধু যেই condition true হবে সেটা সধু দেখাতে চাই |
 আর যেটা false সেটা দেখাবেই না তাহলে এভাবে করবো && দিইয়ে | */}
      {visited && "I have visited this country"}

      <hr />
      <CountryDetail
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      ></CountryDetail>
    </div>
  );
};

export default Country;
