import supabase from './supabase'

export async function getDataUser() {
  const { data, error } = await supabase
    .from('information')
    .select('*')
    .eq('userID', import.meta.env.VITE_USER_ID)
    .single()
  if (error) throw error
  return data
}

export const updateInfoApi = async (userID, dataUpdate) => {
  try {
    const { error } = await supabase
      .from('information')
      .update(dataUpdate)
      .eq('userID', userID)
    if (error) throw error
    return 0
  } catch (error) {
    throw error
  }
}
