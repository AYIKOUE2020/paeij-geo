import axios from "axios"
import {
  CLUSTER_LIST_FAIL,
  CLUSTER_LIST_REQUEST,
  CLUSTER_LIST_SUCCESS,
} from "../constants/clusterConstant"

export const getCluster = (cluster) => async (dispatch) => {
  try {
    dispatch({ type: CLUSTER_LIST_REQUEST })
    const { data } = await axios.get(`/clusters/${cluster}`)
    dispatch({ type: CLUSTER_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: CLUSTER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
