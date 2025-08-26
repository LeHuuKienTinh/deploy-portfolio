import { Formik } from 'formik'
import { Form, Input } from 'formik-antd'
import styled from 'styled-components'
import StyleButton from '../../components/Button'
import Heading from '../../components/Heading'
import { ConfigProvider } from 'antd'
import { useLogin } from './useLogin'
import { NavLink } from 'react-router-dom'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Email is invalid!').required('Email is required!'),
  password: Yup.string().required('Password is required!'),
})

const StyleLoginForm = styled.div`
  width: 50%;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  height: 100vh;
`

const StyledHeading = styled.div`
  margin-bottom: 20px;
`

const StyleButtonWrap = styled.div`
  margin-top: 30px;
`

const P = styled.p`
  margin-top: 20px;
  font-weight: 400;
  color: var(--color-grey-500);
`

const StyleNavLink = styled(NavLink)`
  margin-left: 5px;
  color: var(--color-cyan-6);
  border-bottom: 1px solid var(--color-cyan-6);
  &:hover {
    color: var(--color-cyan-8);
    border-bottom: 0.2px solid var(--color-cyan-8);
  }
`

export default function LoginForm() {
  const { login } = useLogin()

  function handleSubmit(values) {
    const { email, password } = values

    if (!email || !password) return

    login({ email, password })
  }

  return (
    <StyleLoginForm>
      <StyledHeading>
        <Heading as='h2'>Welcome Back</Heading>
        <Heading as='h5'>Please enter to Access Edit Page</Heading>
      </StyledHeading>
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: 'var(--color-grey-0)',
            colorText: 'var(--color-grey-800)',
            colorTextPlaceholder: 'var(--color-grey-500)',
          },
          components: {
            Form: {
              labelColor: 'var(--color-grey-800)',
              labelFontSize: '2rem',
            },
            Input: {
              paddingBlock: '1.1rem',
            },
          },
        }}
      >
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form layout='vertical'>
            <Form.Item label='Email' name='email'>
              <Input
                name='email'
                placeholder='Enter your username'
                prefix={<span>@</span>}
              />
            </Form.Item>
            <Form.Item label='Password' name='password'>
              <Input.Password
                name='password'
                placeholder='Enter your password'
                prefix={<span>🔒</span>}
              />
            </Form.Item>
            <StyleButtonWrap>
              <StyleButton type='submit'>Login</StyleButton>
            </StyleButtonWrap>
          </Form>
        </Formik>
        <P>
          Don't have an account?{' '}
          <StyleNavLink to='/home'>Back to Homepage</StyleNavLink>
        </P>
      </ConfigProvider>
    </StyleLoginForm>
  )
}
