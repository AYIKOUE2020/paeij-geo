import {
  DASHBOARD_DETAILS_FAIL,
  DASHBOARD_DETAILS_REQUEST,
  DASHBOARD_DETAILS_SUCCESS,
  DASHBOARD_LIST_FAIL,
  DASHBOARD_LIST_REQUEST,
  DASHBOARD_LIST_SUCCESS,
} from "../constants/dashboardConstant"

export const dashboardList = (
  state = { realisations: [] },
  { type, payload }
) => {
  switch (type) {
    case DASHBOARD_LIST_REQUEST:
      return { loading: true }
    case DASHBOARD_LIST_SUCCESS:
      return { loading: false, realisations: payload }
    case DASHBOARD_LIST_FAIL:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}
export const dashboardDetails = (
  state = { realisation: {} },
  { type, payload }
) => {
  switch (type) {
    case DASHBOARD_DETAILS_REQUEST:
      return { loading: true }
    case DASHBOARD_DETAILS_SUCCESS:
      return { loading: false, realisation: payload }
    case DASHBOARD_DETAILS_FAIL:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}
