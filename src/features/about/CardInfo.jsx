import { Card, ConfigProvider } from 'antd'
import InfoContent from './InfoContent'
import { Row, Col } from 'antd'
import Avata2 from '../../assets/avt-2.jpg'
import styled from 'styled-components'

const StyleAvata = styled.img`
  width: 40rem;
`
export default function CardInfo() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {
            bodyPadding: 12,
          },
        },
        token: {
          colorBgContainer: 'var(--color-grey-0)',
          colorText: 'var(--color-grey-800)',
        },
      }}
    >
      <Card variant='borderless'>
        <Row>
          <Col xs={24} sm={24} lg={8} span={2}>
            <Row justify='center'>
              <StyleAvata src={Avata2} alt='avata' />
            </Row>
          </Col>
          <Col xs={24} sm={24} lg={16} span={16}>
            <InfoContent />
          </Col>
        </Row>
      </Card>
    </ConfigProvider>
  )
}
