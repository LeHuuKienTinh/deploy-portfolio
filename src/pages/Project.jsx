import React from 'react'
import Container from '../components/Container'
import HeadingPageComponent from '../components/HeadingPageComponent'
import styled from 'styled-components'
import ListProjects from '../features/projects/ListProjects'

const StyleProject = styled.section`
  height: 85vh;
`

const StyleSection = styled.section`
  padding: 6rem 0;
`

export default function Project() {
  return (
    <Container>
      <StyleProject>
        <StyleSection>
          <HeadingPageComponent
            title='Projects'
            content='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'
          />
          <ListProjects />
        </StyleSection>
      </StyleProject>
    </Container>
  )
}
