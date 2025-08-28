import { useState } from 'react'
import HeadingPageComponent from '../../components/HeadingPageComponent'
import { Button, Col, Modal, Row } from 'antd'
import Heading from '../../components/Heading'
import UpdateSkillsModal from './UpdateSkillsModal'
import styled from 'styled-components'
import useSkill from '../Skills/useSkill'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCertificates } from '../Facts/factSlice'

const StyleButton = styled.div`
  margin: 2rem 0rem 4rem 0rem;
  display: flex;
  justify-content: flex-end;
`

const StyleColCenter = styled(Col)`
  text-align: center;
`

export default function UpdateFacts() {
  const skills = useSkill()
  const dispatch = useDispatch()
  const { certificates, experienceYears } = useSelector((state) => state.facts)
  console.log(certificates, experienceYears)
  const [isModalOpen, setIsModalOpen] = useState(false)

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
    <>
      <HeadingPageComponent
        title='Facts'
        content='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'
      />
      <Row justify='center' align='middle' gutter={[12, 42]}>
        <Col xs={24} sm={12} lg={6}>
          <Row justify='center' align='middle'>
            <StyleColCenter>
              <Col span={24}>
                <Heading as='h2'>232+ </Heading>
                <p>Projects</p>
              </Col>
            </StyleColCenter>
          </Row>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Row justify='center' align='middle'>
            <StyleColCenter>
              <Col span={24}>
                <Heading as='h2'>{skills.length}+</Heading>
                <p>Skills</p>
              </Col>
            </StyleColCenter>
          </Row>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Row justify='center' align='middle'>
            <StyleColCenter>
              <Col span={24}>
                <Heading as='h2'>{certificates}</Heading>
                <p>Certificate</p>
                <Button onClick={() => dispatch(incrementCertificates())}>
                  +1 Certificate
                </Button>
              </Col>
            </StyleColCenter>
          </Row>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Row justify='center' align='middle'>
            <StyleColCenter>
              <Col span={24}>
                <Heading as='h2'>{experienceYears}</Heading>
                <p>Year Experience</p>
              </Col>
            </StyleColCenter>
          </Row>
        </Col>
      </Row>
      <Modal
        title={<Heading as='h3'>Update Skills </Heading>}
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        zIndex={30000}
        width={900}
        footer={null}
      >
        <UpdateSkillsModal handleCancel={handleCancel} />
      </Modal>
    </>
  )
}
