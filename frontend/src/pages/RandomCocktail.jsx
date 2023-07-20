import React, { useEffect, useState } from "react";
import axios from "axios";
import vodka from "../assets/images/vodka.png";
import prosecco from "../assets/images/prosecco.png";
import rum from "../assets/images/rum.png";
import wiskey from "../assets/images/wiskey.png";
import gin from "../assets/images/gin.png";
import tequila from "../assets/images/tequila.png";

function RandomCocktail() {
  const [randomCocktail, setRandomCocktail] = useState(null);

  useEffect(() => {
    const fetchRandomCocktail = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: "http://www.localhost:6000/api/randomCocktail",
        });

        if (response.status === 200) {
          setRandomCocktail(response.data);
        } else {
          console.error("Error fetching random cocktail");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRandomCocktail();
  }, []);

  return (
    <div className="randomCocktailCtn">
      <h1>Choose your spirit</h1>
      <div className="spiritsCtn">
        <div className="row">
          <div className="spirit">
            <img src={vodka} alt="vodka" />
            <button className="spiritBtn" type="button">
              vodka
            </button>
          </div>
          <div className="spirit">
            <img src={prosecco} alt="prosecco" />
            <button className="spiritBtn" type="button">
              prosecco
            </button>
          </div>
          <div className="spirit">
            <img src={rum} alt="rum" />
            <button className="spiritBtn" type="button">
              rum
            </button>
          </div>
        </div>
        <div className="row">
          <div className="spirit">
            <img src={wiskey} alt="wiskey" />
            <button className="spiritBtn" type="button">
              whiskey
            </button>
          </div>
          <div className="spirit">
            <img src={gin} alt="gin" />
            <button className="spiritBtn" type="button">
              gin
            </button>
          </div>
          <div className="spirit">
            <img src={tequila} alt="tequila" />
            <button className="spiritBtn" type="button">
              tequila
            </button>
          </div>
        </div>
      </div>
      <div className="randomRecipe">
        {randomCocktail ? (
          <>
            <h1>{randomCocktail.name}</h1>
            <p>Ingredients: {randomCocktail.ingredients}</p>
            <p>Method: {randomCocktail.method}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default RandomCocktail;
