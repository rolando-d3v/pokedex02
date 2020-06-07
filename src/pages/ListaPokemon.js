import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
// import { getAllPokemon, getPokemon } from "../services/pokemon";
import CardPokemon from "../components/CardPokemon";

function ListaPokemon() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

//  const initialUrl = "https://pokeapi.co/api/v2/pokemon";

    

useEffect(() => {
  async function fetchData() {
    const url = "https://api-pokemons.herokuapp.com/pokemons/";
      const res = await fetch(url);
      const data = await res.json()
      setPokemonData(data)
      
      console.log(data);
      setLoading(false);
    }
    fetchData();
  }, []);



  return (
    <div className="App">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center ">
          <Spinner animation="border" role="status">
            {" "}
          </Spinner>
          <span> Loading...</span>
        </div>
      ) : (
        <React.Fragment>
          <div className="row justify-content-around">
            {pokemonData.map((pokemon, i) => (
              <CardPokemon key={i} pokemon={pokemon} />
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default ListaPokemon;
