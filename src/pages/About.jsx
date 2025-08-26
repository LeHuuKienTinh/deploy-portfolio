import styled from 'styled-components'
import Container from '../components/Container'
import HeadingPageComponent from '../components/HeadingPageComponent'
import CardInfo from '../features/about/CardInfo'
import Facts from '../features/about/Facts'
import ProgessSkills from '../features/about/ProgessSkills'

const StyleAbout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyleSection = styled.section`
  padding: 6rem 0;
`
export default function About() {
  return (
    <Container>
      <StyleAbout>
        <HeadingPageComponent
          title='About'
          content='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'
        />
        <CardInfo />
        <StyleSection>
          <HeadingPageComponent
            title='Skills'
            content='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'
          />
          <ProgessSkills />
        </StyleSection>
        <StyleSection>
          <HeadingPageComponent
            title='Facts'
            content='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'
          />
          <Facts />
        </StyleSection>
      </StyleAbout>
    </Container>
  )
}
