import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import useStatus from '../../hooks/useStatus'
import styled from 'styled-components'

import LoadingFullPage from '../../components/LoadingFullPage'
import { fetchDataUser } from '../../slice/userInfoSlice'
import { fetchSkills } from '../../slice/skillSlice'
import { fetchFacts } from '../../slice/factSlice'

import SocialGroup from '../../components/SocialGroup'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'

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

  @media (max-width: 992px) {
    padding: 2rem;
    padding-top: 3rem;
    grid-column: 1;
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

  const { isLoadingUser, isLoadingFacts, isLoadingSkills } = useStatus()

  useEffect(() => {
    dispatch(fetchDataUser())
    dispatch(fetchSkills())
    dispatch(fetchFacts())
  }, [dispatch])

  return (
    <LoadingFullPage
      isLoading={isLoadingUser || isLoadingFacts || isLoadingSkills}
    >
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
