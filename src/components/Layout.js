import React from "react"
import { Container } from "react-bootstrap"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='main py-3'>
        <Container>{children}</Container>
      </main>
    </div>
  )
}

export default Layout
