import styled from 'styled-components'
import Heading from '../../components/Heading'
import { IoIosArrowForward } from 'react-icons/io'
import { Col, Row } from 'antd'

const StyleInfoContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding-left: 2rem;
  @media (max-width: 1024px) {
    padding-top: 2rem;
  }
`
const StyleContent = styled.p`
  padding: 1.6rem 0;
  font-size: 1.6rem;
  text-align: justify;
  margin-bottom: 1.6rem;
  font-style: ${(props) => (props.type === 'italic' ? 'italic' : 'normal')};
`
const StyleMainInfo = styled.div`
  display: flex;
  gap: 20rem;
`
const StyleInfoCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
const StyleList = styled.li`
  margin-bottom: 1.8rem;
  display: flex;
  align-items: center;
`
export default function InfoContent() {
  return (
    <StyleInfoContent>
      <Heading as='h3'> UI/UX Designer & Web Developer.</Heading>
      <StyleContent type='italic'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </StyleContent>
      <Row justify='space-around'>
        <Col xs={24} sm={24} lg={12} span={8}>
          <ul>
            <StyleList>
              <IoIosArrowForward size='20' />
              <b>Birthday: </b> &nbsp; <span>1 May 1995</span>
            </StyleList>
            <StyleList>
              <IoIosArrowForward size='20' />
              <b>Website: </b> &nbsp; <span>www.example.com</span>
            </StyleList>
            <StyleList>
              <IoIosArrowForward size='20' />
              <b>Phone: </b> &nbsp; <span>+123 456 7890</span>
            </StyleList>
            <StyleList>
              <IoIosArrowForward size='20' />
              <b>City: </b> &nbsp; <span>New York, USA</span>
            </StyleList>
          </ul>
        </Col>
        <Col xs={24} sm={24} lg={12} span={8}>
          <ul>
            <StyleList>
              <IoIosArrowForward size='20' />
              <b>Age: </b> &nbsp; <span>30</span>
            </StyleList>
            <StyleList>
              <IoIosArrowForward size='20' />
              <b>Degree: </b> &nbsp; <span>Master</span>
            </StyleList>
            <StyleList>
              <IoIosArrowForward size='20' />
              <b>Email: </b> &nbsp; <span>admi@gmail.com</span>
            </StyleList>
            <StyleList>
              <IoIosArrowForward size='20' />
              <b>Freelance: </b> &nbsp; <span>Available</span>
            </StyleList>
          </ul>
        </Col>
      </Row>
      <StyleContent>
        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero.
        Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt
        officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis
        quidem quia. Sed et consectetur qui quia repellendus itaque neque.
      </StyleContent>
    </StyleInfoContent>
  )
}
