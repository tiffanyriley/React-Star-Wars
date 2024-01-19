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
 const response=   await axios.get('https://swapi.dev/api/starships/')
     
  }
  useEffect(()=>{
    loadStarship();
        fetch('https://swapi.dev/api/starships/')
          .then(res => res.json())
          .then(
            (starships) => {
              console.log()
            }
          )
      },[]);
  
}
  
    
      export default App;
