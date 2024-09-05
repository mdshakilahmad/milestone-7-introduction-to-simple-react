import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="container">
      <nav className="flex flex-col gap-4 justify-center md:flex md:justify-between md:flex-row md:gap-0 items-center py-6 sm:py-7 md:py-9 lg:py-12">
        <div>
          <h2 className="font-bold text-3xl md:text-2xl lg:text-3xl">
            Recipe Calories
          </h2>
        </div>
        <div>
          <ul className="flex gap-12">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Recipes</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div>
          <input
            type="search"
            className="border bg-slate-50 rounded-full py-2 px-3"
            name=""
            id=""
            placeholder="Search"
          />
          <img className="inline-block ml-4" src={profile} alt="" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
