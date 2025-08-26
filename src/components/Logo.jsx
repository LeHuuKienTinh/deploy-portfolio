import React from 'react'
import LogoImg from '../assets/logo.png'
import styled from 'styled-components'

const StyleImgLogo = styled.img`
  width: 60px;
  height: auto;
`
export default function Logo() {
  return <StyleImgLogo src={LogoImg} alt='logo' />
}
