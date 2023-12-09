import React, { useContext } from 'react';
import { v4 as uuidv4 } from "uuid";
import debounce from 'lodash/debounce';
import { useState, useEffect } from "react";
import PokeCard from "./PokeCard";
import { useNavigate } from 'react-router-dom';
import { listContext } from '../../../../context/listContext';
import { userContext } from "../../../../context/authContext";
import { newContext } from "../../../../context/newContext";
import { signOut } from '../../../../../firebaseConfig';

const Search = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [pokemon, setPokemon] = useState("pikachu");
  const { list, updateList } = useContext(listContext);
  const { userstate, updateUser } = useContext(userContext);
  const { newPokemon, updatePokemon} = useContext(newContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (!response.ok) {
          let encontrado = false;
          for (let i = 0; i < newPokemon.length; i++) {
            if (newPokemon[i].name == pokemon) {
              encontrado = true;
              setData([newPokemon[i]]);
              const hasDuplicate = list.some(pokemon => pokemon.name === newPokemon[i].name);
              if (!hasDuplicate) {
                updateList([newPokemon[i], ...list])
              }
              break;
            }
          }
          if (!encontrado) {
            throw new Error('Network response was not ok');
          }
        } else {
          setError(null)
          const result = await response.json();
          let types = [];
          for (let i = 0; i < result.types.length; i++) {
            types.push(result.types[i].type.name)
          }
          let abilities = [];
          for (let i = 0; i < result.abilities.length; i++) {
            abilities.push(result.abilities[i].ability.name)
          }
          const nuevoPokemon = {
            id: uuidv4(), image: result.sprites.front_default, name: result.forms[0].name, order: result.id,
            types: types, abilities: abilities, weight: result.weight / 10, height: result.height / 10,
            hp: result.stats[0].base_stat, attack: result.stats[1].base_stat, defense: result.stats[2].base_stat,
            Sattack: result.stats[3].base_stat, Sdefense: result.stats[4].base_stat, speed: result.stats[5].base_stat
          }
          setData([nuevoPokemon]);
          if (list == null) {
            updateList([nuevoPokemon])
          } else {
            const hasDuplicate = list.some(pokemon => pokemon.name === nuevoPokemon.name);
            if (!hasDuplicate) {
              updateList([nuevoPokemon, ...list])
            }
          }
        }
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [pokemon]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newpokemon = document.querySelector("form input").value;
    if (newpokemon.length == 0) {
      alert("Tienes que ingresar el nombre de un pokemon")
    } else {
      setPokemon(newpokemon.toLowerCase())
    }
    document.querySelector("form").reset();
  }

  const handleClick = (key) => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == key) {
        navigate(`/detalles/${key}`);
        break;
      }
    }
  }

  const paintPokemon = () => {
    if (error) {
      return <div>No hemos encontrado ese pokemon, seguro que lo has escrito bien? <br />Error: {error}</div>;
    }

    if (!data) {
      return <div>Loading...</div>;
    }

    if (data != null) {
      return data.map(pokemon => (
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

  const handleSignOut = async () => {
    await signOut();
    updateUser(null);
  };

  const handleCreate = async () => {
    navigate("/create");
  };
  
  const busquedaRetardada = debounce(handleSubmit, 2000);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit"><img src="https://cdn2.iconfinder.com/data/icons/minimal-set-five/32/minimal-48-512.png" alt="Search" /></button>
        <input type="text" placeholder="busca aquí tu pokemon" name="pokemon" onChange={busquedaRetardada} />
        <button type="reset"><img src="https://cdn.icon-icons.com/icons2/2518/PNG/512/x_icon_150997.png" alt="Reset" /></button>
      </form>
      <section id="CardContainer">{paintPokemon()}</section>
      {userstate == null ? (
        <a href="/login" id='linklogin'>Inicia sesión para crear pokemons</a>
      ) : (
        <section id='linklogin'>
          <button type='button'onClick={handleCreate}>Crear pokemon</button><br />
          <button onClick={handleSignOut} type='button'>Logout</button>
        </section>
      )}
      
    </>
  )
};

export default Search;
