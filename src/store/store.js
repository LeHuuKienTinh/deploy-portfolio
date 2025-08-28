import { configureStore } from '@reduxjs/toolkit'
import projectsReducer from '../slice/projectsSlice'
import skillsReducer from '../slice/skillSlice'
import factsReducer from '../slice/factSlice'
import contactsReducer from '../slice/contactsSlice'
import userReducer from '../slice/userInfoSlice'

export const store = configureStore({
  reducer: {
    projectsSlice: projectsReducer,
    contactsSlice: contactsReducer,
    skills: skillsReducer,
    facts: factsReducer,
    user: userReducer,
  },
})
