import { Col, ConfigProvider, Timeline } from 'antd'
import Heading from '../../components/Heading'
import styled from 'styled-components'
import { GrTechnology } from 'react-icons/gr'
import { FaGithub } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'
import { Link } from 'react-router-dom'

const StyleInfoPrj = styled.div`
  display: flex;
  flex-direction: column;
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
`

const StyleUl = styled.ul`
  li {
    color: var(--color-grey-800);
    list-style: none;
    display: flex;
    align-items: center;
  }
  svg {
    margin-right: 10px;
  }
  strong {
    margin-right: 5px;
  }
`

export default function ProjectItemView({ project }) {
  const {
    title,
    position,
    durationdate,
    description,
    technologies,
    github_url,
    demo_url,
  } = project

  return (
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
      <Heading as='h3'>{title}</Heading>
      <Timeline>
        <Timeline.Item>
          <Col>
            <StyleInfoPrj>
              <Heading as='h4'>{position}</Heading>
              <Heading as='h6'>{durationdate}</Heading>
              <p>{description}</p>
              <StyleUl>
                {technologies && (
                  <li>
                    <GrTechnology /> <strong>Technology:</strong> {technologies}
                  </li>
                )}
                {github_url && (
                  <li>
                    <FaGithub /> <strong>Github URL:</strong>
                    <Link to={github_url}>{github_url}</Link>
                  </li>
                )}
                {demo_url && (
                  <li>
                    <CgWebsite /> <strong>Demo URL:</strong>
                    <Link to={demo_url}>{demo_url}</Link>
                  </li>
                )}
              </StyleUl>
            </StyleInfoPrj>
          </Col>
        </Timeline.Item>
        <Timeline.Item dot={<span style={{ display: 'none' }} />} />
      </Timeline>
    </ConfigProvider>
  )
}
