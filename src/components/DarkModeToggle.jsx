import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { useDarkMode } from '../context/DarkModeContext'
import styled from 'styled-components'

const StyleButtonToggle = styled.button`
  border: none;
  background-color: var(--color-platinum-1);
  color: var(--color-grey-50);
  margin-left: 20px;
  width: 50px;
  height: 50px;
  background: var(--color-platinum-7);
  border-radius: 50%;
  &::after {
  }
  &:focus {
    outline: none;
  }
`

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  return (
    <StyleButtonToggle onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </StyleButtonToggle>
  )
}

export default DarkModeToggle
