import PropTypes from "prop-types";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsFire } from "react-icons/bs";
const Recipe = ({ recipe, handleAddToCooks }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;

  return (
    <div className="border rounded-md p-6 flex flex-col justify-between">
      <img className="w-full rounded-3xl" src={recipe_image} alt="" />
      <h2 className="pt-6 font-semibold text-xl">{recipe_name}</h2>
      <p className="py-4 font-Fira-Sans border-b">{short_description}</p>
      <div>
        <p className="text-xl pt-6 pb-4">Ingredients:</p>
        <ol className="list-disc font-Fira-Sans border-b pb-4">
          {ingredients.map((ingredient, idx) => (
            <li key={idx} className="ml-7 text-[#878787]">
              {ingredient}
            </li>
          ))}
        </ol>
      </div>
      <div className="pt-6 pb-6 inline-flex items-center">
        <span className="mr-4">
          <MdOutlineWatchLater className="inline-flex items-center mr-2" />
          {preparing_time}
        </span>
        <span className="inline-flex items-center">
          <BsFire className="inline-flex items-center mr-2" />
          {calories}
        </span>
      </div>
      <button
        onClick={() => handleAddToCooks(recipe)}
        className="px-6 py-3 rounded-full text-base sm:text-lg font-medium bg-btn-bg-common w-[170px]"
      >
        Want to Cook
      </button>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object,
  handleAddToCooks: PropTypes.func,
  handleRecipeCount: PropTypes.number,
};
export default Recipe;
