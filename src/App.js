import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
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
      <BrowserRouter>
        <Helmet
          titleTemplate='%s | PAEIJ-SP Géo-référencement'
          defaultTitle='PAEIJ-SP Géo-référencement'
        />
        <Layout>
          <Route exact path='/' component={Home} />
          <Route path='/realisations' component={Realisations} />
          <Route path='/chaine-valeur' component={ChaineValeur} />
          <Route path='/clusters' component={Cluster} />
          <Route path='/statistiques' component={Statistiques} />
          <Route path='/liste-realisations' component={Liste} />
          <Route path='/search' component={Recherche} />
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
