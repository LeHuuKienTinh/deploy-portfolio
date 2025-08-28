import { Modal } from 'antd'
import styled from 'styled-components'
import ProjectItemEdit from './ProjectItemEdit'

const StyledModal = styled(Modal)`
  top: 40px;
`

export default function ModalProjectEdit({ onCancel, open, onOpen, project }) {
  return (
    <StyledModal onCancel={onCancel} open={open} footer={null}>
      <ProjectItemEdit onOpen={onOpen} project={project} />
    </StyledModal>
  )
}
