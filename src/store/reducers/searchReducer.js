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

export const prefectureReducer = (
  state = { prefectures: [] },
  { type, payload }
) => {
  switch (type) {
    case PREFECTURE_LIST_REQUEST:
      return { loading: true }
    case PREFECTURE_LIST_SUCCESS:
      return { loading: false, prefectures: payload }
    case PREFECTURE_LIST_FAIL:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}
export const cantonReducer = (state = { cantons: [] }, { type, payload }) => {
  switch (type) {
    case CANTON_LIST_REQUEST:
      return { loading: true }
    case CANTON_LIST_SUCCESS:
      return { loading: false, cantons: payload }
    case CANTON_LIST_FAIL:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}
export const villageReducer = (state = { villages: [] }, { type, payload }) => {
  switch (type) {
    case VILLAGE_LIST_REQUEST:
      return { loading: true }
    case VILLAGE_LIST_SUCCESS:
      return { loading: false, villages: payload }
    case VILLAGE_LIST_FAIL:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}
