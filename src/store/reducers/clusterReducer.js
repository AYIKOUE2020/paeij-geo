import {
  CLUSTER_LIST_FAIL,
  CLUSTER_LIST_REQUEST,
  CLUSTER_LIST_SUCCESS,
} from "../constants/clusterConstant"

export const clusterReducer = (state = { clusters: [] }, { type, payload }) => {
  switch (type) {
    case CLUSTER_LIST_REQUEST:
      return { ...state, loading: true }
    case CLUSTER_LIST_SUCCESS:
      return { ...state, loading: false, clusters: payload }
    case CLUSTER_LIST_FAIL:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}
