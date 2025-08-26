import React from 'react'
import Heading from './Heading'
import styled from 'styled-components'

const StyleHeadingPage  = styled.div`
  text-align: center;
  padding-bottom: 6rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
`

export default function HeadingPageComponent({title, content}) {
  return (
    <StyleHeadingPage>
       <Heading as='h2'>{title}</Heading>
       <p>{content}</p>
    </StyleHeadingPage>
  )
}
