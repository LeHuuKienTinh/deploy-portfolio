import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import Heading from '../components/Heading'

const StyleAbout = styled.section``

export default function About() {
  return (
    <Container>
      <StyleAbout>
        <Heading as='h2'>About</Heading>
      </StyleAbout>
    </Container>
  )
}
