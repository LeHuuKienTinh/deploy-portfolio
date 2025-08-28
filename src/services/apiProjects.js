import supabase from './supabase'

export const getProjects = async () => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('userID', import.meta.env.VITE_USER_ID)

    if (error) throw error

    return data
  } catch (error) {
    throw error
  }
}

export const createProject = async (newData) => {
  try {
    const { error } = await supabase
      .from('projects')
      .insert([{ ...newData, userID: import.meta.env.VITE_USER_ID }])

    if (error) throw error
  } catch (error) {
    throw error
  }
}

export const updateProject = async (projectId, dataUpdate) => {
  try {
    const { error } = await supabase
      .from('projects')
      .update(dataUpdate)
      .eq('id', projectId)

    if (error) throw error
  } catch (error) {
    throw error
  }
}

export const deleteProject = async (projectId) => {
  try {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', projectId)

    if (error) throw error
  } catch (error) {
    throw error
  }
}
