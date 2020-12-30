import axios from "axios"
import {
  CHAINE_VALEUR_LIST_FAIL,
  CHAINE_VALEUR_LIST_REQUEST,
  CHAINE_VALEUR_LIST_SUCCESS,
} from "../constants/chaineValeurConstant"

export const getChaineValeur = (filiere) => async (dispatch) => {
  try {
    dispatch({ type: CHAINE_VALEUR_LIST_REQUEST })
    const { data } = await axios.get(`/filieres/${filiere}`)
    dispatch({ type: CHAINE_VALEUR_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: CHAINE_VALEUR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
