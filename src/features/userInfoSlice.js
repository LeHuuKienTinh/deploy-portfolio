import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getDataUser, updateInfoApi } from '../services/apiInfor'
import toast from 'react-hot-toast'

const initialState = {
  data: [],
  status: 'idle',
  error: null,
}

//ASYNC THUNK
export const fetchDataUser = createAsyncThunk(
  'user/fetchDataUser',
  async () => {
    try {
      const data = await getDataUser()
      return data
    } catch (error) {
      throw error
    }
  }
)

export const updateDataUser = createAsyncThunk(
  'user/updateDataUser',
  async ({ userID, dataUpdate }, { dispatch }) => {
    try {
      await updateInfoApi(userID, dataUpdate)
      dispatch(fetchDataUser())
    } catch (error) {
      throw error
    }
  }
)

const userInfoSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataUser.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(fetchDataUser.fulfilled, (state, action) => {
        state.status = 'success'
        state.data = action.payload
      })
      .addCase(fetchDataUser.rejected, (state, action) => {
        state.status = 'faild'
        state.error = action.error
      })

      .addCase(updateDataUser.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(updateDataUser.fulfilled, (state, action) => {
        state.status = 'success'
        toast.success('Update user information successfully')
      })
      .addCase(updateDataUser.rejected, (state, action) => {
        state.status = 'faild'
        state.error = action.error
        toast.error(error.message)
      })
  },
})
export const selectAllDataUser = (state) => state.user.data
export const selectStatusDataUser = (state) => state.user.status

export default userInfoSlice.reducer
