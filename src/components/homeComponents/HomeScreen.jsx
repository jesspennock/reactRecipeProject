import React, {useState, useEffect} from 'react'
import AdBanner from './AdBanner'
import RecipeCard from '../RecipeCard';
import SearchBar from './SearchBar';
import axios from 'axios';

const HomeScreen = () => { 
  const [recipes, setRecipes] = useState([])
  const [searchRecipe, setSearchRecipe] = useState ("")

  const getRecipes = () => {
    axios
    .get("https://recipes.devmountain.com/recipes")
    .then((res)=>{
      console.log(res.data)
      setRecipes(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(() => getRecipes(),[])

  const recipeDisplay = () => {
    const matchingRecipes = recipes.filter ((recipe) => {
      let title=recipe.recipe_name.toLowerCase()
      let searchParams=searchRecipe.toLowerCase()
      return title.includes(searchParams)
    })
    return matchingRecipes.map((recipe) => {
      return <RecipeCard recipe={recipe}/>
    })
  }

  return (
    <div>
      <AdBanner />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
      <SearchBar setSearchRecipe={setSearchRecipe}/>
      <div className='recipe-container'>
        {searchRecipe && recipeDisplay()}
      </div>
    </div>
  )
}

export default HomeScreen