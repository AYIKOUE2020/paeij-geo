import React from "react"
import { Container } from "react-bootstrap"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='main py-3'>
        <Container fluid className='px-5'>
          {children}
        </Container>
      </main>
    </div>
  )
}

export default Layout
