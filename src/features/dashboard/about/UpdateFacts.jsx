import { useState } from 'react'
import { useUser } from '../../authentication/useUser'
import useAbout from '../../../hooks/useAbout'
import { Button, Col, Popconfirm, Row } from 'antd'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { updateFacts } from '../../../slice/factSlice'

import Heading from '../../../components/Heading'
import HeadingPageComponent from '../../../components/HeadingPageComponent'

const StyleColCenter = styled(Col)`
  text-align: center;
`
const StyleButtonPlusMinus = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`
export default function UpdateFacts() {
  const { user } = useUser()
  const { skills, facts } = useAbout()
  const dispatch = useDispatch()

  const [tempCertificates, setTempCertificates] = useState(facts.certificates)
  const [tempExperiencesYear, setTempExperiencesYear] = useState(
    facts.experienceYears
  )

  const confirm = (field, value) => {
    dispatch(
      updateFacts({
        userID: user.id,
        field: field,
        value: value,
      })
    )
  }

  return (
    <>
      <HeadingPageComponent
        title='Facts'
        content='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'
      />
      <Row justify='center' align='middle' gutter={[12, 42]}>
        <Col xs={24} sm={12} lg={6}>
          <Row justify='center' align='middle'>
            <StyleColCenter>
              <Col span={24}>
                <Heading as='h2'>232+ </Heading>
                <p>Projects</p>
              </Col>
            </StyleColCenter>
          </Row>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Row justify='center' align='middle'>
            <StyleColCenter>
              <Col span={24}>
                <Heading as='h2'>{skills.length}+</Heading>
                <p>Skills</p>
              </Col>
            </StyleColCenter>
          </Row>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Row justify='center' align='middle'>
            <StyleColCenter>
              <Col span={24}>
                <Heading as='h2'>{facts.certificates}</Heading>
                <p>Certificate</p>
                <Popconfirm
                  color='var(--color-grey-100)'
                  showCancel={false}
                  description={
                    <StyleButtonPlusMinus>
                      <Button
                        onClick={() =>
                          setTempCertificates(tempCertificates - 1)
                        }
                      >
                        -
                      </Button>
                      <span>{tempCertificates}</span>
                      <Button
                        onClick={() =>
                          setTempCertificates(tempCertificates + 1)
                        }
                      >
                        +
                      </Button>
                    </StyleButtonPlusMinus>
                  }
                  onConfirm={() => confirm('certificates', tempCertificates)}
                  placement='bottom'
                >
                  <Button>Update</Button>
                </Popconfirm>
              </Col>
            </StyleColCenter>
          </Row>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Row justify='center' align='middle'>
            <StyleColCenter>
              <Col span={24}>
                <Heading as='h2'>{facts.experienceYears}</Heading>
                <p>Year Experience</p>
                <Popconfirm
                  color='var(--color-grey-100)'
                  showCancel={false}
                  description={
                    <StyleButtonPlusMinus>
                      <Button
                        onClick={() =>
                          setTempExperiencesYear(tempExperiencesYear - 1)
                        }
                      >
                        -
                      </Button>
                      <span>{tempExperiencesYear}</span>
                      <Button
                        onClick={() =>
                          setTempExperiencesYear(tempExperiencesYear + 1)
                        }
                      >
                        +
                      </Button>
                    </StyleButtonPlusMinus>
                  }
                  onConfirm={() =>
                    confirm('experienceyears', tempExperiencesYear)
                  }
                  placement='bottom'
                >
                  <Button>Update</Button>
                </Popconfirm>
              </Col>
            </StyleColCenter>
          </Row>
        </Col>
      </Row>
    </>
  )
}
