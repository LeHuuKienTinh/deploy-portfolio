import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getProjects,
  createProject as createProjectApi,
  updateProject as updateProjectApi,
  deleteProject as deleteProjectApi,
} from '../../services/apiProjects'
import toast from 'react-hot-toast'

const initialState = {
  projects: [],
  status: 'idle',
  error: null,
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.projects = action.payload
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
        toast.error(action.error.message)
      })
      // Create
      .addCase(createProject.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.status = 'succeeded'
        toast.success('Succeeded to create Project')
      })
      .addCase(createProject.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
        toast.error(action.error.message)
      })
      // Update
      .addCase(updateProject.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(updateProject.fulfilled, (state, action) => {
        state.status = 'succeeded'
        toast.success('Succeeded to update Project')
      })
      .addCase(updateProject.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
        toast.error(action.error.message)
      })
      // Delete
      .addCase(deleteProject.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.status = 'succeeded'
        toast.success('Succeeded to delete Project')
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
        toast.error(action.error.message)
      })
  },
})

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async () => {
    try {
      const data = await getProjects()
      return data
    } catch (error) {
      throw error
    }
  }
)

export const createProject = createAsyncThunk(
  'projects/createProject',
  async (newData, { dispatch }) => {
    try {
      await createProjectApi(newData)
      dispatch(fetchProjects())
    } catch (error) {
      throw error
    }
  }
)

export const updateProject = createAsyncThunk(
  'projects/updateProject',
  async ({ projectId, dataUpdate }, { dispatch }) => {
    try {
      await updateProjectApi(projectId, dataUpdate)
      dispatch(fetchProjects())
    } catch (error) {
      throw error
    }
  }
)

export const deleteProject = createAsyncThunk(
  'projects/deleteProject',
  async (projectId, { dispatch }) => {
    try {
      await deleteProjectApi(projectId)
      dispatch(fetchProjects())
    } catch (error) {
      throw error
    }
  }
)
export const selectAllProjects = (state) => state.projectsSlice.projects
export const selectStatusProjects = (state) => state.projectsSlice.status

export default projectsSlice.reducer
