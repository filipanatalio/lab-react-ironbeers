import Header from '../Header/Header'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function AllBeers() {
    const [beers, setBeers] = useState([]);
  
    const fetchData = async () => {
        try {
          let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
    
          let beersFromAPI = response.data;
          console.log(beersFromAPI);
          setBeers(beersFromAPI);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);


  return (
    <div>
        <Header />
        <h1>All Beers</h1>
        {beers.map((beer) => {
            return (
                <div key={beer._id}>
                    <Link className='links' to={`/beer/${beer._id}`}>
                        <img src={beer.image_url} alt="beer img" />
                        <h3>{beer.name}</h3>
                        <p>{beer.tagline}</p>
                        <p> <b> Created By:</b> {beer.contributed_by}</p>
                    </Link>
                </div>
            )
        })}
        
    </div>
  )
}

export default AllBeers