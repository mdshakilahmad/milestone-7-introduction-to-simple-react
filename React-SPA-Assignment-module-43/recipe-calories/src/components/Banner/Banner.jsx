import bannerImg from "../../assets/images/banner.png";
const Banner = () => {
  return (
    <div className="container">
      {/* style er moddhe banner img ta nilam karon evabe na nile build kore deploy korle banner img pacchilam na tai emon korlam */}
      <div
        style={{ backgroundImage: `url(${bannerImg})` }}
        className="bg-no-repeat bg-center bg-cover w-full py-16 sm:py-20 md:py-28 lg:py-32"
      >
        {/* <div  className="bg-banner bg-no-repeat bg-center w-full py-32"> */}
        <div className="w-4/5 mx-auto">
          <h3 className="text-white text-center font-bold text-3xl leading-10 lg:text-5xl lg:leading-[76px]">
            Discover an exceptional cooking class tailored for you!
          </h3>
          <p className="text-white text-center text-base lg:text-lg pt-6 pb-10">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding problems to become an exceptionally
            well world-class Programmer.
          </p>
          <div className="text-center flex flex-col items-center sm:flex-row sm:justify-center gap-3 sm:gap-4">
            <button className="w-4/6 sm:w-auto bg-btn-bg-common text-black py-3 px-5 lg:py-4 lg:px-7 rounded-full font-semibold text-base lg:text-xl">
              Explore Now
            </button>
            <button className="w-4/6 sm:w-auto text-white py-3 px-5 lg:py-4 lg:px-7 rounded-full bg-transparent border font-semibold text-base lg:text-xl">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
