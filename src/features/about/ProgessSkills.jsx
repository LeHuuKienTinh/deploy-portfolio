import useSkill from '../Skills/useSkill'

import { Col, ConfigProvider, Progress, Row } from 'antd'
import styled from 'styled-components'

const StyleProgress = styled.div`
  padding: 0 2rem;
`
export default function ProgessSkills() {
  const skills = useSkill()
  return (
    <ConfigProvider
      theme={{
        components: {
          Progress: {
            defaultColor: 'var(--color-cyan-7)',
            lineBorderRadius: 0,
          },
        },
        token: {
          colorText: 'var(--color-grey-800)',
        },
      }}
    >
      <StyleProgress>
        <Row gutter={[32]}>
          {skills.map((skill) => (
            <Col key={skill.id} xs={24} lg={12}>
              <b>{skill.name}</b>
              <Progress percent={skill.level} />
            </Col>
          ))}
        </Row>
      </StyleProgress>
    </ConfigProvider>
  )
}
