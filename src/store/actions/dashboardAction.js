import axios from "axios"
import {
  DASHBOARD_DETAILS_FAIL,
  DASHBOARD_DETAILS_REQUEST,
  DASHBOARD_DETAILS_SUCCESS,
  DASHBOARD_LIST_FAIL,
  DASHBOARD_LIST_REQUEST,
  DASHBOARD_LIST_SUCCESS,
} from "../constants/dashboardConstant"

export const getRealisations = (queryString) => async (dispatch) => {
  try {
    dispatch({ type: DASHBOARD_LIST_REQUEST })
    const { data } = await axios.get(`/dashboard?${queryString}`)
    dispatch({ type: DASHBOARD_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: DASHBOARD_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const getRealisationDetails = (composante, id) => async (dispatch) => {
  try {
    dispatch({ type: DASHBOARD_DETAILS_REQUEST })
    const { data } = await axios.get(`/${composante}/${id}`)
    dispatch({ type: DASHBOARD_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: DASHBOARD_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
