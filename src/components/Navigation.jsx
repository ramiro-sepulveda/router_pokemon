import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");

  return (
    <Navbar bg="dark" variant="dark">
      <Container className=" justify-content-start">
        <Navbar.Brand>
          <NavLink to="/router_pokemon/" end className={setActiveClass}>
            <img src="./pin.png" alt="pokepin" width={50}/>
          </NavLink>
        </Navbar.Brand>
      </Container>
      <Container className="justify-content-end gap-4 fs-3">
        <NavLink to="/router_pokemon/" end className={setActiveClass}>
          Home
        </NavLink>
        <NavLink to="/router_pokemon/pokemones" end className={setActiveClass}>
          Pokemones
        </NavLink>
      </Container>
    </Navbar>
  );
};

export default Navigation;
