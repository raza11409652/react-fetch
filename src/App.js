import React from 'react';
import './App.css';
import './assets/bootstrap.min.css'
import { useEffect , useState } from 'react';
import Beers from './Module/Beer';

const App =()=>{
  const SERVER = "https://api.punkapi.com/v2/beers";
  const [beer, setBeer] = useState([]);
  useEffect(()=>{
    console.log("SERVER is running...");
    getBeers();
  } , []);
  const getBeers = async ()=>{
    const response = await fetch(SERVER) ; 
    const data = await response.json();
    console.log(data[0]);
    setBeer(data);
    

  }
  return(
    <div className="container">
      <div className="center-allign">
        <div className="search-wrapper">
          <input className="form-control" />
           
        </div>
      </div>
      <div className="row">
      {
        beer.map(
          x=>(
            <Beers 
            key={x.id}
            title={x.name}  tagline={x.tagline} 
            image = {x.image_url} 
            description = {x.description}
            first_brewed = {x.first_brewed}
            brewers_tips = {x.brewers_tips}
            />
          )
        )
      }
      </div>
    </div>
  ) ;
};

export default App;
