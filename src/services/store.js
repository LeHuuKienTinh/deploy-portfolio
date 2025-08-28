import { configureStore } from '@reduxjs/toolkit'
import skillsReducer from '../features/Skills/skillSlice'
import factsReducer from '../features/Facts/factSlice'
export const store = configureStore({
  reducer: {
    skills: skillsReducer,
    facts: factsReducer,
  },
})
