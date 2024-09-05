import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
  //   const { country, handleVisitedCountry, handleVisitedFlags } = props;
  return (
    <div>
      <h4>Country Details</h4>
      <hr />

      {/* 
      <CountryData
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      ></CountryData>
       */}

      {/*
        amra dui ek lavel e props pathaite chaile shorashori patiye dibo 
        ar beshi lavel porjonto hole props take spread operator kore nite pari.
        tobe egolor thekeo valo opay royeche sheta hocche React er useContext Hook take use korbo seta porer kono video te dekhbo
       */}

      <CountryData {...props}></CountryData>
    </div>
  );
};

export default CountryDetail;
