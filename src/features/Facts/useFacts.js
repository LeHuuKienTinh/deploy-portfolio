import { useDispatch, useSelector } from 'react-redux'
import { selectAllFacts } from './factSlice'

const useFacts = () => {
  const facts = useSelector(selectAllFacts)
  return facts
}

export default useFacts
