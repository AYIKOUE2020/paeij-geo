import React from "react"
import { Provider } from "react-redux"
import ReactDOM from "react-dom"
import "./styles/index.scss"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import axios from "axios"
import store from "./store"
import "leaflet/dist/leaflet.css"

axios.defaults.baseURL = "https://api-paeij.i2setg.com/api"
axios.defaults.headers.common["Accept"] = "application/json"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

reportWebVitals()
