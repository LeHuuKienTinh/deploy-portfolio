import { Col, Row } from 'antd'
import styled from 'styled-components'

import HeroImg from '../assets/hero-bg.jpg'
import LoginForm from '../features/authentication/LoginForm'

const StyleLoginPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-0);
`

const StyleLoginImage = styled.div`
  position: relative;
  background-image: url(${HeroImg});
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
`

export default function Login() {
  return (
    <StyleLoginPage>
      <Row>
        <Col md={12} xs={24}>
          <LoginForm />
        </Col>

        <Col md={12} xs={0}>
          <StyleLoginImage />
        </Col>
      </Row>
    </StyleLoginPage>
  )
}
