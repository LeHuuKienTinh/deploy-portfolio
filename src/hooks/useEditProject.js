import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { convertArrayToRange, convertRangeToISO } from '../utils/helpers'
import { createProject, updateProject } from '../slice/projectsSlice'

export const ProjectSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  position: Yup.string().required('Position is required'),
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

export default function useEditProject(project, handler) {
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
    handler()
  }
  return { initialValues, isEdit, handleSubmit }
}
