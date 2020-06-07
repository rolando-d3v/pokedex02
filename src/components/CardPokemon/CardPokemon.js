import React from "react";
import { Card } from "react-bootstrap";
import TypeColors from "../../theme/TypeColors"
import ColorPokemon from "../../theme/ColorPokemon";
import "./CardPokemon.scss";


function CardPokemon({ pokemon }) {
  return (
    <Card
      className="my-2 card-pokemon"
      style={{ backgroundColor: ColorPokemon[pokemon.color], width: "21rem" }}
    >
      <Card.Body>
        <Card.Title className="text-uppercase text-left">{pokemon.name}</Card.Title>
        <Card.Img style={{ width: "200px" }} variant="top" src={pokemon.img} />
        <Card.Text> N# : {pokemon.id} </Card.Text>
        <Card.Text>
          {" "}
          Peso : {pokemon.weight / 10} {""} Kg.{" "}
        </Card.Text>
        <Card.Text>
          {" "}
          Altura : {( '' + pokemon.height).length === 2 ?  pokemon.height / 10  + " Mt" : pokemon.height * 10 + "Cm" } {" "}
        </Card.Text>
        <Card.Text> Habilidad : {pokemon.color} </Card.Text>
        <div className="tipo-pokemon" >
          {pokemon.types.split(",").map((t) => (
            <button style={{backgroundColor: TypeColors[t] }}  key={t}>{t}</button>
          ))}
        </div>
        <ul className="d-flex name-evolution justify-content-around px-0 ">
          {pokemon.evolution.map((ev, i) => (
            <div key={i} className="">
              <li className="list-group"> N#{ev.id}</li>
              <img loading="lazy"
                style={{ width: "100px" }}
                src={ev.img}
                alt="img"
              />
              <li className="list-group">{ev.name}</li>
            </div>
          ))}
        </ul>
        {/* <Button variant="primary">Ver pokemon</Button> */}
      </Card.Body>
    </Card>
  );
}

export default CardPokemon;
