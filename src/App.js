import './App.css';
import AllBeers from './Components/AllBeers/AllBeers';
import NewBeer from './Components/NewBeer/NewBeer';
import RandomBeer from './Components/RandomBeer/RandomBeer';
import HomePages from './Components/HomePages/HomePages';
import SingleBeer from './Components/SingleBeer/SingleBeer';

import { Routes, Route } from 'react-router-dom';



function App() {
 

  
  return (
    <div className="App">
      
      
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/all-beers" element={<AllBeers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/single-beer" element={<SingleBeer />} />
      
      </Routes>
      
    </div>
  );
}

export default App;
