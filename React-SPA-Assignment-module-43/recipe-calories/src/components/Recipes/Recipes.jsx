import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Recipe from "../Recipe/Recipe";
const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [cooks, setCooks] = useState([]);
  const [cookings, setCookings] = useState([]);
  const [cookCount, setCookCount] = useState(0);
  const [preparingCount, setPreparingCount] = useState(0);

  const [sum, setSum] = useState(0);
  const [calories, setCalories] = useState(0);

  const handleAddToCooks = (recipe) => {
    // console.log("Cooks", recipe);
    const newCooks = [...cooks, recipe];
    // console.log(recipe.recipe_id);

    /* 
    // 1. way this work
    const index = cooks.find((cook) => cook.recipe_id === recipe.recipe_id);
    if (index) {
      // alert("already exist!");
      toast.error("Already Exist!");
      return;
    }
 */

    // 2. way this work
    const index =
      cooks.findIndex((el) => el.recipe_id === recipe.recipe_id) !== -1;
    if (index) {
      // alert("already exist!");
      toast.error("Already Exist!");
      return;
    }

    /* 
    // 3. way this work
    if (cooks.some((el) => el.recipe_id === recipe.recipe_id)) {
      toast.error("Already Exist!");
      return;
    }
 */

    setCooks(newCooks);

    setCookCount(cookCount + 1);
    // toast.success("Food sent to prepraring");
  };

  // console.log(cooks.map((cook) => cook.recipe_id));

  const handleAddToCooking = (recipe) => {
    // opore je recipe ta parameter hisebe likhechi seta pacchi Preparing onClick={() => handleAddToCooking(cook)} eta theke cook namer seta ekhane eshe recipe name diyechi

    // console.log("hi", cook);
    const newCookings = [...cookings, recipe];

    /*  const index = cookings.find((el) => el.recipe_id === cook.recipe_id);
    if (index) {
      // alert("preparing success");
      toast.error("Already Exist!");
      return;
    } */

    setCookings(newCookings);
    setCookCount(cookCount - 1);
    setPreparingCount(preparingCount + 1);

    const newCooks = cooks.filter(
      (cook) => cook.recipe_id !== recipe.recipe_id // orthat want to cook button ar hocche preparing button er data same hole seta jabe na Currently cooking e
    );
    setCooks(newCooks);

    // console.log(recipe.preparing_time);
    const preparingTimeString = recipe.preparing_time;
    const preparingTimeInt = parseInt(preparingTimeString);
    const newPreparingTime = preparingTimeInt + sum;
    setSum(newPreparingTime);

    const caloriesString = recipe.calories;
    const caloriesInt = parseInt(caloriesString);
    const newCalories = caloriesInt + calories;
    setCalories(newCalories);

    toast.success("Food delivered succeed");
  };

  // console.log(cookings.map((cooking) => cooking.recipe_name));

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="py-5 sm:py-10 md:py-14 lg:py-24">
      <div className="container">
        <h2 className="text-center font-semibold text-4xl">Our Recipes</h2>
        <p className="w-3/4 lg:max-w-[823px] mx-auto text-center pt-6 pb-12">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
            {recipes.map((recipe) => (
              <Recipe
                key={recipe.recipe_id}
                recipe={recipe}
                handleAddToCooks={handleAddToCooks}
              ></Recipe>
            ))}
          </div>
          <div className="border py-8">
            <h3 className="text-center text-lg sm:text-2xl font-semibold pb-4">
              Want to cook: {cookCount}
            </h3>
            <hr className="w-2/3 mx-auto pb-4" />

            {/* <ul className="list-decimal">
              {cooks.map((cook) => (
                <li>{cook.recipe_name}</li>
              ))}
            </ul> */}
            <table className="w-full font-Fira-Sans">
              <thead>
                <tr>
                  <th className="pb-4">Name</th>
                  <th className="pb-4">Time</th>
                  <th className="pb-4">Calories</th>
                </tr>
              </thead>
              {cooks.map((cook, index) => (
                <tbody key={cook.recipe_id}>
                  <tr className="bg-gray-100 mt-4 text-xs sm:text-base">
                    <td className="text-center py-4">{index + 1}</td>
                    <td className="text-center py-4">{cook.recipe_name}</td>
                    <td className="text-center py-4">{cook.preparing_time}</td>
                    <td className="text-center py-4">{cook.calories}</td>
                    <td className="py-4">
                      <button
                        onClick={() => handleAddToCooking(cook)}
                        className="text-center bg-btn-bg-common py-2 px-4 rounded-full inline-flex items-center "
                      >
                        Preparing
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
            <h3 className="text-center text-lg sm:text-2xl font-semibold pb-4 pt-4">
              Currently cooking: {preparingCount}
            </h3>
            <hr className="w-2/3 mx-auto pb-4" />
            <table className="w-full font-Fira-Sans">
              <thead>
                <tr>
                  <th className="pb-4">Name</th>
                  <th className="pb-4">Time</th>
                  <th className="pb-4">Calories</th>
                </tr>
              </thead>
              {cookings.map((cooking, index) => (
                <tbody key={cooking.recipe_id}>
                  <tr className="bg-gray-100 mt-4 text-xs sm:text-base">
                    <td className="text-center py-4">{index + 1}</td>
                    <td className="text-center py-4">{cooking.recipe_name}</td>
                    <td className="text-center py-4">
                      {cooking.preparing_time}
                    </td>
                    <td className="text-center py-4">{cooking.calories}</td>
                  </tr>
                </tbody>
              ))}
            </table>
            <div className="flex gap-8 pt-5 justify-center">
              <p className="text-center text-sm sm:text-base">
                Total Time = {sum} minutes
              </p>
              <p className="text-center text-sm sm:text-base">
                Total Calories = {calories} calories
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
