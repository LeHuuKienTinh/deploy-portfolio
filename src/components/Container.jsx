import styled from 'styled-components'

const StyleContainer = styled.div`
  margin: 130px 11rem 0 11rem;
`
export default function Container({ children }) {
  return <StyleContainer>{children}</StyleContainer>
}
