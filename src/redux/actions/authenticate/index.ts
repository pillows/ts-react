import { Dispatch } from "redux";
import {
  AuthenticateDispatchTypes,
  LOG_IN_LOADING,
  LOG_IN_SUCCESS,
  LOG_IN_FAIL,
  LOG_OUT,
} from "./authenticateTypes";

// import axios from "axios";

// export const GetPokemon = (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
//   try {
//     dispatch({
//       type: POKEMON_LOADING
//     })

//     const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

//     dispatch({
//       type: POKEMON_SUCCESS,
//       payload: res.data
//     })

//   } catch(e) {
//     dispatch({
//       type: POKEMON_FAIL
//     })
//   }
// };

export const authenticate = (email: string) => (
  dispatch: Dispatch<AuthenticateDispatchTypes>
) => {
  try {
    dispatch({ type: LOG_IN_LOADING });
    setTimeout(() => {
      dispatch({
        type: LOG_IN_SUCCESS,
        payload: { name: email },
      });
    }, 2000);
  } catch (e) {
    dispatch({
      type: LOG_IN_FAIL,
      payload: { message: "Invalid Credentials" },
    });
  }
};

export const validateError = (message: string) => (
  dispatch: Dispatch<AuthenticateDispatchTypes>
) => {
  dispatch({
    type: LOG_IN_FAIL,
    payload: { message },
  });
};

export const logOut = () => (dispatch: Dispatch<AuthenticateDispatchTypes>) => {
  dispatch({
    type: LOG_OUT,
  });
};
