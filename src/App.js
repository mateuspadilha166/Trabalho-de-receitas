import React, { useEffect, useState } from "react";
import './index.css';

function App() {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    function loadApi() {
      let url = "receitas/todas";
      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          console.log(json);
          setReceitas(json); 
        })
        .catch((error) => {
          console.error("Erro ao carregar API:", error);
        });
    }
    loadApi();
  }, []);

  return (
    <div className="container">
      <header>
        <strong>MAZI RECEITAS</strong>
      </header>
      {receitas.length === 0 ? (
        <p>Carregando receitas...</p>
      ) : (
        receitas.map((item) => {
          return (
            <article key={item.id} className="post">
              <strong className="titulo">{item.nome}</strong>
              <img src={item.imagem} alt={item.nome} className="capa" />
              <p className="subtitulo">{item.descricao}</p>
              {/* <button className="botao" onClick={() => handleClick(item)}>
                Acessar
              </button> */}
            </article>
          );
        })
      )}
    </div>
  );
}

export default App;
