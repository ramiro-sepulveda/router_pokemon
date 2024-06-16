import { useParams } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

const PokemonDetail = () => {
  const [pokemonApi, setPokemonApi] = useState([]);
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  function mayuscula(string) {
    if (!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    consultarApi();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const consultarApi = async () => {
    try {
      const url = "https://pokeapi.co/api/v2/pokemon/" + name;
      console.log(url);
      const response = await fetch(url);
      const data = await response.json();
      console.log([data]);
      setPokemonApi([data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Cargando</div>;
  } else {
    return (
      <>
        <Container className=" mt-5 d-flex justify-content-center">
          <Card
            border="secondary"
            style={{ width: "35rem" }}
            className=" d-flex flex-row align-items-center"
          >
            <Card.Img
              variant="top"
              src={pokemonApi[0].sprites.front_default}
              style={{ width: "300px" }}
              alt="Pokemon Seleccionado"
            />
            <Card.Body className="py-0">
              <Card.Title className=" text-center fs-2">
                {mayuscula(name)}
              </Card.Title>

              <ul>
                {pokemonApi[0].stats.map((el, index) => (
                  <li key={index}>
                    {mayuscula(el.stat.name)}: {el.base_stat}
                  </li>
                ))}
              </ul>
              {pokemonApi[0].types.map((el, index) => (
                <p key={index}>{el.type.name.toUpperCase()}</p>
              ))}
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
};

export default PokemonDetail;
