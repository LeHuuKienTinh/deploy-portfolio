  import { Col, ConfigProvider, Row, Upload } from 'antd'
  import ImgCrop from 'antd-img-crop'
  import { Formik } from 'formik'
  import { Form, Input, DatePicker } from 'formik-antd'
  import useInfo, { validationInfo } from '../../../hooks/useInfo'
  import { FaBirthdayCake, FaPhone, FaAddressCard } from 'react-icons/fa'
  import {
    MdOutlineDriveFileRenameOutline,
    MdAlternateEmail,
  } from 'react-icons/md'
  import styled from 'styled-components'

  import StyleButton from '../../../components/Button'

  const StyleFormUpdate = styled.div`
    color: var(--color-grey-800);
  `

  const StyleDatePicker = styled(DatePicker)`
    width: 100%;
  `
  export default function UpdateInfoModal({ handleCancel, data }) {
    const { fileList, onChange, handleSubmit } = useInfo(data)

    return (
      <StyleFormUpdate>
        <Formik
          validationSchema={validationInfo}
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
