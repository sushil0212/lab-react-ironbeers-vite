import "./App.css";
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AllBeersPage from './pages/AllBeersPage'
import RandomBeerPage from './pages/RandomBeerPage'
import AddBeerPage from './pages/AddBeerPage'
import BeerDetailsPage from'./pages/BeerDetailsPage'


function App() {
  return (
    <div className="App">
      <h1>LAB | React IronBeers</h1>
      <Navbar />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/beers' element={<AllBeersPage />} />
        <Route path='/random-beer' element={<RandomBeerPage />} />
        <Route path='/new-beer' element={<AddBeerPage />} />
        <Route path='/beers/:beerId' element={<BeerDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
