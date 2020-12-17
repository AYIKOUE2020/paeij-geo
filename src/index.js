import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { ChakraProvider } from "@chakra-ui/react"
import axios from "axios"

axios.defaults.baseURL = "http://paeijsp.test/api"
axios.defaults.headers.common["Accept"] = "application/json"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

reportWebVitals()
