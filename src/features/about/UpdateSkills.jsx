import { useState } from 'react'

import { Button, Modal } from 'antd'
import styled from 'styled-components'

import ProgessSkills from './ProgessSkills'
import UpdateSkillsModal from './UpdateSkillsModal'
import Heading from '../../components/Heading'
import HeadingPageComponent from '../../components/HeadingPageComponent'

const StyleButton = styled.div`
  margin: 2rem 0rem 4rem 0rem;
  display: flex;
  justify-content: flex-end;
`
export default function UpdateSkills() {
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
        title='Skills'
        content='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'
      />
      <ProgessSkills />
      <StyleButton>
        <Button size='large' onClick={showModal}>
          Update
        </Button>
      </StyleButton>
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
        <UpdateSkillsModal
          handleCancel={handleCancel}
        />
      </Modal>
    </>
  )
}
