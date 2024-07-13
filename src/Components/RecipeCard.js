// src/components/RecipeCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} className="recipe-card-image" />
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
      <Link to={`/recipe/${recipe.id}`} className="btn">
        Read Recipe
      </Link>
    </div>
  );
};

export default RecipeCard;
