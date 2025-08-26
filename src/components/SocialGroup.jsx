import { BsTwitterX } from 'react-icons/bs'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'
import styled from 'styled-components'
import DarkModeToggle from './DarkModeToggle'

const StyleSocialGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export default function SocialGroup() {
  return (
    <StyleSocialGroup>
      <BsTwitterX />
      <FaFacebook />
      <FaInstagram />
      <FaLinkedin />
      <DarkModeToggle />
    </StyleSocialGroup>
  )
}
