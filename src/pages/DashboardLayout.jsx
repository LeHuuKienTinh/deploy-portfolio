import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'
import SocialGroup from '../components/SocialGroup'

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;

  @media (max-width: 768px) {
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
export default function AppLayout() {
  return (
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
  )
}
