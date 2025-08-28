import ProjectItemView from './ProjectItemView'
import { ConfigProvider } from 'antd'
import ModalProjectEdit from '../dashboard/projects/ModalProjectEdit'
import useProjects from '../../hooks/useProjects'

export default function ProjectItem({ project = {}, activeEdit }) {
  const {
    isOpenModal: isOpenModalUpdate,
    setIsOpenModal: setIsOpenModalUpdate,
  } = useProjects()

  return (
    <>
      <div onClick={() => activeEdit && setIsOpenModalUpdate(true)}>
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
          project={project}
          isOpenModal={isOpenModalUpdate}
          onCancel={() => setIsOpenModalUpdate(false)}
        />
      </ConfigProvider>
    </>
  )
}
