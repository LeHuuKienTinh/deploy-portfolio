import { Flex } from 'antd'
import styled from 'styled-components'

const StyleFooter = styled.footer`
  padding: 3rem 0;
  background-color: var(--color-platinum-1);
  z-index: 10;
  & span {
    color: var(--color-grey-6);
  }
`
export default function Footer() {
  return (
    <StyleFooter>
      <Flex justify='center' align='center' vertical gap='middle'>
        <p>© Copyright Kelly All Rights Reserved</p>
        <p>
          Designed by
          <span> BootstrapMade </span>
          Distributed by
          <span> ThemeWagon</span>
        </p>
      </Flex>
    </StyleFooter>
  )
}
