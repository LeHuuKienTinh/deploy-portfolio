import Container from '../components/Container'
import HeadingPageComponent from '../components/HeadingPageComponent'
import ListProjects from '../features/projects/ListProjects'

export default function Project() {
  return (
    <Container>
      <HeadingPageComponent
        title='Projects'
        content='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'
      />
      <ListProjects />
    </Container>
  )
}
