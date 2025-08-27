import React from 'react'
import Heading from '../components/Heading'
import { Button, Card, Col, ConfigProvider, Row } from 'antd'
import InfoContent from '../features/about/InfoContent'
import styled from 'styled-components'
import Avata2 from '../assets/avt-2.jpg'

const StyleAvata = styled.img`
  width: 40rem;
`

export default function AboutDashboard() {
  return (
    <>
      <Heading as='h2'>About Dashboard</Heading>
      <ConfigProvider
        theme={{
          components: {
            Card: {
              bodyPadding: 12,
            },
            Button: {
              defaultBg: 'var(--color-cyan-4)',
              fontWeight: 500,
            },
          },
          token: {
            colorBgContainer: 'var(--color-grey-0)',
            colorText: 'var(--color-grey-800)',
          },
        }}
      >
        <Card>
          <Row>
            <Col xs={24} sm={24} lg={8} span={2}>
              <Row justify='center'>
                <StyleAvata src={Avata2} alt='avata' />
              </Row>
            </Col>
            <Col xs={24} sm={24} lg={16} span={16}>
              <InfoContent />
            </Col>
          </Row>
        </Card>
        <Button>Update</Button>
      </ConfigProvider>
    </>
  )
}
