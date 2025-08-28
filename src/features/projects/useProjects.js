import { useDispatch, useSelector } from 'react-redux'
import { selectAllProjects } from './ProjectsSlice'

export default function useProjects() {
  const dispatch = useDispatch()
  const projects = useSelector(selectAllProjects)
  return projects
}

