import { ConfigProvider, Flex } from 'antd'
import styled from 'styled-components'
import { Formik } from 'formik'
import { DatePicker, Field, Form, Input } from 'formik-antd'

import { MdOutlineDateRange, MdOutlineSubtitles } from 'react-icons/md'
import { GiShieldOpposition } from 'react-icons/gi'
import { GrTechnology } from 'react-icons/gr'
import { FaGithub } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'

import Button from '../../../components/Button'
import Heading from '../../../components/Heading'

import useEditProject, { ProjectSchema } from './useEditProject'

const StyledRangePicker = styled(DatePicker.RangePicker)`
  width: 100%;
`

const StyledButtonWrap = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
`

const StyledButtonCancel = styled(Button)`
  background-color: var(--color-grey-500);
  &:hover {
    background-color: var(--color-grey-400);
  }
`

export default function ProjectItemEdit({ project = {}, onCancel }) {
  const { initialValues, handleSubmit } = useEditProject(project, onCancel)

  return (
    <Flex vertical>
      <Heading as='h2'>Edit Project</Heading>
      <ConfigProvider
        theme={{
          components: {
            DatePicker: {},
          },
          token: {
            colorBgContainer: 'var(--color-grey-50)',
            colorTextPlaceholder: 'var(--color-grey-700)',
            colorText: 'var(--color-grey-900)',
          },
        }}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={ProjectSchema}
        >
          {({ resetForm }) => (
            <Form layout='vertical'>
              <Form.Item label='Title' name='title'>
                <Input name='title' suffix={<MdOutlineSubtitles />} />
              </Form.Item>
              <Form.Item label='Position' name='position'>
                <Input name='position' suffix={<GiShieldOpposition />} />
              </Form.Item>
              <Form.Item label='Duration Date' name='dayGap'>
                <StyledRangePicker
                  name='dayGap'
                  prefix={<MdOutlineDateRange />}
                />
              </Form.Item>
              <Form.Item label='Description' name='description'>
                <Field name='description'>
                  {({ field }) => (
                    <Input.TextArea
                      {...field}
                      rows={4}
                      placeholder='Enter description...'
                    />
                  )}
                </Field>
              </Form.Item>
              <Form.Item label='techonologies' name='technologies'>
                <Input name='technologies' suffix={<GrTechnology />} />
              </Form.Item>
              <Form.Item label='Github URL' name='github_url'>
                <Input name='github_url' suffix={<FaGithub />} />
              </Form.Item>
              <Form.Item label='Demo URL' name='demo_url'>
                <Input name='demo_url' suffix={<CgWebsite />} />
              </Form.Item>
              <StyledButtonWrap>
                <Button type='submit'>Submit</Button>
                <StyledButtonCancel
                  onClick={() => resetForm({ values: initialValues })}
                  type='button'
                >
                  Cancel
                </StyledButtonCancel>
              </StyledButtonWrap>
            </Form>
          )}
        </Formik>
      </ConfigProvider>
    </Flex>
  )
}
