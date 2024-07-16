import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://recipe-alb-857639819.us-east-1.elb.amazonaws.com:8000/api/recipes/');
        setRecipes(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <RecipeContext.Provider value={{ recipes, loading }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContext;
