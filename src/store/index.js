import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { homePageStatsReducer } from "./reducers/homePageReducer"

const reducers = combineReducers({
  homePageStats: homePageStatsReducer,
})

const middleware = [thunk]

const initialState = {}

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store