import { Modal } from 'antd'
import { Form, Input } from 'formik-antd'
import { Formik } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import StyleButton from '../../../components/Button'

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name skill is required!'),
  level: Yup.number()
    .typeError('Level must be a number')
    .required('Level skill is required!')
    .min(1, 'Level must be at least 1')
    .max(100, 'Level cannot be more than 100'),
})

const StyleFlexButton = styled.div`
  display: flex;
  justify-content: flex-end;
`

export default function SkillForm({
  initValues,
  handleSubmit,
  setIsModalOpen,
}) {
  return (
    <Modal
      title='Add Skill'
      open={true}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
    >
      <Formik
        initialValues={initValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form layout='vertical'>
          <Form.Item label='Skill Name' name='name'>
            <Input name='name' />
          </Form.Item>
          <Form.Item label='Level (0-100)' name='level'>
            <Input name='level' min={0} max={100} />
          </Form.Item>
          <StyleFlexButton>
            <StyleButton type='submit'>Create</StyleButton>
          </StyleFlexButton>
        </Form>
      </Formik>
    </Modal>
  )
}
