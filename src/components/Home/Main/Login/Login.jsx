import React, { useContext } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../../../../../firebaseConfig';
import { userContext } from "../../../../context/authContext";
import { update } from 'lodash';

const Login = () => {
  const { userstate, updateUser } = useContext(userContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      updateUser("logged");
      navigate(`/search`);
      console.log(result.user);
    } catch (error) {
      updateUser(null)
      console.error(error);
    }
  };

  return (
    <>
    <div id="google">
      <p>Inicia sesión con google:</p>
      <img onClick={handleGoogleSignIn} src="https://user-images.githubusercontent.com/1531669/41761606-83b5bd42-762a-11e8-811a-b78fdf68bc04.png" alt="google"/>
    </div>
    </>
  );
};

export default Login;
