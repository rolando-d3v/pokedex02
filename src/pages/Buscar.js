import React, { useState} from "react";
import { Form, Button, Card } from "react-bootstrap";

export default function Buscar() {
  const [poke, setPoke] = useState({
    pokemon: "",
  });

  const [total, setTotal] = useState([]);
  
  const { pokemon } = poke;

  const LaApi = async () => {
    const url = `https://pokeapi.glitch.me/v1/pokemon/${pokemon}`
    const res = await fetch(url);
    let data = await res.json();
    console.log(data);
    
    if(data.error === 404){
      alert(`no existe pokemon con ese nombre ${pokemon}`)
    } else {
      setTotal(data);
    }
  };

  const cargarDatos = (ev) => {
    setPoke({
      pokemon: ev.target.value,
    });
  };

  const buscarPokemon = (ev) => {
    ev.preventDefault();
    if (!pokemon) {
      alert("ingresa nombre de pokemon");
    } else {
      LaApi();
    }
  };

  return (
    <div>
      <h3>Buscar Pokemon</h3>
      <Form onSubmit={buscarPokemon}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Pokemon</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre de Pokemon"
            name="pokemon"
            onChange={cargarDatos}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Buscar Pokemon
        </Button>
      </Form>

      <div>
        {total.map((ev) => (
          <Card key={ev.name} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ev.sprite} />
            <Card.Body>
              <Card.Title> {ev.name} </Card.Title>
              <Card.Text>{ev.description}</Card.Text>
              <Card.Text className="text-center"  > N° {ev.number}</Card.Text>
              <ul className="d-flex justify-content-around px-0" >
                {ev.family.evolutionLine.map(e => (
                  <button className="btn btn-danger" key={e}  > {e} </button>
                ))}
              </ul>
              <Button block variant="primary">Mas detalles</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}



////

// import React, { Component } from "react";
// import { Form, Button } from "react-bootstrap";

// export default class Buscar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       img: "#",
//     };
//   }

//   LaApi = async () => {
//     let res = await fetch(`https://pokeapi.glitch.me/v1/pokemon/${this.state.name}`);
//     let data = await res.json();
//     console.log(data)
//     this.setState({
//         img: data.sprite
//     })
//   };

//   cargarDatos = ev => {
//       this.setState({
//           name: ev.target.value
//       })
//   }

//   buscarPokemon = ev => {
//       ev.preventDefault()
//       const poke = this.state.name
//       console.log(poke);
//       this.LaApi()

//   }

//   render() {
//     return (
//       <div>
//         <h3>Buscar Pokemon</h3>
//         <Form onSubmit={this.buscarPokemon} >
//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Pokemon</Form.Label>
//             <Form.Control type="text" placeholder="Nombre de Pokemon"
//             value={this.state.name}
//             onChange={this.cargarDatos}
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Buscar Pokemon
//           </Button>
//         </Form>

//         <img src={this.state.img} alt=""/>
//       </div>
//     );
//   }
// }
