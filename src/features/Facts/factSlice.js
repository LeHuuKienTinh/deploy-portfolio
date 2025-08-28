import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  certificates: 0,
  experienceYears: 0,
}

const factsSlice = createSlice({
  name: 'facts',
  initialState,
  reducers: {
    setCertificates: (state, action) => {
      state.certificates = action.payload
    },
    setExperienceYears: (state, action) => {
      state.experienceYears = action.payload
    },
    incrementCertificates: (state) => {
      state.certificates += 1
    },
    incrementExperience: (state) => {
      state.experienceYears += 1
    },
  },
})

export const {
  setCertificates,
  setExperienceYears,
  incrementCertificates,
  incrementExperience,
} = factsSlice.actions

export default factsSlice.reducer
