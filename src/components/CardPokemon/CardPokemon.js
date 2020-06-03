import React from "react";
import { Card, Button } from "react-bootstrap";
import TypeColors from "../../theme/TypeColors"
import "./CardPokemon.css";


function CardPokemon({ pokemon }) {
  return (
    <Card className="m-2" style={{ width: "16rem" , border: "3px solid blue" }} >
      <Card.Body>
        <Card.Title className="text-uppercase" >{pokemon.name}</Card.Title>
        <Card.Img style={{width: "120px"}} variant="top" src={pokemon.sprites.front_default} />
        <ul className="d-flex justify-content-around px-0 ">
          {pokemon.types.map((ev, i) => (
            <button key={i} className="btn"  style={{backgroundColor: TypeColors[ev.type.name] }}  >
              {ev.type.name}
            </button>
          ))}
        </ul>
        <Card.Text> id : {pokemon.id} </Card.Text>
        <Card.Text> Peso : {pokemon.weight} {''} Kg </Card.Text>
        <Card.Text> Altura : {pokemon.height} {''} Cm </Card.Text>
        <Card.Text> Habilidad : {pokemon.abilities[0].ability.name} </Card.Text>
        <Button variant="primary">Ver pokemon</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPokemon;
