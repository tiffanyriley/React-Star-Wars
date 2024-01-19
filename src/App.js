import './App.css';
import Header from "./components/Header";
import './components/Header.css';
import HomePage from './components/HomePage';
import './components/HomePage.css';
import CardPage from './components/CardPage';
import './components/CardPage.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [starshipData,setstarshipData] = useState([]);
  
  const loadStarship= async ()=>{
      try {
        const response = await axios.get('https://swapi.dev/api/starships/');
        setStarshipData(response.data.results);
        } catch (error) {
        console.error('Error loading starships:', error);
        }
  };
 useEffect(() => {
    loadStarships();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage starships={starshipData} />} />
          <Route path="/card/:id" element={<CardPage starships={starshipData} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

  
    
      export default App;
