import React, { useState, useEffect } from "react";
import api from "../../api";
import TelaInicial from "./Componentes/Tela Inicial";

function Galeria (Props) {
  const [animals, setAnimals] = useState([])

  useEffect(() => {
    api
      .get('/animals/rand/10')
      .then(response => {
        setAnimals(response.data);
      })
    .catch((err) => {
      console.log(err);
    });
  }, []) 

  return (
    <>
      <TelaInicial />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h1 id="">Galeria</h1>
      <ul> 
        {animals.map(animal => (
          <li key={animal.id}>
            <p>{animal.name}</p>
          </li> 
        ))}
      </ul>
      {/* <button onClick={animals}>
        Novos animais
      </button> */}
    </>
  ) 
}

export default Galeria;