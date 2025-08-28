import { useSelector } from 'react-redux'
import Container from '../components/Container'
import HeadingPageComponent from '../components/HeadingPageComponent'
import ListProjects from '../features/projects/ListProjects'
import { selectAllProjects } from '../features/projects/ProjectsSlice'

export default function Project() {
  const projects = useSelector(selectAllProjects)

  return (
    <Container>
      <HeadingPageComponent
        title='Projects'
        content='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'
      />
      <ListProjects projects={projects} />
    </Container>
  )
}
