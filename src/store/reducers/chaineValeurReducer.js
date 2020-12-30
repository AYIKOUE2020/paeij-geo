import {
  CHAINE_VALEUR_LIST_FAIL,
  CHAINE_VALEUR_LIST_REQUEST,
  CHAINE_VALEUR_LIST_SUCCESS,
} from "../constants/chaineValeurConstant"

export const chaineValeurReducer = (
  state = { filieres: [] },
  { type, payload }
) => {
  switch (type) {
    case CHAINE_VALEUR_LIST_REQUEST:
      return { ...state, loading: true }
    case CHAINE_VALEUR_LIST_SUCCESS:
      return { ...state, loading: false, filieres: payload }
    case CHAINE_VALEUR_LIST_FAIL:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}
