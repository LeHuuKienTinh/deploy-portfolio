import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import styled from 'styled-components'

import useStatus from '../../hooks/useStatus'
import { fetchFacts } from '../../slice/factSlice'
import { fetchSkills } from '../../slice/skillSlice'

import HeadingPageComponent from '../../components/HeadingPageComponent'
import LoadingFullPage from '../../components/LoadingFullPage'
import Container from '../../components/Container'
import CardInfo from '../../features/about/CardInfo'
import Facts from '../../features/about/Facts'
import ProgessSkills from '../../features/about/ProgessSkills'

const StyleAbout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyleSection = styled.section`
  width: 100%;
  padding: 6rem 0;
`
export default function About() {
  const dispatch = useDispatch()

  const { isLoadingSkills, isLoadingFacts } = useStatus()

  useEffect(() => {
    dispatch(fetchFacts())
    dispatch(fetchSkills())
  }, [dispatch])

  return (
    <LoadingFullPage isLoading={isLoadingSkills || isLoadingFacts}>
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
    </LoadingFullPage>
  )
}
