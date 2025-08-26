import styled from 'styled-components'
import { Flex } from 'antd'

const IconWrap = styled.div`
  width: 50px;
  height: 50px;
  background: var(--color-cyan-1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-cyan-8);
`

const H5 = styled.h5`
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-grey-800);
`

const P = styled.p`
  font-weight: 400;
  color: var(--color-grey-800);
`

export default function ContactInfoItem({ title, content, icon }) {
  return (
    <Flex gap='middle' align='center'>
      <IconWrap>{icon}</IconWrap>
      <Flex vertical>
        <H5 as='h5'>{title}</H5>
        <P>{content}</P>
      </Flex>
    </Flex>
  )
}
