import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCocktail() {
  const navigateTo = useNavigate();

  const [name, setName] = useState("");
  const [spirit, setSpirit] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [method, setMethod] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { name, ingredients, spirit, method };
    try {
      const response = await axios.post(
        `http://localhost:4242/api/addCocktail`,
        body
      );
      if (response.status === 201) {
        console.info(response);
        // After successful submission, navigate to "/all" page
        navigateTo("/all");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="addCtn">
      <form onSubmit={(e) => handleSubmit(e)} className="addCardCtn">
        <h1>Name :</h1>
        <input
          className="addInput"
          type="text"
          placeholder="Name your cocktail"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h1>Spirit :</h1>
        <input
          className="addInput"
          type="text"
          placeholder="Add main spirit"
          value={spirit}
          onChange={(e) => setSpirit(e.target.value)}
        />
        <h1>Ingredients : </h1>
        <input
          className="addInput"
          type="text"
          placeholder="Choose ingridients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <h1>Method : </h1>
        <textarea
          className="addArea"
          type="text"
          placeholder="Write the method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        />
        <button className="button" type="submit">
          Add cocktail
        </button>
      </form>
    </div>
  );
}

export default AddCocktail;
