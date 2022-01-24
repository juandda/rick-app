import './App.css';
import axios from "axios"
import { useEffect, useState } from 'react';
import SearchBox from './components/SearchBox'
import LocationInfo from './components/LocationInfo';
import ResidentList from './components/ResidentList';
const id = 1

function App() {

  const [location, setLocation] = useState({})

  useEffect(() =>{
    axios
      .get(`https://rickandmortyapi.com/api/location/${id}`)
      .then((res) => setLocation(res.data));
  },[])


  return (
    <div className="App">
      <div className='banner-container'></div>
      <div className='title-container'><h1>Rick and Morty Wiki</h1></div>   
      <SearchBox
      setLocation={setLocation}/>
      <LocationInfo
      location={location}/>
      <ResidentList
      location={location}/>
    </div>
  );
}

export default App;
