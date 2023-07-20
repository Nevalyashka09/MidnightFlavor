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
    axios.get(`http://localhost:4242/api/randomCocktail`).then((response) => {
      setRandomCocktail(response.data[0][0]);
    });
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
            <p>Ingredients: </p>
            <p>{randomCocktail.ingredients}</p>
            <p>Method: </p>
            <p>{randomCocktail.method}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default RandomCocktail;
