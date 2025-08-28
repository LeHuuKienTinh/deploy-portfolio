import { ConfigProvider, Flex } from 'antd'
import styled from 'styled-components'
import { Formik, useFormikContext } from 'formik'
import { DatePicker, Field, Form, Input } from 'formik-antd'
import * as Yup from 'yup'

import { MdOutlineDateRange, MdOutlineSubtitles } from 'react-icons/md'
import { GiShieldOpposition } from 'react-icons/gi'
import { GrTechnology } from 'react-icons/gr'
import { FaGithub } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'

import Button from '../../../components/Button'
import Heading from '../../../components/Heading'
import { convertArrayToRange, convertRangeToISO } from '../../../utils/helpers'
import { useDispatch } from 'react-redux'
import { createProject, updateProject } from '../../projects/ProjectsSlice'

const ProjectSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  position: Yup.string().required('Position is required'),
  // durationdate: Yup.string().required('Duration Date is required'),
  description: Yup.string().required('Description is required'),
  technologies: Yup.string(),
  github_url: Yup.string().url('Invalid URL'),
  demo_url: Yup.string().url('Invalid URL'),
  dayGap: Yup.array()
    .of(Yup.date().required('Please select a date'))
    .min(2, 'Please select both start and end dates')
    .required('Duration date is required')
    .test(
      'end-date-after-start',
      'End date must be after start date',
      (value) => {
        if (!value || value.length < 2) return true
        const [start, end] = value
        return new Date(end) > new Date(start)
      }
    ),
})

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

export default function ProjectItemEdit({ project = {}, onOpen }) {
  const dispatch = useDispatch()

  const initialValues = {
    title: project.title || '',
    position: project.position || '',
    description: project.description || '',
    technologies: project.technologies || '',
    github_url: project.github_url || '',
    demo_url: project.demo_url || '',
    dayGap: project?.durationdate
      ? convertRangeToISO(project.durationdate)
      : [],
  }

  const isEdit = project.id ? true : false

  function handleSubmit(values, { resetForm }) {
    const durationdate = convertArrayToRange(values.dayGap)
    const dataUpdate = {
      title: values.title,
      position: values.position,
      description: values.description,
      technologies: values.technologies,
      github_url: values.github_url,
      demo_url: values.demo_url,
      durationdate,
    }
    if (isEdit) {
      dispatch(updateProject({ projectId: project.id, dataUpdate }))
    } else {
      dispatch(createProject(dataUpdate))
    }
    resetForm({ values: initialValues })
    onOpen(false)
  }

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
