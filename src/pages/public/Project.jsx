import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import useStatus from '../../hooks/useStatus'

import { fetchProjects } from '../../slice/projectsSlice'

import ListProjects from '../../features/projects/ListProjects'
import HeadingPageComponent from '../../components/HeadingPageComponent'
import Container from '../../components/Container'
import LoadingComponent from '../../components/LoadingComponent'

export default function Project() {
  const dispatch = useDispatch()

  const { isLoadingProjects } = useStatus()

  useEffect(() => {
    dispatch(fetchProjects())
  }, [dispatch])
  return (
    <LoadingComponent isLoading={isLoadingProjects}>
      <Container>
        <HeadingPageComponent
          title='Projects'
          content='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'
        />
        <ListProjects />
      </Container>
    </LoadingComponent>
  )
}
