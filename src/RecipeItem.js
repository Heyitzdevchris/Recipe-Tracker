import React from "react";

function RecipeItem({ recipe, deleteRecipe }) {
  const handleDelete = () => {
    deleteRecipe(recipe.name);
  };

  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img src={recipe.photo} alt={recipe.name} width="100" height="100" />
      </td>
      <td className="content-td">
        <p>{recipe.ingredients}</p>
      </td>
      <td className="content-td">
        <p>{recipe.preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RecipeItem;
