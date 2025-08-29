import { Col, Row } from 'antd'

import HeadingPageComponent from '../../components/HeadingPageComponent'
import Container from '../../components/Container'
import ContactInfo from '../../features/contact/ContactInfo'
import ContactForm from '../../features/contact/ContactForm'
import LoadingComponent from '../../components/LoadingComponent'
import useStatus from '../../hooks/useStatus'

export default function Contact() {
  const { isLoadingUser } = useStatus()

  return (
    <LoadingComponent isLoading={isLoadingUser}>
      <Container>
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
      </Container>
    </LoadingComponent>
  )
}
