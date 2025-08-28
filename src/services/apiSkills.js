import supabase from './supabase'

export const getSkillsApi = async () => {
  try {
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .eq('userID', import.meta.env.VITE_USER_ID)
      .order('createdAt', { ascending: true })

    if (error) throw error

    return data
  } catch (error) {
    throw error
  }
}

export const addSkillApi = async (userID, name, level) => {
  try {
    const { error } = await supabase
      .from('skills')
      .insert([{ name, level, userID }])

    if (error) throw error
    return 0
  } catch (error) {
    throw error
  }
}

export const deleteSkillApi = async (skillID) => {
  try {
    const { error } = await supabase.from('skills').delete().eq('id', skillID)

    if (error) throw error
    return 0
  } catch (error) {
    throw error
  }
}

export const updateSkillApi = async (skillID, dataUpdate) => {
  try {
    const { error } = await supabase
      .from('skills')
      .update(dataUpdate)
      .eq('id', skillID)
    if (error) throw error

    return 0
  } catch (error) {
    throw error
  }
}
