import { useDispatch, useSelector } from 'react-redux'
import { selectAllSkills } from './skillSlice'
import { useUser } from '../../features/authentication/useUser'

const useSkill = () => {
  const { user } = useUser()
  const dispatch = useDispatch()
  const skills = useSelector(selectAllSkills)

  return skills
}

export default useSkill
