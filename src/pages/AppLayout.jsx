import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
