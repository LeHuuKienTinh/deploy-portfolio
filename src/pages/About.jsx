import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import Heading from '../components/Heading'
import HeadingPageComponent from '../components/HeadingPageComponent'

const StyleAbout = styled.section``

export default function About() {
  return (
    <Container>
      <StyleAbout>
        <HeadingPageComponent
          title='About'
          content='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'
        />
      </StyleAbout>
    </Container>
  )
}
