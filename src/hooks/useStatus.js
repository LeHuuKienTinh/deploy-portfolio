import { useSelector } from 'react-redux'
import { selectStatusDataUser } from '../slice/userInfoSlice'
import { selectSkillsStatus } from '../slice/skillSlice'
import { selectFactsStatus } from '../slice/factSlice'
import { selectStatusProjects } from '../slice/projectsSlice'
import { selectStatusContacts } from '../slice/contactsSlice'

function useStatus() {
  const statusUser = useSelector(selectStatusDataUser)
  const statusSkills = useSelector(selectSkillsStatus)
  const statusFacts = useSelector(selectFactsStatus)
  const statusProjects = useSelector(selectStatusProjects)
  const statusContacts = useSelector(selectStatusContacts)

  const isLoadingUser = statusUser === 'pending' || statusUser === 'idle'
  const isLoadingSkills = statusSkills === 'pending' || statusSkills === 'idle'
  const isLoadingFacts = statusFacts === 'pending' || statusFacts === 'idle'
  const isLoadingProjects =
    statusProjects === 'pending' || statusProjects === 'idle'
  const isLoadingContacts =
    statusContacts === 'pending' || statusContacts === 'idle'

  return {
    isLoadingUser,
    isLoadingSkills,
    isLoadingFacts,
    isLoadingProjects,
    isLoadingContacts,
  }
}
export default useStatus
