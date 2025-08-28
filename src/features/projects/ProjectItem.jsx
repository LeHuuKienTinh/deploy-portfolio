import { useState } from 'react'
import ProjectItemView from './ProjectItemView'
import { ConfigProvider } from 'antd'
import ModalProjectEdit from '../dashboard/projects/ModalProjectEdit'

export default function ProjectItem({ project = {}, activeEdit = false }) {
  const [open, setOpen] = useState(false)

  const showModal = () => {
    if (activeEdit) setOpen(true)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <>
      <div onClick={showModal}>
        <ProjectItemView project={project} />
      </div>
      <ConfigProvider
        theme={{
          components: {
            Modal: { contentBg: 'var(--color-grey-50)' },
          },
          token: {
            colorText: 'var(--color-grey-800)',
          },
        }}
      >
        <ModalProjectEdit
          onOpen={setOpen}
          project={project}
          onCancel={handleCancel}
          open={open}
        />
      </ConfigProvider>
    </>
  )
}
