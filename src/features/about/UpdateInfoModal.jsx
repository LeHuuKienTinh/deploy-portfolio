import { useUpdateUser } from '../authentication/useUpdateUser'
import { useState } from 'react'
import supabase from '../../services/supabase'

import { Col, ConfigProvider, Row, Upload } from 'antd'
import ImgCrop from 'antd-img-crop'
import { Formik } from 'formik'
import { Form, Input, DatePicker } from 'formik-antd'
import * as Yup from 'yup'

import {
  MdOutlineDriveFileRenameOutline,
  MdAlternateEmail,
} from 'react-icons/md'
import { FaBirthdayCake, FaPhone, FaAddressCard } from 'react-icons/fa'
import styled from 'styled-components'
import StyleButton from '../../components/Button'
import { updateDataUser } from '../userInfoSlice'
import { useDispatch } from 'react-redux'
import { useUser } from '../authentication/useUser'

//VALIDATIE
const validationSchema = Yup.object().shape({
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

const StyleFormUpdate = styled.div`
  color: var(--color-grey-800);
`

const StyleDatePicker = styled(DatePicker)`
  width: 100%;
`
export default function UpdateInfoModal({ handleCancel, data }) {
  const dispatch = useDispatch()
  const { user } = useUser()
  const [fileList, setFileList] = useState([])

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
  }

  async function handleSubmit(values) {
    let avatarUrl = data.avatar
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
    dispatch(
      updateDataUser({
        userID: user.id,
        dataUpdate: { ...values, avatar: avatarUrl },
      })
    )
  }

  return (
    <StyleFormUpdate>
      <Formik
        validationSchema={validationSchema}
        initialValues={data}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions)
          handleCancel()
        }}
      >
        <ConfigProvider
          theme={{
            token: {
              colorTextDisabled: 'var(--color-grey-600)',
              colorBgContainerDisabled: 'var(--color-grey-300)',
              colorBgContainer: 'var(--color-grey-100)',
              colorText: 'var(--color-grey-900)',
              colorTextPlaceholder: 'var(--color-grey-500)',
            },
            components: {
              DatePicker: {
                colorBgElevated: 'var(--color-grey-50)',
              },
            },
          }}
        >
          <Form layout='vertical' autoComplete='off'>
            <Row gutter={24}>
              <Col xs={24} sm={24} lg={12}>
                <Form.Item name='fullName' label='Your Name'>
                  <Input
                    name='fullName'
                    type='text'
                    suffix={<MdOutlineDriveFileRenameOutline />}
                  />
                </Form.Item>

                <Form.Item name='email' label='Email'>
                  <Input name='email' suffix={<MdAlternateEmail />} />
                </Form.Item>

                <Form.Item name='birthdate' label='Birthdate'>
                  <StyleDatePicker
                    name='birthdate'
                    type='date'
                    suffix={<FaBirthdayCake />}
                  />
                </Form.Item>

                <Form.Item name='avatar' label='Avatar'>
                  <ImgCrop rotationSlider>
                    <Upload
                      action='https://bkvluluamjybttmxgmoz.storage.supabase.co/storage/v1/s3'
                      listType='picture-card'
                      fileList={fileList}
                      onChange={onChange}
                      beforeUpload={() => false}
                    >
                      {fileList.length < 1 && '+ Upload'}
                    </Upload>
                  </ImgCrop>
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} lg={12}>
                <Form.Item name='phone' label='Phone'>
                  <Input name='phone' suffix={<FaPhone />} />
                </Form.Item>

                <Form.Item name='degree' label='Degree'>
                  <Input
                    name='degree'
                    suffix={<MdOutlineDriveFileRenameOutline />}
                  />
                </Form.Item>

                <Form.Item name='address' label='Address'>
                  <Input name='address' suffix={<FaAddressCard />} />
                </Form.Item>
              </Col>
            </Row>
            <StyleButton type='submit'>Update</StyleButton>
          </Form>
        </ConfigProvider>
      </Formik>
    </StyleFormUpdate>
  )
}
