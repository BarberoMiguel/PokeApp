import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { listContext } from "../../context/listContext";


const Detalles = () => {
  const { list } = useContext(listContext);

  let { id } = useParams();
  let pokemonCard;
  for (let i = 0; i < list.length; i++) {
    if (list[i].id == id) {
      pokemonCard = list[i];
      break;
    }
  }

  let Nombre = pokemonCard.name[0].toUpperCase() + pokemonCard.name.slice(1);

  const handleClick = () => {
    history.back()
  }

  const calcularVida = () => {
    return (pokemonCard.hp / 200) * 100 + '%';
  }

  const calcularAtaque = () => {
    return (pokemonCard.attack / 200) * 100 + '%';
  }

  const calcularDefensa = () => {
    return (pokemonCard.defense / 200) * 100 + '%';
  }

  const calcularSAtaque = () => {
    return (pokemonCard.Sattack / 200) * 100 + '%';
  }

  const calcularSDefensa = () => {
    return (pokemonCard.Sdefense / 200) * 100 + '%';
  }

  const calcularSpeed = () => {
    return (pokemonCard.speed / 200) * 100 + '%';
  }

  return (
    <>
      <section id={pokemonCard.types[0]}>
        <section>
          <img src="https://cdn-icons-png.flaticon.com/512/3114/3114883.png" alt="Back" onClick={handleClick}/>
          <span>{Nombre}</span>
          <span>#{pokemonCard.order}</span><br />
        </section>
        <img src={pokemonCard.image} alt="pokemon" />
        <section id='info'>
          <section className='types'>
            <span className={pokemonCard.types[0]}>{pokemonCard.types[0][0].toUpperCase() + pokemonCard.types[0].slice(1)}</span> {pokemonCard.types[1] ? (<span className={pokemonCard.types[1]}>{pokemonCard.types[1][0].toUpperCase() + pokemonCard.types[1].slice(1)}</span>) : ""}
          </section>
          <br /><p className={pokemonCard.types[0]}><b>About</b></p>
          <section className='container'>
              <section className='info'>
                <p>{pokemonCard.weight} kg</p>
                <p><b>Weight</b></p>
              </section>
              <section className='info'>
                <p>{pokemonCard.height} m</p>
                <p><b>Height</b></p>
              </section>
              <section className='info'>
                <p>{pokemonCard.abilities[0]}</p> {pokemonCard.abilities[1] ? (<p>{pokemonCard.abilities[1]}</p>) : ""}
                <p><b>Moves</b></p>
              </section>
          </section>
          <p className={pokemonCard.types[0]}><b>Base Stats</b></p>
          <section className='container'>
            <section className='stats'>
              <p className={pokemonCard.types[0]}><b>HP</b></p>
              <p className={pokemonCard.types[0]}><b>ATK</b></p>
              <p className={pokemonCard.types[0]}><b>DEF</b></p>
              <p className={pokemonCard.types[0]}><b>SATK</b></p>
              <p className={pokemonCard.types[0]}><b>SDEF</b></p>
              <p className={pokemonCard.types[0]}><b>SPD</b></p>
            </section>
            <section className='values'>
              <p>{pokemonCard.hp}</p>
              <p>{pokemonCard.attack}</p>
              <p>{pokemonCard.defense}</p>
              <p>{pokemonCard.Sattack}</p>
              <p>{pokemonCard.Sdefense}</p>
              <p>{pokemonCard.speed}</p>
            </section>
            <section className='grafics'>
              <div className="barra-vida">
                    <div className="vida" style={{ width: calcularVida() }}></div>
                  </div>
              <div className="barra-vida">
                  <div className="vida" style={{ width: calcularAtaque() }}></div>
                </div>
              <div className="barra-vida">
                  <div className="vida" style={{ width: calcularDefensa() }}></div>
                </div>
              <div className="barra-vida">
                  <div className="vida" style={{ width: calcularSAtaque() }}></div>
                </div>
              <div className="barra-vida">
                  <div className="vida" style={{ width: calcularSDefensa() }}></div>
                </div>
              <div className="barra-vida">
                  <div className="vida" style={{ width: calcularSpeed() }}></div>
                </div>
            </section>
          </section>
        </section>
      </section>
    </>
  )
};

export default Detalles;
