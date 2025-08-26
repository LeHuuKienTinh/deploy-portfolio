import styled from 'styled-components'

const StyleContainer = styled.div`
  margin: 80px auto 0 auto;
  max-width: 1200px;
`
export default function Container({ children }) {
  return <StyleContainer>{children}</StyleContainer>
}
