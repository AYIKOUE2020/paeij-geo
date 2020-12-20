import React from "react"
import { Nav, Navbar, Container } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { BsSearch } from "react-icons/bs"

const Header = () => {
  const routes = [
    { link: "/", name: "Accueil", exact: true },
    { link: "/realisations", name: "Réalisations" },
    { link: "/chaine-valeur", name: "Chaine de Valeur" },
    { link: "/clusters", name: "Clusters" },
    { link: "/statistiques", name: "Statistiques" },
    { link: "/liste-realisations", name: "Liste" },
    { link: "/search", name: <BsSearch /> },
  ]

  return (
    <header>
      <Navbar
        bg='dark'
        variant='dark'
        expand='lg'
        collapseOnSelect
        sticky='top'
        className='header shadow'
      >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='d-flex align-items-center'>
              <img
                alt='Logo Paeijsp'
                src={`${process.env.PUBLIC_URL}/img/logo-geo.png`}
                width='250'
                height='100%'
                className='d-inline-block align-top'
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              {routes.map((route) => (
                <LinkContainer
                  to={route.link}
                  key={route.link}
                  exact={route.exact && route.exact}
                >
                  <Nav.Link className='mr-2 text-uppercase'>
                    {route.name}
                  </Nav.Link>
                </LinkContainer>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
