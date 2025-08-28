import supabase from './supabase'

export const getContacts = async () => {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .eq('userID', import.meta.env.VITE_USER_ID)

    if (error) throw error

    return data
  } catch (error) {
    throw error
  }
}
