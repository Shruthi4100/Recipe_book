// src/pages/Home.js
import React from 'react';
import RecipeCard from '../Components/RecipeCard';
import './Home.css';

const recipes = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    description: 'A classic Italian pasta dish.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6FTv-lJYSJ5f24cs_y72ttvTBS2vBOZ5rkw&s',
  },
  {
    id: 2,
    name: 'Chicken Alfredo',
    description: 'A creamy pasta dish with chicken.',
    image: 'https://eatinginaninstant.com/wp-content/uploads/2022/08/IP-Chicken-Alfredo-8-1200-500x500.jpg',
  },
]; 



const Home = () => {
  return (
    <div className="recipe">
      <h1 className='recipe-title'>Recipe Book</h1>
    <div className="home">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
    </div>
  );
};

export default Home;
