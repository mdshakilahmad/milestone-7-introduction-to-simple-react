import profile from "../../assets/images/profile.jpg";
const Header = () => {
  return (
    <div className="flex justify-between items-center py-4 border-b max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold">knowledge cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
