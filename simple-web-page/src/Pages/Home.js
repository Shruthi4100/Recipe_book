// src/pages/Home.js
import React ,{useContext,useState} from 'react';

import RecipeCard from '../Components/RecipeCard';
import './Home.css'
import './ContactDetails.css'
import RecipeContext from '../RecipeContext';
import ContactDetails from './ContactDetails';

/* '''const recipes = [
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
]; '''*/



const Home = () => {
  const { recipes, loading } = useContext(RecipeContext);
  const [showContact, setShowContact] = useState(false); 

  if (loading) {
    return <div>Loading...</div>;
  }

  const toggleContactDetails = () => {
    setShowContact(!showContact);
  };

  return (
    <div className="recipe">
      <h1 className='recipe-title'>Recipe Book</h1>
    
    <div className="home">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
        
      ))}
      </div>
       
       <button onClick={toggleContactDetails} className='btn'>
        {showContact ? 'Contact Details' : 'Contact Details'}
      </button>

     
      {showContact && <ContactDetails />}
       
    </div>
  );
};

export default Home;
