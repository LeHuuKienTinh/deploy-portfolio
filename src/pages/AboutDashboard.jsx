import { useState } from 'react'
import { useUser } from '../features/authentication/useUser'

import { Button, Card, Col, ConfigProvider, Modal, Row } from 'antd'

import styled from 'styled-components'
import InfoContent from '../features/about/InfoContent'
import UpdateInfoModal from '../features/about/UpdateInfoModal'
import UpdateSkills from '../features/about/UpdateSkills'
import Heading from '../components/Heading'
import UpdateFacts from '../features/about/UpdateFacts'
import { useSelector } from 'react-redux'
import {
  selectAllDataUser,
  selectStatusDataUser,
} from '../features/userInfoSlice'

const StyleAboutDashboard = styled.div`
  & h2 {
    text-align: center;
  }
`
const StyleAvata = styled.img`
  width: 40rem;
`
const StyleButton = styled.div`
  margin: 2rem 0rem 4rem 0rem;
  display: flex;
  justify-content: flex-end;
`
export default function AboutDashboard() {
  const data = useSelector(selectAllDataUser)
  const status = useSelector(selectStatusDataUser)
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (status === 'pending') {
    return <div>Loading...</div>
  }

  const { avatar } = data[0]

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <StyleAboutDashboard>
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
            Modal: {
              contentBg: 'var(--color-grey-0)',
              headerBg: 'var(--color-grey-0)',
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
                <StyleAvata src={`${avatar}`} alt='avata' />
              </Row>
            </Col>
            <Col xs={24} sm={24} lg={16} span={16}>
              <InfoContent />
            </Col>
          </Row>
        </Card>
        <StyleButton>
          <Button size='large' onClick={showModal}>
            Update
          </Button>
        </StyleButton>
        <Modal
          title={<Heading as='h3'>Update Information </Heading>}
          closable={{ 'aria-label': 'Custom Close Button' }}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          zIndex={30000}
          width={900}
          footer={null}
        >
          <UpdateInfoModal handleCancel={handleCancel} data={data[0]} />
        </Modal>
        <UpdateSkills />
        <UpdateFacts />
      </ConfigProvider>
    </StyleAboutDashboard>
  )
}
