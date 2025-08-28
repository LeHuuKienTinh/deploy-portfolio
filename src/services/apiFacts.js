import supabase from './supabase'

export const getAchiveApi = async (userID) => {
  try {
    const { data, error } = await supabase
      .from('achievements ')
      .select('*')
      .eq('userID', userID)
      .order('createdAt', { ascending: true })

    if (error) throw error

    return data
  } catch (error) {
    throw error
  }
}

export const updateAchievement = async (userID, field, value) => {
  try {
    const { data, error } = await supabase
      .from('achievements')
      .update({ [field]: value })
      .eq('userID', userID)
      .select()
      .single()

    if (error) throw error
    return data
  } catch (err) {
    throw err
  }
}

