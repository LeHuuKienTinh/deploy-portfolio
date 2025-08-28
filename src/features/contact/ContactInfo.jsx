import styled from 'styled-components'
import { Card, ConfigProvider, Flex } from 'antd'
import { IoLocationOutline } from 'react-icons/io5'
import { HiOutlinePhone } from 'react-icons/hi2'
import { HiOutlineMail } from 'react-icons/hi'

import ContactInfoItem from './ContactInfoItem'
import MapEmbed from './MapEmbed'
import { selectAllDataUser } from '../../slice/userInfoSlice'
import { useSelector } from 'react-redux'

const StyleInfoWrap = styled.div`
  box-shadow: var(--shadow-md);
  background-color: var(--color-grey-50);
`

const StyleCard = styled(Card)`
  width: 100%;
`

export default function ContactInfo() {
  const userInfo = useSelector(selectAllDataUser)
  console.log(userInfo)
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
              content={userInfo.address}
              icon={<IoLocationOutline size={25} />}
            />
            <ContactInfoItem
              title='Call Us'
              content={userInfo.phone}
              icon={<HiOutlinePhone size={25} />}
            />
            <ContactInfoItem
              title='Email Us'
              content={userInfo.email}
              icon={<HiOutlineMail size={25} />}
            />
            <MapEmbed />
          </Flex>
        </StyleCard>
      </ConfigProvider>
    </StyleInfoWrap>
  )
}
