import styled from 'styled-components'
import HeadingPageComponent from '../components/HeadingPageComponent'
import Container from '../components/Container'
import ContactInfo from '../features/contact/ContactInfo'
import ContactForm from '../features/contact/ContactForm'
import { Col, Row } from 'antd'

const StyleContact = styled.section``

export default function Contact() {
  return (
    <Container>
      <StyleContact>
        <HeadingPageComponent
          title='Contact'
          content='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'
        />
        <Row gutter={16}>
          <Col lg={10} md={24} xs={24}>
            <ContactInfo />
          </Col>
          <Col lg={14} md={24} xs={24}>
            <ContactForm />
          </Col>
        </Row>
      </StyleContact>
    </Container>
  )
}
