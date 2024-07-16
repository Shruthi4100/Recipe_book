import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import RecipeDetails from './Pages/RecipeDetails';
import { RecipeProvider } from './RecipeContext';

function App() {
  return (
    <RecipeProvider>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
    </RecipeProvider>
  );
}

export default App;
