import supabase, { supabaseUrl } from './supabase'

export async function signup() {
  const { data, error } = await supabase.auth.signUp({
    email: 'huyltqse135@gmail.com',
    password: '---------',
    options: {
      data: {
        fullName: 'Kelly Adams',
        avatar:
          'https://bkvluluamjybttmxgmoz.supabase.co/storage/v1/object/public/Image/avt-2.jpg',
        birthdate: '1995-18-11',
        degree: '',
        phoneNumber: '0352607701',
        address: 'New York, USA',
      },
    },
  })

  if (error) throw new Error(error.message)
  return data
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export async function logout() {
  const { error } = await supabase.auth.signOut()
  if (error) throw new Error(error.message)
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  let updateData
  if (password) updateData = { password }
  if (fullName) updateData = { data: { fullName } }

  const { data, error } = await supabase.auth.updateUser(updateData)

  if (error) throw new Error(error.message)
  if (!avatar) return data

  const fileName = `avatar-${data.user.id}-${Math.random()}`
  const { error: storageError } = await supabase.storage
    .from('avatars')
    .upload(fileName, avatar)

  if (storageError) throw new Error(storageError.message)

  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  })

  if (error2) throw new Error(error2.message)

  return updatedUser
}
