import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { fetchProjects } from '../../slice/projectsSlice'

import Heading from '../../components/Heading'
import ListProjects from '../../features/projects/ListProjects'
import ModalProjectEdit from '../../features/dashboard/projects/ModalProjectEdit'
import useProjects from '../../hooks/useProjects'
import LoadingComponent from '../../components/LoadingComponent'
import useStatus from '../../hooks/useStatus'

const StyledButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: ${(props) => props.$right};
  background-color: ${(props) =>
    !props.$activeEdit ? 'var(--color-cyan-6)' : 'var(--color-brand-900)'};
  border: none;
  border-radius: 2rem;
  padding: 1rem 4rem;
  color: var(--color-grey-0);
  font-weight: 700;
  font-size: 1.2rem;
  z-index: 100;
  cursor: pointer;
  animation: blink 1.5s infinite;

  &:hover {
  }
  &:focus {
    outline: none;
  }

  @keyframes blink {
    0%,
    100% {
      box-shadow: 0 0 15px var(--color-cyan-4);
      transform: scale(1);
    }
    50% {
      box-shadow: 0 0 30px var(--color-cyan-6);
      transform: scale(1.05);
    }
  }
`
const StyedProjectsDashboard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`

export default function ProjectsDashboard() {
  const {
    activeEdit,
    HandleOnActiveEdit,
    isOpenModal: isOpenModalCreate,
    setIsOpenModal: setIsOpenModalCreate,
  } = useProjects()

  const dispatch = useDispatch()

  const { isLoadingProjects } = useStatus()

  useEffect(() => {
    dispatch(fetchProjects())
  }, [dispatch])

  return (
    <LoadingComponent isLoading={isLoadingProjects}>
      <StyedProjectsDashboard>
        <Heading as='h2'>
          Projects {!activeEdit ? 'Preview' : 'Editting'}
        </Heading>
        <StyledButton
          $right={'10px'}
          onClick={() => setIsOpenModalCreate(true)}
        >
          Create Project
        </StyledButton>
        <StyledButton
          $right={'200px'}
          $activeEdit={activeEdit}
          onClick={HandleOnActiveEdit}
        >
          {!activeEdit ? 'Edit Project' : 'Save'}
        </StyledButton>
        <ListProjects activeEdit={activeEdit} />
        <ModalProjectEdit
          isOpenModal={isOpenModalCreate}
          onCancel={() => setIsOpenModalCreate(false)}
        />
      </StyedProjectsDashboard>
    </LoadingComponent>
  )
}
