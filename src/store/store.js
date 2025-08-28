import { configureStore } from '@reduxjs/toolkit'
import projectsReducer from '../features/projects/ProjectsSlice'
import skillsReducer from '../features/Skills/skillSlice'
import factsReducer from '../features/Facts/factSlice'
import contactsReducer from '../features/contact/contactsSlice'

export const store = configureStore({
  reducer: {
    projectsSlice: projectsReducer,
    contactsSlice: contactsReducer,
    skills: skillsReducer,
    facts: factsReducer,
  },
})
