/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import Form from "react-bootstrap/Form";
import { PokemonContext } from "../context/ContextPokemon";
import { useContext } from "react";

function MiApi() {
  const [api, setApi] = useState([]);
  const { setPokemon } = useContext(PokemonContext);

  useEffect(() => {
    consultarApi();
    setPokemon("");
  }, [setPokemon]);

  const consultarApi = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);

    setApi(data.results);
  };

  function mayuscula(string) {
    if (!string) return string; // Manejar el caso de una cadena vacía
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="w-50 py-3 fs-5">
      <Form.Select onChange={({ target }) => setPokemon(target.value)}>
        <option>Pokemones</option>
        {api.map((objeto, index) => (
          <option key={index} value={objeto.name}>
            {mayuscula(objeto.name)}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}

export default MiApi;
