import supabase from './supabase'

export const getFactsApi = async () => {
  try {
    const { data, error } = await supabase
      .from('achievements ')
      .select('*')
      .eq('userid ', import.meta.env.VITE_USER_ID)
      .order('created_at', { ascending: true })

    if (error) throw error
    return data
  } catch (error) {
    throw error
  }
}

export const updateFactsApi = async (userID, field, value) => {
  try {
    const { data, error } = await supabase
      .from('achievements')
      .update({ [field]: value })
      .eq('userid', userID)
      .select()
      .single()

    if (error) throw error
    return data
  } catch (err) {
    throw err
  }
}
