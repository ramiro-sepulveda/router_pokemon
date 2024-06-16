import "./App.css";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import Pokemones from "./views/Pokemones";
import { Route, Routes } from "react-router-dom";
import PokemonProvider from "./context/ContextPokemon";
import PokemonDetail from "./views/PokemonDetail";

function App() {
  return (
    <>
      <PokemonProvider>
        <Navigation />
        <Routes>
          <Route path="/router_pokemon/" element={<HomePage />} />
          <Route path="/router_pokemon/pokemones" element={<Pokemones />} />
          <Route path="/router_pokemon/pokemones/:name" element={<PokemonDetail />} />
        </Routes>
      </PokemonProvider>
    </>
  );
}

export default App;
