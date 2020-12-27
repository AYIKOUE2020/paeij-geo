import {
  HOME_PAGE_STATS_FAIL,
  HOME_PAGE_STATS_REQUEST,
  HOME_PAGE_STATS_SUCCESS,
} from "../constants/homePageStats"

export const homePageStatsReducer = (
  state = { stats: {} },
  { type, payload }
) => {
  switch (type) {
    case HOME_PAGE_STATS_REQUEST:
      return {
        loading: true,
      }
    case HOME_PAGE_STATS_SUCCESS:
      return {
        loading: false,
        stats: payload,
      }
    case HOME_PAGE_STATS_FAIL:
      return {
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}
