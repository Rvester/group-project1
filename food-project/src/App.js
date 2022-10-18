import {useEffect, useState} from 'react'
import './App.css';
import Favorites from './components/Favorites';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Showproducts from './components/Showproducts';


function App() {
  const apiKey = 'ad173b551e5541eea830fd81b1c46001'

  let [food, setFood] = useState({})

  const getFood = async () => {
    
    const response = await fetch (`https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=${apiKey}`)
    const data = await response.json()
    setFood(data)
    //console.log(data)
  }

  useEffect(() =>{
   getFood()
  },[])
  
  
  return (
    <div className="App">
      <h1>Food Group</h1>
      <Navbar/>
      <Home/>
      <Showproducts />
      <Favorites />

    
    </div>
  );
}

export default App;
