import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import "./DetailScreen.css"
import salmon from "../../assets/salmon.jpg";
import axios from 'axios';

const DetailScreen = () => {  
  const { id } = useParams();
  console.log(id)

  const [recipeDetail, setRecipeDetail] = useState({})

  const getRecipeDetails = () => {
    axios
    .get(`http://recipes.devmountain.com/recipes/${id}`)
    .then((res)=> {
      console.log(res.data)
      setRecipeDetail(res.data)
    })
    .catch((err)=> {
      console.log(err)
    })
  }
  useEffect(() => getRecipeDetails(), [])
 
  const ingredientDisplay = () => {
    return recipeDetail.ingredients.map((ingredient)=> {
      return <h4>{ingredient.quantity} {ingredient.ingredient}</h4>
    })
  }

  const parseInstructions = () => {
    try {
      return JSON.parse(recipeDetail.instructions)
    }
    catch {
      return recipeDetail.instructions
    }
  }

  return (
    <div className= "details-container">
      <div className="recipe-picture"
        style={{
          background: `linear-gradient(
            190deg,
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)),
            url(${recipeDetail.image_url})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 50%"
        }}
        >
        <h1>{recipeDetail.recipe_name}</h1>
      </div>
      <div className='content'>
        <div className='recipe-ingredients-container'>
          <div className='recipe-part'>
            <h2>{recipeDetail.recipe_name}</h2>
            <p>Prep Time: {recipeDetail.prep_time}<br/>
            Cook Time: {recipeDetail.cook_time} <br/>
            Serves: {recipeDetail.serves}
            </p>
          </div>
          <div className='ingredients-part'>
            <h2>Ingredients</h2>
            <div>{recipeDetail.ingredients && ingredientDisplay()}
            </div>
          </div>
        </div>
        <div className='instructions-part'>
          <h2>Instructions</h2>
          <p style = {{whiteSpace: "pre-wrap"}}>
            {recipeDetail.instructions && parseInstructions()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;
