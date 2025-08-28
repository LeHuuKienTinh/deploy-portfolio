import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  addSkillApi,
  deleteSkillApi,
  getSkillsApi,
  updateSkillApi,
} from '../services/apiSkills'

const initialState = {
  items: [],
  status: 'idle',
  error: null,
}

//ASYNC THUNK

export const fetchSkills = createAsyncThunk('skills/fetchSkills', async () => {
  try {
    const data = await getSkillsApi()
    return data
  } catch (error) {
    throw error
  }
})

export const addSkill = createAsyncThunk(
  'skills/addSkill',
  async ({ userID, name, level }, { dispatch }) => {
    try {
      await addSkillApi(userID, name, level)
      dispatch(fetchSkills(userID))
    } catch (error) {
      throw error
    }
  }
)

export const deleteSkill = createAsyncThunk(
  'skills/deleteSkill',
  async ({ userID, skillID }, { dispatch }) => {
    try {
      await deleteSkillApi(skillID)
      dispatch(fetchSkills(userID))
    } catch (error) {
      throw error
    }
  }
)

export const updateSkill = createAsyncThunk(
  'skills/updateSkill',
  async ({ userID, skillID, dataUpdate }, { dispatch }) => {
    try {
      await updateSkillApi(skillID, dataUpdate)
      dispatch(fetchSkills(userID))
    } catch (error) {
      throw error
    }
  }
)

//Slice
const skillSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //FETCH
      .addCase(fetchSkills.pending, (state) => {
        state.status = 'pending'
      })

      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.status = 'success'
        state.items = action.payload
      })

      .addCase(fetchSkills.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
      })

      //ADD
      .addCase(addSkill.pending, (state) => {
        state.status = 'pending'
      })

      .addCase(addSkill.fulfilled, (state) => {
        state.status = 'success'
      })

      .addCase(addSkill.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
      })

      //DELETE
      .addCase(deleteSkill.pending, (state) => {
        state.status = 'pending'
      })

      .addCase(deleteSkill.fulfilled, (state) => {
        state.status = 'success'
      })

      .addCase(deleteSkill.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
      })

      //UPDATE
      .addCase(updateSkill.pending, (state) => {
        state.status = 'pending'
      })

      .addCase(updateSkill.fulfilled, (state) => {
        state.status = 'success'
      })

      .addCase(updateSkill.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
      })
  },
})

export const selectSkillsStatus = (state) => state.skills.status
export const selectAllSkills = (state) => state.skills.items

export default skillSlice.reducer
