import styled, { css } from 'styled-components'

const Heading = styled.h1`
  color: var(--color-grey-800);
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 5.2rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === 'h2' &&
    css`
      display: inline-flex;
      position: relative;
      justify-content: center;
      font-size: 3.2rem;
      font-weight: 600;
      padding-bottom: 1.2rem;
      text-decoration: dashed;
      margin-bottom: 2rem;
      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: 60%;
        border-bottom: 0.4rem solid var(--color-cyan-5);
      }
    `}
    ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 2.4rem;
      font-weight: 500;
      padding-bottom: 1rem;
    `}

     ${(props) =>
    props.as === 'h4' &&
    css`
      font-size: 1.6rem;
      font-weight: 600;
    `}
    ${(props) =>
    props.as === 'h5' &&
    css`
      font-size: 1.5rem;
      font-weight: 600;
      text-align: center;
      padding: 1rem 2rem;
    `}
  line-height: 1.4;
`

export default Heading
