import { BsTwitterX } from 'react-icons/bs'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'
import styled from 'styled-components'

const StyleSocialGroup = styled.div`
  display: flex;
  gap: 1rem;
`
export default function SocialGroup() {
  return (
    <StyleSocialGroup>
      <BsTwitterX />
      <FaFacebook />
      <FaInstagram />
      <FaLinkedin />
    </StyleSocialGroup>
  )
}
