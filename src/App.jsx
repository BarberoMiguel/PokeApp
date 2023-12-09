import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import { listContext } from "./context/listContext";
import { userContext } from "./context/authContext";
import { newContext } from "./context/newContext";
import './App.css';
import Home from './components/Home';
import Detalles from './components/Detalles';


function App() {
  const [list, setList] = useState(null);

  const updateList = (newList) => {
    setList(newList);
  };
  const listData = { list, updateList };

  const [userstate, setUser] = useState(null);

  const updateUser = (newUser) => {
    setUser(newUser);
  };
  const userData = { userstate, updateUser };

  const [newPokemon, setPokemon] = useState([]);

  const updatePokemon = (inventedPokemon) => {
    setPokemon(inventedPokemon);
  };
  const newData = { newPokemon, updatePokemon };
  

  return (
    <>
      <userContext.Provider value={userData}>
      <listContext.Provider value={listData}>
      <newContext.Provider value={newData}>
        <Routes>
          <Route path="*" element={<Home/>} />
          <Route path="/detalles/:id" element={<Detalles/>} />
          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
      </newContext.Provider>
      </listContext.Provider>
      </userContext.Provider>
    </>
  )
}

export default App
