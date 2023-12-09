import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from "uuid";
import { newContext } from "../../../../context/newContext";

const Create = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { newPokemon, updatePokemon} = useContext(newContext);

  const opciones = ["nada", "normal", "rock", "fire", "water", "electric", "grass", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "ghost", "dark", "dragon", "steel", "fairy"];

  const onSubmit = (data) => {
    if (data.opcion == data.opcion2) {
      alert("El pokemon no puede tener el mismo tipo repetido")
    } else if (data.opcion == "nada") {
      alert("El tiene que tener un tipo definido")
    } else {
      let types = [data.opcion];
      if (data.opcion2 != "nada") {
        types.push(data.opcion2)
      }
      let abilities = [data.movimiento1];
      if (data.movimiento2 != "") {
        types.push(data.movimiento2)
      }
      const inventedPokemon = {
        id: uuidv4(), image: data.image, name: data.nombre.toLowerCase(), order: data.id,
        types: types, abilities: abilities, weight: data.peso, height: data.altura,
        hp: data.vida, attack: data.ataque, defense: data.defensa,
        Sattack: data.Satk, Sdefense: data.Sdef, speed: data.speed
      }
      updatePokemon([inventedPokemon,...newPokemon])
      document.getElementById("create").reset();
      alert("Nuevo pokemon creado")
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id='create'>
      <label>Id:</label>
      <input {...register('id', { required: 'Este campo es obligatorio', pattern: { value: /^[0-9]+$/, message: 'Por favor, ingresa solo números' }, })} />
      {errors.id && <p>{errors.id.message}</p>}

      <label>Nombre:</label>
      <input {...register('nombre', { required: 'Este campo es obligatorio', minLength: { value: 3, message: 'El nombre debe tener al menos 3 letras'}, })} />
      {errors.nombre && <p>{errors.nombre.message}</p>}

      <label>Imagen:</label>
      <input {...register('image', { required: 'Este campo es obligatorio' })} />
      {errors.image && <p>{errors.image.message}</p>}

      <label>Tipo 1:</label>
      <select {...register('opcion', { required: 'Selecciona una opción' })}>
        {opciones.map((opcion, index) => (
          <option key={index} value={opcion}>
            {opcion}
          </option>
        ))}
      </select>
      {errors.opcion && <p>{errors.opcion.message}</p>}

      <label>Tipo 2:</label>
      <select {...register('opcion2')}>
        {opciones.map((opcion2, index) => (
          <option key={index} value={opcion2}>
            {opcion2}
          </option>
        ))}
      </select>

      <label>Movimiento1:</label>
      <input type='text' {...register('movimiento1', { required: 'Este campo es obligatorio'})} />
      {errors.movimiento1 && <p>{errors.movimiento1.message}</p>}

      <label>Movimiento2:</label>
      <input type='text' {...register('movimiento2')} />
      
      <label>Altura:</label>
      <input {...register('altura', { required: 'Este campo es obligatorio', pattern: { value: /^[0-9.]+$/, message: 'Por favor, ingresa solo números' }, })} />
      {errors.altura && <p>{errors.altura.message}</p>}

      <label>Peso:</label>
      <input {...register('peso', { required: 'Este campo es obligatorio', pattern: { value: /^[0-9.]+$/, message: 'Por favor, ingresa solo números' }, })} />
      {errors.peso && <p>{errors.peso.message}</p>}

      <label>Vida base:</label>
      <input {...register('vida', { required: 'Este campo es obligatorio', pattern: { value: /^[0-9]+$/, message: 'Por favor, ingresa solo números' }, })} />
      {errors.vida && <p>{errors.vida.message}</p>}

      <label>Ataque base:</label>
      <input {...register('ataque', { required: 'Este campo es obligatorio', pattern: { value: /^[0-9]+$/, message: 'Por favor, ingresa solo números' }, })} />
      {errors.ataque && <p>{errors.ataque.message}</p>}

      <label>Defensa base:</label>
      <input {...register('defensa', { required: 'Este campo es obligatorio', pattern: { value: /^[0-9]+$/, message: 'Por favor, ingresa solo números' }, })} />
      {errors.defensa && <p>{errors.defensa.message}</p>}

      <label>Ataque especial:</label>
      <input {...register('Satk', { required: 'Este campo es obligatorio', pattern: { value: /^[0-9]+$/, message: 'Por favor, ingresa solo números' }, })} />
      {errors.Satk && <p>{errors.Satk.message}</p>}

      <label>Defensa especial:</label>
      <input {...register('Sdef', { required: 'Este campo es obligatorio', pattern: { value: /^[0-9]+$/, message: 'Por favor, ingresa solo números' }, })} />
      {errors.Sdef && <p>{errors.Sdef.message}</p>}

      <label>Velocidad:</label>
      <input {...register('speed', { required: 'Este campo es obligatorio', pattern: { value: /^[0-9]+$/, message: 'Por favor, ingresa solo números' }, })} />
      {errors.speed && <p>{errors.speed.message}</p>}

      <button type="submit">Crear</button>
    </form>
  );
};

export default Create;
