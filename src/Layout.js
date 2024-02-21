import React from 'react'
import Navbar from './components/Header/Navbar'
import Container from './components/Container'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  )
}

export default Layout
