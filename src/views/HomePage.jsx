import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <Container className="d-flex flex-column gap-2 py-5 align-items-center">
        <h1>Bienvenido Maestro Pokemón</h1>
        <img src="./PIKACHU.png" alt="pikachu" width={250} className="pt-5"/>
      </Container>
    </>
  );
};

export default HomePage;
