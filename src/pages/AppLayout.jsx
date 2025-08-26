import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import styled from 'styled-components'

const StyleMainWrapper = styled.main`
  background-color: var(--color-grey-0);
`
export default function AppLayout() {
  return (
    <>
      <Header />
      <StyleMainWrapper>
        <Outlet />
      </StyleMainWrapper>
      <Footer />
    </>
  )
}
