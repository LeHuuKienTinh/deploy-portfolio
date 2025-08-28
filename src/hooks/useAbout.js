import { useSelector } from 'react-redux'
import { selectAllFacts } from '../slice/factSlice'
import { selectAllSkills } from '../slice/skillSlice'
import { selectAllDataUser } from '../slice/userInfoSlice'

export default function useAbout() {
  const skills = useSelector(selectAllSkills)
  const facts = useSelector(selectAllFacts)
  const user = useSelector(selectAllDataUser)

  return { skills, facts, user }
}
