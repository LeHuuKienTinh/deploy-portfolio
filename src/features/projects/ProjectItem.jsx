import { Col, ConfigProvider, Row, Timeline } from 'antd'
import React from 'react'
import Heading from '../../components/Heading'
import styled from 'styled-components'

const StyleProjectItem = styled.div`
  padding: 0 1.2rem;
`

const StyleHeading3 = styled.div`
  & h3 {
    font-weight: 700;
  }
`
const StyleInfoPrj = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 0.8rem; */
  padding-left: 1.4rem;
  margin-top: 1rem;
  & h3 {
    font-weight: bold;
  }
  & h4 {
    font-size: 2rem;
    color: var(--color-platinum-7);
  }

  & p {
    font-style: italic;
    margin-bottom: 1.6rem;
    margin-top: 1rem;
    text-align: justify;
    color: var(--color-grey-800);
  }

  & li {
    list-style: disc;
    padding-bottom: 1rem;
    color: var(--color-grey-800);
  }
`

export default function ProjectItem() {
  return (
    <StyleProjectItem>
      <ConfigProvider
        theme={{
          components: {
            Timeline: {
              itemPaddingBottom: 0,
              dotBg: 'var(--color-cyan-4)',
              dotBorderWidth: 0,
              tailColor: 'var(--color-cyan-4)',
              tailWidth: 3,
            },
          },
        }}
      >
        <StyleHeading3>
          <Heading as='h3'>Sumary</Heading>
        </StyleHeading3>
        <Timeline>
          <Timeline.Item>
            <Col>
              <StyleInfoPrj>
                <Heading as='h4'>BRANDON JOHNSON</Heading>
                <p>
                  Innovative and deadline-driven Graphic Designer with 3+ years
                  of experience designing and developing user-centered
                  digital/print marketing material from initial concept to
                  final, polished deliverable.
                </p>
                <ul>
                  <li>Portland par 127, Orlando, FL</li>
                  <li>Portland par 128, Orlando, FL</li>
                  <li>Portland par 129, Orlando, FL</li>
                </ul>
              </StyleInfoPrj>
            </Col>
          </Timeline.Item>
          {/* Item rỗng để line kéo dài */}
          <Timeline.Item dot={<span style={{ display: 'none' }} />} />
        </Timeline>
      </ConfigProvider>
    </StyleProjectItem>
  )
}
