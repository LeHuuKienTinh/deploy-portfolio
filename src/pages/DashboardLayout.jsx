import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import Footer from '../components/Footer'

import {
  fetchProjects,
  selectStatusProjects,
} from '../features/projects/ProjectsSlice'

import Sidebar from '../components/Sidebar'
import SocialGroup from '../components/SocialGroup'
import styled from 'styled-components'
import LoadingFullPage from '../components/LoadingFullPage'

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`
const Main = styled.main`
  min-height: 100vh;
  background-color: var(--color-grey-50);
  padding: 1rem 2rem 6.4rem;
  grid-column: 2/-1;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 2rem;
    padding-top: 3rem;
    grid-column: 1;
  }
  @media (max-width: 476px) {
    margin-top: 120px;
  }
`
const Container = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`
const SocialWrapper = styled.div`
  justify-self: end;
`
export default function DashboardLayout() {
  const dispatch = useDispatch()
  const status = useSelector(selectStatusProjects)

  useEffect(() => {
    dispatch(fetchProjects())
  }, [dispatch])

  return (
    <LoadingFullPage isLoading={status === 'idle'}>
      <StyledAppLayout>
        <Sidebar />
        <Main>
          <SocialWrapper>
            <SocialGroup />
          </SocialWrapper>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </StyledAppLayout>
      <Footer />
    </LoadingFullPage>
  )
}
