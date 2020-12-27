import axios from "axios"
import {
  CANTON_LIST_FAIL,
  CANTON_LIST_REQUEST,
  CANTON_LIST_SUCCESS,
  PREFECTURE_LIST_FAIL,
  PREFECTURE_LIST_REQUEST,
  PREFECTURE_LIST_SUCCESS,
  VILLAGE_LIST_FAIL,
  VILLAGE_LIST_REQUEST,
  VILLAGE_LIST_SUCCESS,
} from "../constants/searchConstant"

// GET	/api/regions/1/prefectures
export const getPrefectures = (region) => async (dispatch) => {
  try {
    dispatch({ type: PREFECTURE_LIST_REQUEST })
    const { data } = await axios.get(`/regions/${region}/prefectures`)
    dispatch({
      type: PREFECTURE_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PREFECTURE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
// GET	/api/prefectures/1/cantons
export const getCantons = (prefecture) => async (dispatch) => {
  try {
    dispatch({ type: CANTON_LIST_REQUEST })
    const { data } = await axios.get(`/prefectures/${prefecture}/cantons`)
    dispatch({
      type: CANTON_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CANTON_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// GET	/api/cantons/1/villages
export const getVillages = (canton) => async (dispatch) => {
  try {
    dispatch({ type: VILLAGE_LIST_REQUEST })
    const { data } = await axios.get(`/cantons/${canton}/villages`)
    dispatch({
      type: VILLAGE_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: VILLAGE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
