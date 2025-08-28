import { useDispatch, useSelector } from 'react-redux'
import { deleteProject, selectAllProjects } from './ProjectsSlice'
import { parse } from 'date-fns'
import { useState } from 'react'

export default function useProjects() {
  const dispatch = useDispatch()
  // Get Project
  const projects = useSelector(selectAllProjects)
  // SortProject by Duration Date
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
  // Active edit

  const [editId, setEditId] = useState(null)

  const [activeEdit, setActiveEdit] = useState(false)

  function HandleOnActiveEdit() {
    setActiveEdit((activeEdit) => !activeEdit)
    setEditId(null)
  }
  // SetModal
  const [isOpenModal, setIsOpenModal] = useState(false)

  //

  // Delete Project
  function handleDelete(projectId) {
    dispatch(deleteProject(projectId))
  }

  return {
    projects,
    sortedProjects,
    activeEdit,
    HandleOnActiveEdit,
    isOpenModal,
    setIsOpenModal,
    editId,
    setEditId,
    handleDelete,
  }
}
