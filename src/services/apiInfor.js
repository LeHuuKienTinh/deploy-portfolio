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

export const updateAvatar = async (fileList) => {
  let avatarUrl = null
  try {
    if (fileList.length > 0 && fileList[0].originFileObj) {
      const file = fileList[0].originFileObj
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}.${fileExt}`
      const filePath = `avatars/${fileName}`

      const { error } = await supabase.storage
        .from('Image')
        .upload(filePath, file)

      if (error) {
        return
      }
      const { data } = supabase.storage.from('Image').getPublicUrl(filePath)
      avatarUrl = data.publicUrl
    }
    return avatarUrl
  } catch (error) {
    throw error
  }
}
