import { Col, Row } from 'antd'
import Heading from '../../components/Heading'
import useSkill from '../Skills/useSkill'
import useFacts from '../Facts/useFacts'
import useProjects from '../projects/useProjects'

export default function Facts() {
  const skills = useSkill()
  const facts = useFacts()
  const projects = useProjects()

  return (
    <Row justify='center' align='middle' gutter={[12, 42]}>
      <Col xs={24} sm={12} lg={6}>
        <Row justify='center' align='middle'>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Heading as='h2'>{projects.length}</Heading>
            <p>Projects</p>
          </Col>
        </Row>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Row justify='center' align='middle'>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Heading as='h2'>{skills.length}</Heading>
            <p>Skills</p>
          </Col>
        </Row>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Row justify='center' align='middle'>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Heading as='h2'>{facts.certificates}</Heading>
            <p>Certificate</p>
          </Col>
        </Row>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Row justify='center' align='middle'>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Heading as='h2'>{facts.experienceYears}</Heading>
            <p>Year Experience</p>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
