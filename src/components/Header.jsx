import { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { ConfigProvider, Menu } from 'antd'
import { Flex } from 'antd'

import Logo from './Logo'
import SocialGroup from './SocialGroup'
import ModalHeader from './ModalHeader'
import MainNav from './MainNav'

const items = [
  {
    label: (
      <NavLink
        to='/home'
        className={({ isActive }) => (isActive ? 'ant-menu-item-active' : '')}
      >
        Home
      </NavLink>
    ),
    key: '/home',
  },
  {
    label: <NavLink to='about'>About</NavLink>,
    key: '/about',
  },
  {
    label: <NavLink to='projects'>Projects</NavLink>,
    key: '/projects',
  },
  {
    label: <NavLink to='skills'>Skills</NavLink>,
    key: '/skills',
  },
  {
    label: <NavLink to='contact'>Contact</NavLink>,
    key: '/contact',
  },
  {
    label: <NavLink to='blog'>Blog</NavLink>,
    key: '/blog',
  },
  {
    label: <NavLink to='login'>Change Info</NavLink>,
    key: '/login',
  },
]

const StyleHeader = styled.div`
  width: 100vw;
  position: fixed;
  background-color: var(--color-platinum-1);
  color: var(--color-grey-600);
  top: 0;
  padding: 2rem 2.8rem;
  box-shadow: var(--shadow-md);
  z-index: 10;
  @media (max-width: 1200px) {
    justify-content: flex-end;
  }
`

const StyleToggle = styled.button`
  display: none;
  border: none;
  background-color: var(--color-platinum-1);
  @media (max-width: 1200px) {
    display: inline-block;
  }
`

const StyleModalHeader = styled(ModalHeader)`
  padding: '0';
`
const Header = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const location = useLocation()

  const [current, setCurrent] = useState(location.pathname)

  const onClick = (e) => {
    setCurrent(e.key)
  }

  return (
    <StyleHeader>
      <Flex justify='space-between' align='center'>
        <Logo />
        <MainNav current={current} onClick={onClick} items={items} />
        <SocialGroup />
        <StyleToggle onClick={() => setModalOpen(true)}>
          <GiHamburgerMenu size='22' />
        </StyleToggle>
        <StyleModalHeader
          current={current}
          onClick={onClick}
          items={items}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      </Flex>
    </StyleHeader>
  )
}
export default Header
