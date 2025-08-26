import styled from 'styled-components'
import { Card, ConfigProvider, Flex } from 'antd'
import { IoLocationOutline } from 'react-icons/io5'
import { HiOutlinePhone } from 'react-icons/hi2'
import { HiOutlineMail } from 'react-icons/hi'

import ContactInfoItem from './ContactInfoItem'
import MapEmbed from './MapEmbed'

const StyleInfoWrap = styled.div`
  box-shadow: var(--shadow-md);
  background-color: var(--color-grey-50);
`

const StyleCard = styled(Card)`
  width: 100%;
`

export default function ContactInfo() {
  return (
    <StyleInfoWrap>
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: 'var(--color-grey-0)',
          },
        }}
      >
        <StyleCard>
          <Flex gap='40px' vertical>
            <ContactInfoItem
              title='Address'
              content='A108 Adam Street, New York, NY 535022'
              icon={<IoLocationOutline size={25} />}
            />
            <ContactInfoItem
              title='Call Us'
              content='+1 5589 55488 55'
              icon={<HiOutlinePhone size={25} />}
            />
            <ContactInfoItem
              title='Email Us'
              content='info@example.com'
              icon={<HiOutlineMail size={25} />}
            />
            <MapEmbed />
          </Flex>
        </StyleCard>
      </ConfigProvider>
    </StyleInfoWrap>
  )
}
