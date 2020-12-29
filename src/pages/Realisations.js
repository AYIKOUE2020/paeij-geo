import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import { Helmet } from "react-helmet-async"
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom"
import MapComponent from "../components/MapComponent"

const Realisations = () => {
  let { path, url } = useRouteMatch()
  return (
    <div>
      <Helmet>
        <title>Cartographie des réalisations</title>
      </Helmet>
      <h1>Cartographie des réalisations</h1>
      <Row>
        <Col sm={12} md={3} lg={3}>
          <ul className='sidebar'>
            <li>
              <NavLink exact activeClassName='active' to={`${url}`}>
                Ensemble
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to={`${url}/groupement`}>
                Groupement
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to={`${url}/primo`}>
                Primo
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to={`${url}/structurante`}>
                Structurante
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to={`${url}/agregatrice`}>
                Agregatrice
              </NavLink>
            </li>
          </ul>
        </Col>
        <Col sm={12} md={9} lg={9}>
          <Card body className='border-0 shadow p-0'>
            <Switch>
              <Route exact path={`${path}`}>
                <MapComponent />
              </Route>
              <Route path={`${path}/:composante`}>
                <MapComponent />
              </Route>
            </Switch>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Realisations
