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
import ClusterMapContainer from "../components/ClusterMapContainer"
import { clusterSidebarMenu } from "../utils/arrayUtils"

const Cluster = () => {
  let { path, url } = useRouteMatch()

  return (
    <div>
      <Helmet>
        <title>Cartographie des réalisations par cluster</title>
      </Helmet>
      <Row>
        <Col sm={12} md={3} lg={3}>
          <Card body className='border-0 shadow p-0 sidebar-card'>
            <ul className='sidebar'>
              {clusterSidebarMenu.map(({ name, link }) => (
                <li key={link}>
                  <NavLink activeClassName='active' to={`${url}/${link}`}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </Card>
        </Col>
        <Col sm={12} md={9} lg={9}>
          <Card body className='border-0 shadow p-0'>
            <Switch>
              <Route exact path={`${path}`}>
                <Redirect to={`${path}/agrokom`} />
              </Route>
              <Route exact path={`${path}/:cluster`}>
                <ClusterMapContainer />
              </Route>
            </Switch>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Cluster
