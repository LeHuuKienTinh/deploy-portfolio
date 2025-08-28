import { useUser } from '../authentication/useUser'
import styled from 'styled-components'
import { IoIosArrowForward } from 'react-icons/io'
import { Col, Row } from 'antd'
import Heading from '../../components/Heading'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllDataUser, selectStatusDataUser } from '../userInfoSlice'
import { format } from 'date-fns'

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
const StyleList = styled.li`
  margin-bottom: 1.8rem;
  display: flex;
  align-items: center;
`
export default function InfoContent() {
  const data = useSelector(selectAllDataUser)
  const status = useSelector(selectStatusDataUser)

  if (status === 'pending') {
    return <div>Loading...</div>
  }

  const { fullName, email, birthdate, phone, degree, address } = data[0]

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
              <b>Name: </b> &nbsp; <span>{fullName}</span>
            </StyleList>
            <StyleList>
              <IoIosArrowForward size='20' />
              <b>Email: </b> &nbsp; <span>{email}</span>
            </StyleList>
            <StyleList>
              <IoIosArrowForward size='20' />
              <b>Birthdate: </b> &nbsp;{' '}
              <span>
                {<span>{format(new Date(birthdate), 'dd/MM/yyyy')}</span>}
              </span>
            </StyleList>
          </ul>
        </Col>
        <Col xs={24} sm={24} lg={12} span={8}>
          <ul>
            <StyleList>
              <IoIosArrowForward size='20' />
              <b>Phone: </b> &nbsp; <span>{phone}</span>
            </StyleList>
            <StyleList>
              <IoIosArrowForward size='20' />
              <b>Degree: </b> &nbsp; <span>{degree}</span>
            </StyleList>
            <StyleList>
              <IoIosArrowForward size='20' />
              <b>Address: </b> &nbsp; <span>{address}</span>
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
