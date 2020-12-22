import axios from "axios"
import {
  HOME_PAGE_STATS_FAIL,
  HOME_PAGE_STATS_REQUEST,
  HOME_PAGE_STATS_SUCCESS,
} from "../constants/homePageStats"

export const getHomePageStats = () => async (dispatch) => {
  try {
    dispatch({ type: HOME_PAGE_STATS_REQUEST })
    const { data } = await axios.get("/home-stats")
    dispatch({ type: HOME_PAGE_STATS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: HOME_PAGE_STATS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
