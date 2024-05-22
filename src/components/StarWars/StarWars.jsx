import React, { useEffect, useState } from 'react'
import axios from "axios";

const baseURL = "https://swapi.dev/api/people/";

const StarWars = () => {
  const [characters, getCharacters] = useState([])

  useEffect(() =>{
    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL);
        const characters = response.data.results;
        getCharacters(characters);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    }
    fetchData();
  },[])
  return (
    <div>
      <h1>Characters</h1>
      <div>{characters.map((character, index) => (
          <p key={index}>{character.name}</p>
        ))}</div>
    </div>
  )
}

export default StarWars