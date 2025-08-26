import styled from 'styled-components'
import HeroImg from '../assets/hero-bg.jpg'
import Heading from '../components/Heading'
import StyleButton from '../components/Button'

const StyleHome = styled.section`
  position: relative;
  background-image: url(${HeroImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  @media (max-width: 768px) {
    height: 85vh;
  }
`

const StyleCenterContent = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`

const StyleHeadingHome = styled.div`
  text-align: center;
`

export default function Home() {
  return (
    <StyleHome>
      <StyleCenterContent>
        <StyleHeadingHome>
          <Heading as='h1'>Kelly Adams</Heading>
          <Heading as='h3'>
            I'm a professional illustrator from San Francisco
          </Heading>
        </StyleHeadingHome>

        <StyleButton>About me</StyleButton>
      </StyleCenterContent>
    </StyleHome>
  )
}
