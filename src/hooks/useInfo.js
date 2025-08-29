import { useDispatch } from 'react-redux'
import { useUser } from '../features/authentication/useUser'
import { useState } from 'react'
import { updateDataUser } from '../slice/userInfoSlice'
import { updateAvatar } from '../services/apiInfor'
import * as Yup from 'yup'


//VALIDATIE
export const validationInfo = Yup.object().shape({
  email: Yup.string().email('Email is invalid!').required('Email is required!'),
  fullName: Yup.string().required('Name is required!'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .length(10)
    .required('A phone number is required'),
  degree: Yup.string().required('Degree is required'),
  address: Yup.string().required('Address is required'),
  birthdate: Yup.date()
    .required('Birthday is required')
    .nullable()
    .max(new Date(), 'Birthday cannot be in the future')
    .test('age-check', 'You must be at least 18 years old', function (value) {
      if (!value) return true
      const today = new Date()
      const eighteenYearsAgo = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate()
      )
      return value <= eighteenYearsAgo
    }),
})

export default function useInfo(data) {
  const dispatch = useDispatch()
  const { user } = useUser()
  const [fileList, setFileList] = useState([])

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
  }

  async function handleSubmit(values) {
    let avatarUrl = data.avatar
    const newAvatarUrl = await updateAvatar(fileList)
    dispatch(
      updateDataUser({
        userID: user.id,
        dataUpdate: {
          ...values,
          avatar: newAvatarUrl ? newAvatarUrl : avatarUrl,
        },
      })
    )
  }

  return { fileList, onChange, handleSubmit }
}
