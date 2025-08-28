import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import { getContacts } from '../../services/apiContact'

const initialState = {
  contacts: [],
  status: 'idle',
  error: null,
  searchText: '',
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.status = 'idle'
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.contacts = action.payload
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
        toast.error(action.error.message)
      })
  },
})

export const fetchContacts = createAsyncThunk(
  'projects/fetchContacts',
  async () => {
    try {
      const data = await getContacts()
      return data
    } catch (error) {
      throw error
    }
  }
)

export const selectAllContacts = (state) => state.contactsSlice.contacts
export const selectStatusContacts = (state) => state.contactsSlice.status

export default contactsSlice.reducer
