import {useState} from 'react'
import './App.css';

function App() {
  const apiKey = '7d62535ab0e841b593f0118af07f524f'

  let [food, setFood] = useState([])

  const getFood = async () => {
    //.then((res) => res.json())
    //.then((data) => console.log(data))
    const response = await fetch (`https://api.spoonacular.com/recipes/716429/information?apiKey=${apiKey}&includeNutrition=true`)
    const data = await response.json()
    setFood(data)
  }
  
  
  
  return (
    <div className="App">

    
    </div>
  );
}

export default App;
