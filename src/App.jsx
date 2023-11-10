import axios from 'axios';
import './App.css';

import { useState } from 'react';
import Weather from './components/Weather';

function App() {
  const [data, setData] = useState({});
  const [location, setlocation] = useState("");

  const API_KEY = '43ffc794f02582396dc0f324a88b603a';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const searchLocation = (event) => {
    if(event.key === "Enter"){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setlocation("")
    }
  }
  return (
    <div className="App">
      <div>
        <input type='text' placeholder="Enter location"  className='searchbox'
        value={location} 
        onChange={(event) => setlocation(event.target.value)} 
        onKeyDownCapture={searchLocation}/>

        <Weather weatherData={data}/>
      </div>
      

      
    </div>
  );
}

export default App;
