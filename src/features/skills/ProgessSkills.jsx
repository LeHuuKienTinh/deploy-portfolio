import { Col, ConfigProvider, Progress, Row } from 'antd'
import styled from 'styled-components'

const StyleProgress = styled.div`
  padding: 0 2rem;
`
export default function ProgessSkills() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Progress: {
            defaultColor: 'var(--color-cyan-7)',
            lineBorderRadius: 0,
          },
        },
      }}
    >
      <StyleProgress>
        <Row gutter={[32]}>
          <Col xs={24} lg={12}>
            <Row>
              <b>HTML</b>
              <Progress percent={50} />
            </Row>
            <Row>
              <b>CSS</b>
              <Progress percent={70} />
            </Row>
            <Row>
              <b>JAVASCRIPT</b>
              <Progress percent={65} />
            </Row>
          </Col>
          <Col xs={24} lg={12}>
            <Row>
              <b>REACT</b>
              <Progress percent={90} />
            </Row>
            <Row>
              <b>PHP</b>
              <Progress percent={82} />
            </Row>
            <Row>
              <b>VUE</b>
              <Progress percent={99} />
            </Row>
          </Col>
        </Row>
      </StyleProgress>
    </ConfigProvider>
  )
}
