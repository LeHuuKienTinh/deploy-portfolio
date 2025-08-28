import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  fetchProjects,
  selectStatusProjects,
} from '../features/projects/ProjectsSlice'
import LoadingFullPage from '../components/LoadingFullPage'
import { fetchSkills } from '../features/Skills/skillSlice'
import { fetchFacts } from '../features/Facts/factSlice'
import { fetchDataUser } from '../features/userInfoSlice'

const StyleMainWrapper = styled.main`
  background-color: var(--color-grey-0);
`
export default function AppLayout() {
  const dispatch = useDispatch()
  const status = useSelector(selectStatusProjects)

  useEffect(() => {
    dispatch(fetchSkills())
    dispatch(fetchFacts())
    dispatch(fetchDataUser())
    dispatch(fetchProjects())
  }, [dispatch])  

  return (
    <LoadingFullPage isLoading={status === 'idle'}>
      <Header />
      <StyleMainWrapper>
        <Outlet />
      </StyleMainWrapper>
      <Footer />
    </LoadingFullPage>
  )
}
