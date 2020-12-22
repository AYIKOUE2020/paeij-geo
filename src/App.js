import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Helmet, HelmetProvider } from "react-helmet-async"
import Home from "./pages/Home"
import Cluster from "./pages/Cluster"
import ChaineValeur from "./pages/ChaineValeur"
import Realisations from "./pages/Realisations"
import Recherche from "./pages/Recherche"
import Statistiques from "./pages/Statistiques"
import Liste from "./pages/Liste"
import Layout from "./components/Layout"

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Helmet
          titleTemplate='%s | PAEIJ-SP Géo-référencement'
          defaultTitle='PAEIJ-SP Géo-référencement'
        />
        <Layout>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/realisations'>
              <Realisations />
            </Route>
            <Route path='/chaine-valeur'>
              <ChaineValeur />
            </Route>
            <Route path='/clusters'>
              <Cluster />
            </Route>
            <Route path='/statistiques'>
              <Statistiques />
            </Route>
            <Route path='/liste-realisations'>
              <Liste />
            </Route>
            <Route path='/search'>
              <Recherche />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </HelmetProvider>
  )
}

export default App
