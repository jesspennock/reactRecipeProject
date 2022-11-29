import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({recipe}) => {
    console.info(recipe)
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`recipe/${recipe.recipe_id}`)
    }

    return (
        <div className="recipe-card">
            <img className ="strawberry-cake" src={recipe.image_url}/>
            <h2>{recipe.recipe_name}</h2>
            <button className="blue-btn" onClick={handleClick}>See More</button>
        </div>
    )
}
export default RecipeCard