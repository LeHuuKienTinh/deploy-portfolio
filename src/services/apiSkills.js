import supabase from './supabase'

export const getSkillsApi = async (userID) => {
  try {
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .eq('userID', userID)
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
