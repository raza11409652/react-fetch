import React from 'react';
import './App.css';
import './assets/bootstrap.min.css'
import { useEffect , useState } from 'react';
import Beers from './Module/Beer';

const App =()=>{
  const SERVER = "https://api.punkapi.com/v2/beers";
  const SERVER_NAME = "https://api.punkapi.com/v2/beers?beer_name=";
  const [beer, setBeer] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(()=>{
    console.log("SERVER is running...");
    getBeers();
  } , [search]);
  const getBeers = async ()=>{
    let response; 
    if(search ===null || search ===""){
     response  = await fetch(SERVER) ; 
    }else{
     response = await fetch(SERVER_NAME+search) ; 
    }
   
    const data = await response.json();
    console.log(data[0]);
    setBeer(data);
    

  }
  const updateSearch = e=>{
    setSearch(e.target.value) ;  
    console.log(search);
    
  }
  return(
    <div className="container">
      <div className="center-allign">
        <div className="search-wrapper">
          <input className="form-control"  value={search} onChange={updateSearch}/>
           
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
