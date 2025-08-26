import { Col, Row } from 'antd'
import React from 'react'
import ProjectItem from './ProjectItem'

export default function ListProjects() {
  return (
    <Row gutter={[48]}>
      <Col xs={24} lg={12}>
        <Row style={{ width: '100%' }}>
          <ProjectItem />
        </Row>
        <Row>
          <ProjectItem />
        </Row>
      </Col>
      <Col xs={24} lg={12}>
        <ProjectItem />
        <ProjectItem />
      </Col>
    </Row>
  )
}
