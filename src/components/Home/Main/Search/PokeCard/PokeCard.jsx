import React from "react";

const PokeCard = ({order,imagen,tipo,nombre,click}) => {
  let Nombre = nombre[0].toUpperCase() + nombre.slice(1);
  return (
    <>
      <section className={tipo} onClick={click}>
        <p className="order">#{order}</p>
        <img src={imagen} alt="imagen" />
        <p>{Nombre}</p>
      </section>
    </>
  )
};

export default PokeCard;
