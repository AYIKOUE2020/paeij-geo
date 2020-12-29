import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import { Helmet } from "react-helmet-async"
import {
  NavLink,
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom"
import ChaineValeurMapContainer from "../components/ChaineValeurMapContainer"

const ChaineValeur = () => {
  const sidebarMenu = [
    { name: "Mais", link: "mais" },
    { name: "Manioc", link: "manioc" },
    { name: "Gari", link: "gari" },
    { name: "Soja", link: "soja" },
    { name: "Huile palmiste", link: "huile-palmiste" },
    { name: "Distribution", link: "distribution" },
    { name: "Caprins", link: "caprins" },
    { name: "Ovins", link: "ovins" },
    { name: "Pintade", link: "pintade" },
    { name: "Poulet", link: "poulet" },
    { name: "Champignon", link: "champignon" },
    { name: "Mecanisation", link: "mecanisation" },
  ]
  let { path, url } = useRouteMatch()
  return (
    <div>
      <Helmet>
        <title>Cartographie des réalisations par chaine de valeur</title>
      </Helmet>
      <Row>
        <Col sm={12} md={3} lg={3}>
          <ul className='sidebar'>
            {sidebarMenu.map(({ name, link }) => (
              <li key={link}>
                <NavLink activeClassName='active' to={`${url}/${link}`}>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </Col>
        <Col sm={12} md={9} lg={9}>
          <Card body className='border-0 shadow p-0'>
            <Switch>
              <Route exact path={`${path}`}>
                <Redirect to={`${path}/mais`} />
              </Route>
              <Route exact path={`${path}/:filiere`}>
                <ChaineValeurMapContainer />
              </Route>
            </Switch>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ChaineValeur
