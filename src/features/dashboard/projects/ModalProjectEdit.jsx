import { Modal } from 'antd'
import styled from 'styled-components'
import ProjectItemEdit from './ProjectItemEdit'

const StyledModal = styled(Modal)`
  top: 40px;
  left: 130px;
  @media (max-width: 992px) {
    left: 0;
  }
`

export default function ModalProjectEdit({ project, isOpenModal, onCancel }) {
  return (
    <StyledModal onCancel={onCancel} open={isOpenModal} footer={null}>
      <ProjectItemEdit onCancel={onCancel} project={project} />
    </StyledModal>
  )
}
