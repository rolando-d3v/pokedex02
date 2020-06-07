import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import ColorPokemon from "../../theme/ColorPokemon";
import "./BuscarPokemon.scss";

export default function BuscarPokemon() {
  const [poke, setPoke] = useState("");
  const [total, setTotal] = useState([]);
  const [filtraPoke, setFiltraPoke] = useState([]);

  console.log(filtraPoke);

  const LaApi = async () => {
    const url = `https://api-pokemons.herokuapp.com/pokemons/`;
    const res = await fetch(url);
    let data = await res.json();
    console.dir(data.evolution);
    setTotal(data);

    // if(data.error === 404){
    //   alert(`no existe pokemon con ese nombre ${pokemon}`)
    // } else {
    //   setTotal(data);
    // }
  };

  const cargarDatos = (ev) => {
    setPoke(ev.target.value);
  };

  const buscarPoke = (ev) => {
    ev.preventDefault();

    setFiltraPoke(total.filter((er) => er.color === poke));
    LaApi();
  };

  return (
    <div className="buscar-pokemon">
      <h3 className="text-center my-4">Buscar Pokemon</h3>
      <div className="row">
        <div className="col-4">
          <Form onSubmit={buscarPoke}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Pokemon por Colores</Form.Label>
              <select
                onChange={cargarDatos}
                className="form-control"
                name="pokemon"
                id="pokemon"
              >
                <option className="">Selecciona Color</option>
                <option value="green">Verde</option>
                <option value="red">Rojo </option>
                <option value="blue">Azul </option>
                <option value="brown">Maron</option>
                <option value="purple">Purpura</option>
                <option value="yellow">Amarillo</option>
                <option value="gray">Gris </option>
                <option value="pink">Rosado </option>
                <option value="white">Blanco </option>
                <option value="black">Negro </option>
              </select>
            </Form.Group>
            <Button block variant="primary" type="submit">
              Buscar Pokemon
            </Button>
          </Form>
        </div>
        {/* <div className="col-4">
          <Form onSubmit={buscarPoke}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Pokemon por Habitad</Form.Label>
              <select
                onChange={cargarDatos}
                className="form-control"
                name="pokemon"
                id="pokemon"
              >
                <option className="">Selecciona Color</option>
                <option value="green">Verde</option>
                <option value="red">Rojo </option>
                <option value="blue">Azul </option>
                <option value="brown">Maron</option>
                <option value="purple">Purpura</option>
                <option value="yellow">Amarillo</option>
                <option value="gray">Gris </option>
                <option value="pink">Rosado </option>
                <option value="white">Blanco </option>
                <option value="black">Negro </option>
              </select>
            </Form.Group>
            <Button block variant="primary" type="submit">
              Buscar Pokemon
            </Button>
          </Form>
        </div> */}
      </div>
      <br />
      <div className="card-poke row ">
        {filtraPoke.map((ev) => (
          <Card
            style={{ backgroundColor: ColorPokemon[ev.color] }}
            key={ev.name}
            className="m-2"
          >
            <Card.Img variant="top" src={ev.img} style={{ width: "150px" }} />
            <Card.Body>
              <Card.Text className="text-center"> N° {ev.id}</Card.Text>
              <Card.Title> {ev.name} </Card.Title>
              <Card.Text>
                Peso : {ev.weight / 10} {""} Kg.{" "}
              </Card.Text>
              <Card.Text>
                Altura :
                {("" + ev.height).length === 2
                  ? ev.height / 10 + " Mt"
                  : ev.height * 10 + "Cm"}{" "}
              </Card.Text>
              <div className="d-flex justify-content-around px-0">
                {ev.evolution.map((e) => (
                  <div key={e.name}>
                    <li className="list-group text-center"> N#{e.id} </li>
                    <li className="list-group text-center"> {e.name} </li>
                    <img
                      loading="lazy"
                      src={e.img}
                      alt="sss"
                      style={{ width: "6rem" }}
                    />
                  </div>
                ))}
              </div>
              {/* <Button block variant="primary">
                Mas detalles
              </Button> */}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
