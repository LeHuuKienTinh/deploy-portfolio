import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getFactsApi, updateFactsApi } from '../services/apiFacts'

const initialState = {
  factsData: {
    certificates: null,
    experienceYears: null,
  },
  status: 'idle',
  error: null,
}

//ASYNC THUNK
export const fetchFacts = createAsyncThunk('facts/fetchFacts', async () => {
  try {
    const data = await getFactsApi()
    return data
  } catch (error) {
    throw error
  }
})

export const updateFacts = createAsyncThunk(
  'facts/updateFacts',
  async ({ userID, field, value }, { dispatch }) => {
    try {
      await updateFactsApi(userID, field, value)
      dispatch(fetchFacts())
    } catch (error) {
      throw error
    }
  }
)

const factsSlice = createSlice({
  name: 'facts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFacts.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(fetchFacts.fulfilled, (state, action) => {
        state.status = 'success'
        state.factsData = {
          certificates: action.payload[0].certificates,
          experienceYears: action.payload[0].experienceyears,
        }
      })
      .addCase(fetchFacts.rejected, (state, action) => {
        state.status = 'faild'
        state.error = action.error.message
      })
  },
})

export const selectFactsStatus = (state) => state.facts.status
export const selectAllFacts = (state) => state.facts.factsData

export default factsSlice.reducer
