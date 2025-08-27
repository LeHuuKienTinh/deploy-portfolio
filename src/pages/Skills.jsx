import React from 'react'
import Container from '../components/Container'
import styled from 'styled-components'
import HeadingPageComponent from '../components/HeadingPageComponent'
import ProgessSkills from '../features/about/ProgessSkills'

const StyleSkills = styled.section`
  height: 85vh;
`

const StyleSection = styled.section`
  padding: 6rem 0;
`
export default function Skills() {
  return (
    <Container>
      <StyleSkills>
        <StyleSection>
          <HeadingPageComponent
            title='Skills'
            content='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'
          ></HeadingPageComponent>
          <ProgessSkills />
        </StyleSection>
      </StyleSkills>
    </Container>
  )
}
