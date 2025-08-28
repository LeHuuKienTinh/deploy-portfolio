import { configureStore } from '@reduxjs/toolkit'
import projectsReducer from '../features/projects/ProjectsSlice'
export const store = configureStore({
  reducer: {
    projectsSlice: projectsReducer,
  },
})
