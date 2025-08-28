import { Card, Col, ConfigProvider, Flex, Row } from 'antd'
import styled from 'styled-components'
import Button from '../../components/Button'
import { Formik } from 'formik'
import { Form, Input } from 'formik-antd'

const StyleForm = styled.div`
  box-shadow: var(--shadow-md);
  background-color: var(--color-grey-50);
  width: 100%;
`
const StyleCard = styled(Card)`
  width: 100%;
  @media (max-width: 991px) {
    margin-top: 20px;
  }
`

export default function ContactForm() {
  return (
    <StyleForm>
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: 'var(--color-grey-0)',
            colorText: 'var(--color-grey-800)',
            colorTextPlaceholder: 'var(--color-grey-500)',
          },
          components: {
            Form: {
              labelFontSize: '1.8rem',
            },
            Input: {
              paddingBlock: '1.1rem',
            },
          },
        }}
      >
        <StyleCard>
          <Formik
            initialValues={{ name: '', email: '', subject: '', message: '' }}
            onSubmit={(values) => console.log(values)}
          >
            <Form layout='vertical'>
              <Row gutter={12}>
                <Col md={12} xs={24}>
                  <Form.Item
                    label='Your Name'
                    name='name'
                    rules={[{ required: true }]}
                  >
                    <Input name='name' placeholder='Enter your name' />
                  </Form.Item>
                </Col>
                <Col md={12} xs={24}>
                  <Form.Item
                    label='Your Email'
                    name='email'
                    rules={[{ required: true }]}
                  >
                    <Input name='email' placeholder='Enter your Email' />
                  </Form.Item>
                </Col>
                <Col md={24} xs={24}>
                  <Form.Item
                    label='Subject'
                    name='subject'
                    rules={[{ required: true }]}
                  >
                    <Input name='subject' placeholder='Enter subject' />
                  </Form.Item>
                </Col>
                <Col md={24} xs={24}>
                  <Form.Item
                    label='Message'
                    name='message'
                    rules={[{ required: true }]}
                  >
                    <Input.TextArea
                      name='message'
                      rows={10}
                      placeholder='Send your message'
                    />
                  </Form.Item>
                </Col>
                <Col md={24} xs={24}>
                  <Flex align='center' justify='center'>
                    <Button type='submit'>Send Message</Button>
                  </Flex>
                </Col>
              </Row>
            </Form>
          </Formik>
        </StyleCard>
      </ConfigProvider>
    </StyleForm>
  )
}
