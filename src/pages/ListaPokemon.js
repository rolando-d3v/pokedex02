import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { getAllPokemon, getPokemon } from "../services/pokemon";
import CardPokemon from "../components/CardPokemon";

function ListaPokemon() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevtUrl] = useState("");
  const [loading, setLoading] = useState(true);

 const initialUrl = "https://pokeapi.co/api/v2/pokemon";
  // const initialUrl = "https://pokeapi.glitch.me/v1/pokemon";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setPrevtUrl(response.previous);
      await loadingPokemon(response.results);
      console.log(response.results);
      
      setLoading(false);
    }
    fetchData();
  }, []);

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevtUrl(data.previous);
    setLoading(false);
  };

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevtUrl(data.previous);
    setLoading(false);
  };

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };
  console.log(pokemonData);

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
          <div>
            <button onClick={prev}>Regresar</button>
            <button onClick={next}>Siguiente</button>
          </div>
          <div className="row">
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
