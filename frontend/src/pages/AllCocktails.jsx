import React, { useEffect, useState } from "react";
import axios from "axios";
import background from "../assets/images/background.png";
import deleteImg from "../assets/images/delete.png";

import Navbar from "../components/Navbar";

function AllCocktails() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4242/api/allCocktails`).then((response) => {
      setCocktails(response.data[0]);
      console.info(response.data[0][0]);
    });
  }, []);

  const handleDelete = async (cocktailId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4242/api/deleteCocktail/${cocktailId}`
      );
      if (response.status === 204) {
        console.info(response);
        // Optionally, you can also remove the deleted cocktail from the state
        setCocktails((prevCocktails) =>
          prevCocktails.filter(
            (cocktail) => cocktail.cocktail_id !== cocktailId
          )
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="allCocktailCtn">
        {cocktails.length === 0 ? (
          <p>Loading...</p>
        ) : (
          cocktails.map((cocktail) => (
            <div
              key={cocktail.id}
              className="recipeCtn"
              style={{ backgroundImage: `url(${background})` }}
            >
              <h1>{cocktail.name}</h1>
              <p>Ingredients: </p>
              <p>{cocktail.ingredients}</p>
              <p>Method: </p>
              <p>{cocktail.method}</p>
              <div className="deleteContainer">
                <button
                  className="deleteButton"
                  type="button"
                  onClick={() => handleDelete(cocktail.cocktail_id)}
                >
                  <img className="deleteImg" src={deleteImg} alt="" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default AllCocktails;
