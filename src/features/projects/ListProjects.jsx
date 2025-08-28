import { Button, Card, Col, ConfigProvider, Popconfirm, Row } from 'antd'
import { parse } from 'date-fns'
import styled from 'styled-components'

import ProjectItem from './ProjectItem'
import { useDispatch } from 'react-redux'
import { deleteProject } from './ProjectsSlice'

const StyleCardProjectItem = styled(Card)`
  position: relative;
  margin-bottom: 30px;
  border: ${(props) =>
    props.$isEdit
      ? '2px solid var(--color-cyan-6)'
      : '1px solid var(--color-grey-200)'};
  box-shadow: ${(props) => (props.$isEdit ? 'var(--shadow-md)' : 'none')};

  &:hover {
    border: 2px solid var(--color-cyan-6);
  }

  & a {
    pointer-events: none;
  }
`

const StyledPopConfirm = styled(Popconfirm)`
  background-color: var(--color-grey-100);
  position: absolute;
  right: 10px;
  top: 10px;
  &:focus {
    outline: none;
  }
`

export default function ListProjects({
  projects,
  onEditId,
  editId,
  activeEdit = false,
}) {
  const dispatch = useDispatch()

  const sortedProjects = [...projects].sort((a, b) => {
    const endDateA = parse(
      a.durationdate.split(' - ')[1],
      'MMM yyyy',
      new Date()
    )
    const endDateB = parse(
      b.durationdate.split(' - ')[1],
      'MMM yyyy',
      new Date()
    )
    return endDateB - endDateA
  })

  function handleOk(projectId) {
    dispatch(deleteProject(projectId))
  }

  return (
    <Row gutter={[48]}>
      {sortedProjects.map((project, index) => (
        <Col xs={24} lg={12} key={index}>
          {activeEdit ? (
            <div onClick={() => onEditId(project.id)}>
              <ConfigProvider
                theme={{
                  token: {
                    colorBgContainer: 'var(--color-grey-100)',
                    headerBg: 'var(--color-grey-50)',
                    colorText: 'var(--color-grey-800)',
                  },
                }}
              >
                <StyleCardProjectItem $isEdit={editId === project.id} hoverable>
                  <StyledPopConfirm
                    title='Delete the Project'
                    description='Are you sure to delete this Project?'
                    onConfirm={() => {
                      handleOk(project.id)
                    }}
                    onCancel={() => {}}
                    okText='Yes'
                    cancelText='No'
                  >
                    <Button danger>Delete</Button>
                  </StyledPopConfirm>
                  <ProjectItem project={project} activeEdit={activeEdit} />
                </StyleCardProjectItem>
              </ConfigProvider>
            </div>
          ) : (
            <ProjectItem key={index} project={project} />
          )}
        </Col>
      ))}
    </Row>
  )
}
