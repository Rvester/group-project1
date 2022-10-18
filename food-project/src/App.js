import {useEffect, useState} from 'react'
import './App.css';


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

    
    </div>
  );
}

export default App;
