import styled from 'styled-components'

const StyleButton = styled.button`
  background-color: var(--color-cyan-6);
  border: none;
  border-radius: 2rem;
  padding: 1rem 4rem;
  margin-bottom: 1rem;
  color: var(--color-grey-0);
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.2rem;
  &:hover {
    background-color: var(--color-cyan-5);
  }
  &:focus {
    outline: none;
  }
`
export default StyleButton
