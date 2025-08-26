import { Flex } from 'antd'
import React from 'react'
import SocialGroup from './SocialGroup'
import styled from 'styled-components'

const StyleFooter = styled.footer`
  padding: 3rem 0;
  background-color: var(--color-platinum-1);
  z-index: 10;
`

export default function Footer() {
  return (
    <StyleFooter>
      <Flex justify='center' align='center' vertical gap='middle'>
        <p>© Copyright Kelly All Rights Reserved</p>
        <SocialGroup />
        <p>
          Designed by
          <span style={{ color: 'var( --color-grey-6)' }}>BootstrapMade</span>
          Distributed by
          <span style={{ color: 'var( --color-grey-6)' }}>ThemeWagon</span>
        </p>
      </Flex>
    </StyleFooter>
  )
}
