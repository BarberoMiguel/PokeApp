import React, { useContext } from 'react';
import PokeCard from "../Search/PokeCard";
import { useNavigate } from 'react-router-dom';
import { listContext } from '../../../../context/listContext';

const Busquedas = () => {
  const { list } = useContext(listContext);
  const navigate = useNavigate();

  const handleClick = (key) => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == key) {
        navigate(`/detalles/${key}`);
        break;
      }
    }
  }

  const paintPokemon = () => {
    if (list == null) {
      return <div>No has realizado busquedas todavía</div>;
    } else {
      return list.map(pokemon => (
        <PokeCard
          key={pokemon.id}
          order={pokemon.order}
          imagen={pokemon.image}
          tipo={pokemon.types[0]}
          nombre={pokemon.name}
          click={() => handleClick(pokemon.id)}
        />
      ));
    }
  };

  return (
    <>
    <section id='container'>
      <div>Aquí tienes tus últimas busquedas:</div>
      <section className="CardContainer">{paintPokemon()}</section>
    </section>
    </>
  )
};

export default Busquedas;
