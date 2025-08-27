import { Col, Row } from 'antd'
import styled from 'styled-components'

import HeroImgLight from '../assets/hero-bg-light.jpg'
import HeroImgDark from '../assets/hero-bg-dark.png'
import LoginForm from '../features/authentication/LoginForm'
import { useUser } from '../features/authentication/useUser'
import LoadingComponent from '../components/LoadingComponent'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const StyleLoginPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-0);
`

const StyleLoginImage = styled.div`
  position: relative;
  background-image: url(${HeroImgLight});
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;

  .dark-mode & {
    background-image: url(${HeroImgDark});
  }
`

export default function Login() {
  const { user, isPending } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/dashboard', { replace: true })
    }
  }, [user])

  return (
    <LoadingComponent isLoading={isPending}>
      {!user && (
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
      )}
    </LoadingComponent>
  )
}
