import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const [recipe, setRecipe] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe((prevRecipe) => ({ ...prevRecipe, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(recipe);
    setRecipe({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>
              <input name="name" value={recipe.name} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>Cuisine:</td>
            <td>
              <input name="cuisine" value={recipe.cuisine} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>Photo:</td>
            <td>
              <input name="photo" value={recipe.photo} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>Ingredients:</td>
            <td>
              <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>Preparation:</td>
            <td>
              <textarea name="preparation" value={recipe.preparation} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
