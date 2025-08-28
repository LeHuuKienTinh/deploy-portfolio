import { useSelector } from 'react-redux'
import { selectAllFacts } from '../slice/factSlice'
import { selectAllSkills } from '../slice/skillSlice'
import { selectAllDataUser } from '../slice/userInfoSlice'
import { selectAllProjects } from '../slice/projectSlice'

export default function useAbout() {
  const skills = useSelector(selectAllSkills)
  const facts = useSelector(selectAllFacts)
  const user = useSelector(selectAllDataUser)
  const projects = useSelector(selectAllProjects)

  return { skills, facts, user, projects }
}
