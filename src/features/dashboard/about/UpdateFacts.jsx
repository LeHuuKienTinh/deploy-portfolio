import { useUser } from '../../authentication/useUser'
import useAbout from '../../../hooks/useAbout'
import { Row } from 'antd'
import { useDispatch } from 'react-redux'

import HeadingPageComponent from '../../../components/HeadingPageComponent'
import useFactUpdate from '../../../hooks/useFactUpdate'
import FactItem from './FactItem'

export default function UpdateFacts() {
  const { user } = useUser()
  const { skills, facts, projects } = useAbout()
  const dispatch = useDispatch()
  const {
    tempCertificates,
    setTempCertificates,
    tempExperiencesYear,
    setTempExperiencesYear,
    confirm,
  } = useFactUpdate(
    facts.certificates,
    facts.experienceYears,
    user.id,
    dispatch
  )

  return (
    <>
      <HeadingPageComponent
        title='Facts'
        content='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'
      />
      <Row justify='center' align='middle' gutter={[12, 42]}>
        <FactItem title='Projects' value={projects.length} />
        <FactItem title='Skills' value={skills.length} />
        <FactItem
          title='Certificate'
          value={tempCertificates}
          field='certificates'
          updateHandler={(field, value) => {
            setTempCertificates(value)
            confirm(field, value)
          }}
        />
        <FactItem
          title='Year Experience'
          value={tempExperiencesYear}
          field='experienceyears'
          updateHandler={(field, value) => {
            setTempExperiencesYear(value)
            confirm(field, value)
          }}
        />
      </Row>
    </>
  )
}
