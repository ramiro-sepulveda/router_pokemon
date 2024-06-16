import { Container } from "react-bootstrap";
import MiApi from "../components/MiApi";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../context/ContextPokemon";
import { useContext } from "react";

const Pokemones = () => {
  const { pokemon} = useContext(PokemonContext);
  const navigate = useNavigate();

  const irAPokemones = () => {
    navigate(`/router_pokemon/pokemones/${pokemon}`);
  };
  return (
    <>
      <Container className="d-flex flex-column gap-2 py-5 align-items-center">
        <h1>Selecciona un Pokemón</h1>

        <MiApi />
        <Button variant="dark" onClick={irAPokemones}>Ver Detalles</Button>
      </Container>
    </>
  );
};

export default Pokemones;
