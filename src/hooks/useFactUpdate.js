import { useState } from 'react'
import { updateFacts } from '../slice/factSlice'

const useFactUpdate = (
  initialCertificates,
  initialExperienceYears,
  userId,
  dispatch
) => {
  const [tempCertificates, setTempCertificates] = useState(initialCertificates)
  const [tempExperiencesYear, setTempExperiencesYear] = useState(
    initialExperienceYears
  )

  const confirm = (field, value) => {
    dispatch(updateFacts({ userID: userId, field, value }))
  }

  return {
    tempCertificates,
    setTempCertificates,
    tempExperiencesYear,
    setTempExperiencesYear,
    confirm,
  }
}

export default useFactUpdate
