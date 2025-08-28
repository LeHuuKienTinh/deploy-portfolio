import { Outlet, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import useStatus from '../../hooks/useStatus'

import styled from 'styled-components'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import LoadingFullPage from '../../components/LoadingFullPage'
import { fetchDataUser } from '../../slice/userInfoSlice'

const StyleMainWrapper = styled.main`
  background-color: var(--color-grey-0);
`
export default function AppLayout() {
  const dispatch = useDispatch()
  const location = useLocation()

  const { isLoadingUser } = useStatus()

  useEffect(() => {
    dispatch(fetchDataUser())
  }, [dispatch, location.pathname])

  return (
    <LoadingFullPage isLoading={isLoadingUser}>
      <Header />
      <StyleMainWrapper>
        <Outlet />
      </StyleMainWrapper>
      <Footer />
    </LoadingFullPage>
  )
}
