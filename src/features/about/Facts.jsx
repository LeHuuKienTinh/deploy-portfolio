import { Col, Row } from 'antd'
import Heading from '../../components/Heading'

export default function Facts() {
  return (
    <Row  justify='center' align='middle' gutter={[12, 42]}>
      <Col xs={24} sm={12} lg={6}>
        <Row justify='center' align='middle'>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Heading as='h2'>232</Heading>
            <p>Clients</p>
          </Col>
        </Row>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Row justify='center' align='middle'>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Heading as='h2'>232</Heading>
            <p>Clients</p>
          </Col>
        </Row>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Row justify='center' align='middle'>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Heading as='h2'>232</Heading>
            <p>Clients</p>
          </Col>
        </Row>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Row justify='center' align='middle'>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Heading as='h2'>232</Heading>
            <p>Clients</p>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
