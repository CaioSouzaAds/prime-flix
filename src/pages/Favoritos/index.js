import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./favoritos.css";

function Favoritos() {
  const [filmes, setFilme] = useState([]);
  const [favoritos, setFavoritos] = useState(true);

  useEffect(() => {
    const meusFavoritos = localStorage.getItem("@primeflix");

    if (meusFavoritos) {
      setFilme(JSON.parse(meusFavoritos));
      setFavoritos(true);
    } else {
      setFavoritos(false);
    }
  }, []);

  return (
    <div className="div-h1">
      <h1>
        {favoritos ? "Seus favoritos" : "Sua lista de favoritos está vazia"}
      </h1>
      <div className="meus-filmes">
        {filmes.map((item) => {
          return (
            <article key={item.id}>
              <strong>{item.title}</strong>

              <img
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt={item.title}
              />
              <div className="buttons">
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button>Excluir</button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Favoritos;
