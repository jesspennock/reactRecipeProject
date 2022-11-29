import React from "react";

const SearchBar = ({setSearchRecipe}) => {
    return (
        <div className="searchbar">
            <input className = "searchbar-input"type="text" placeholder="Search for a recipe" onChange = {e=>setSearchRecipe(e.target.value)}></input>
        </div>
    )
}

export default SearchBar;