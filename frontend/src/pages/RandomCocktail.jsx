import React, { useEffect, useState } from "react";
import axios from "axios";
import vodkaImg from "../assets/images/vodka.png";
import proseccoImg from "../assets/images/prosecco.png";
import rumImg from "../assets/images/rum.png";
import wiskeyImg from "../assets/images/wiskey.png";
import ginImg from "../assets/images/gin.png";
import tequilaImg from "../assets/images/tequila.png";
import masque from "../assets/images/masque.png";
import Navbar from "../components/Navbar";

function RandomCocktail() {
  const [randomCocktail, setRandomCocktail] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4242/api/randomCocktail`)
      .then((response) => {
        setRandomCocktail(response.data[0][0]);
      })
      .catch((error) => {
        console.error("Error fetching random cocktail:", error);
      });
  }, []);

  const displayCocktail = (spirit) => {
    console.info(spirit);
    axios
      .get(`http://localhost:4242/api/randomCocktail/${spirit}`)
      .then((response) => {
        setRandomCocktail(response.data[0][0]);
      })
      .catch((error) => {
        console.error("Error fetching random cocktail:", error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="randomCocktailCtn">
        <h1>Choose your spirit</h1>
        <div className="spiritsCtn">
          <div className="row">
            <div className="spirit">
              <img src={vodkaImg} alt="vodka" />
              <button
                className="spiritBtn"
                type="button"
                onClick={() => displayCocktail("vodka")}
              >
                vodka
              </button>
            </div>
            <div className="spirit">
              <img src={proseccoImg} alt="prosecco" />
              <button
                className="spiritBtn"
                type="button"
                onClick={() => displayCocktail("prosecco")}
              >
                prosecco
              </button>
            </div>
            <div className="spirit">
              <img src={rumImg} alt="rum" />
              <button
                className="spiritBtn"
                type="button"
                onClick={() => displayCocktail("rum")}
              >
                rum
              </button>
            </div>
          </div>
          <div className="row">
            <div className="spirit">
              <img src={wiskeyImg} alt="wiskey" />
              <button
                className="spiritBtn"
                type="button"
                onClick={() => displayCocktail("whiskey")}
              >
                whiskey
              </button>
            </div>
            <div className="spirit">
              <img src={ginImg} alt="gin" />
              <button
                className="spiritBtn"
                type="button"
                onClick={() => displayCocktail("gin")}
              >
                gin
              </button>
            </div>
            <div className="spirit">
              <img src={tequilaImg} alt="tequila" />
              <button
                className="spiritBtn"
                type="button"
                onClick={() => displayCocktail("tequila")}
              >
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
        <img className="masqueImg" src={masque} alt="masque" />
      </div>
    </>
  );
}

export default RandomCocktail;
