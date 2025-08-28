import { useSelector } from 'react-redux'
import { selectAllDataUser, selectStatusDataUser } from '../slice/userInfoSlice'
import { selectAllSkills, selectSkillsStatus } from '../slice/skillSlice'
import { selectAllFacts, selectFactsStatus } from '../slice/factSlice'
import { selectAllProjects, selectStatusProjects } from '../slice/ProjectsSlice'
import { selectAllContacts, selectStatusContacts } from '../slice/contactsSlice'

function useStatus() {
  const statusUser = useSelector(selectStatusDataUser)
  const statusSkills = useSelector(selectSkillsStatus)
  const statusFacts = useSelector(selectFactsStatus)
  const statusProjects = useSelector(selectStatusProjects)
  const statusContacts = useSelector(selectStatusContacts)

  const isLoadingUser = statusUser === 'pending'
  const isLoadingSkills = statusSkills === 'pending'
  const isLoadingFacts = statusFacts === 'pending'
  const isLoadingProjects = statusProjects === 'pending'
  const isLoadingContacts = statusContacts === 'pending'

  return {
    isLoadingUser,
    isLoadingSkills,
    isLoadingFacts,
    isLoadingProjects,
    isLoadingContacts,
  }
}
export default useStatus
