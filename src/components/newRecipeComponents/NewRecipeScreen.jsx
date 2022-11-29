import React, {useState} from "react";
import {Formik} from "formik";
import "./NewRecipeScreen.css"
import axios from "axios";



const NewRecipeScreen = () => {

 const [ingredients, setIngredients] = useState([])
 const [name, setName] = useState("")
 const [quantity, setQuantity] = useState("") 

 const addIngredient = () => {
  console.log("clicked")
  setIngredients([...ingredients, {name, quantity}])
  setName("")
  setQuantity("")
 }

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: ""
  };

  const sendRecipe = (values) => {
    axios
    .post("https://recipes.devmountain.com/recipes", values)
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    console.log(values)
    sendRecipe(values)
  }; 

  return (
    <>
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit = {onSubmit}>
        {({values, handleChange, handleSubmit})=>(
          <form onSubmit={handleSubmit} className="submit-new-recipe">
            <div className="name-image">
              <input type="text" placeholder="Name" value={values.recipeName} onChange={handleChange} name="recipeName"/>
              <input type="text" placeholder="Image URL" value={values.imageURL} onChange={handleChange} name="imageURL"/>
            </div>
            <div className="radio-buttons">
              <div>
                <input type="radio" id="cook" value="Cook" onChange={handleChange} name="type"/>
                <label for="cook">Cook</label>
              </div>
              <div>
                <input type="radio" id="bake" value="Bake" onChange={handleChange} name="type"/>
                <label for="bake">Bake</label>
              </div>
              <div>
                <input type="radio" id="drink" value="Drink" onChange={handleChange} name="type"/>
                <label for="drink">Drink</label>
              </div>
            </div>
            <div className="prep-cook-serves">
              <input type="text" placeholder="Prep Time" value={values.prepTime} onChange={handleChange} name="prepTime"/>
              <input type="text" placeholder="Cook Time" value={values.cookTime} onChange={handleChange} name="cookTime"/>
              <input type="number" placeholder="Serves" value={values.serves} onChange={handleChange} name="serves"/>
            </div>
            <div className="ingredients-quantity">
              <div>
                <input type="text" placeholder="Ingredient" value={name} name="ingredient" onChange={(e) => setName(e.target.value)}/>
                <input type="number" placeholder="Quantity" value={quantity} name="quantity" onChange={(e) => setQuantity(e.target.value)}/>
              </div>
              <div>
                <ul>
                  <li>4 eggs</li>
                  <li>1 box of cake</li>
                </ul>
              </div>
            </div>
            <div className="buttons-instructions">
              <button type ="button" onClick={addIngredient} className="orange">Add Another</button>
              <textarea className="text-instructions"id="instructions" placeholder="What are the instructions?"rows="4" columns="30"value={values.instructions} name="instructions" onChange={handleChange}></textarea>
              <button type= "submit" className="blue">Save</button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default NewRecipeScreen;
