import styled from 'styled-components'
import HeroImgLight from '../assets/hero-bg-light.jpg'
import HeroImgDark from '../assets/hero-bg-dark.png'
import Heading from '../components/Heading'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const StyleHome = styled.section`
  position: relative;
  background-image: url(${HeroImgLight});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .dark-mode & {
    background-image: url(${HeroImgDark});
  }
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
  const navigate = useNavigate()

  return (
    <StyleHome>
      <StyleCenterContent>
        <StyleHeadingHome>
          <Heading as='h1'>Kelly Adams</Heading>
          <Heading as='h3'>
            I'm a professional illustrator from San Francisco
          </Heading>
        </StyleHeadingHome>

        <Button onClick={() => navigate('/about')}>About me</Button>
      </StyleCenterContent>
    </StyleHome>
  )
}
