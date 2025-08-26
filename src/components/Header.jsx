import { useEffect, useState } from 'react'

import { ConfigProvider, Menu } from 'antd'
import { Flex } from 'antd'
import Logo from './Logo'
import SocialGroup from './SocialGroup'
import styled from 'styled-components'
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import ModalHeader from './ModalHeader'

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
]

const StyleHeader = styled.div`
  padding: 2rem 2.8rem;
  /* border-bottom: 1px solid black; */
  box-shadow: var(--shadow-md);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: var(--color-platinum-1);
  color: var(--color-grey-600);
  @media (max-width: 1200px) {
    justify-content: flex-end;
  }
`

const StyleToggle = styled.button`
  display: none;
  @media (max-width: 1200px) {
    display: inline-block;
  }
`

const StyleMenu = styled.div`
  display: block;
  @media (max-width: 1200px) {
    display: none;
  }
`
const Header = () => {
  const location = useLocation()
  console.log(location.pathname)

  const [modalOpen, setModalOpen] = useState(false)
  const [current, setCurrent] = useState(location.pathname)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200)
  const onClick = (e) => {
    setCurrent(e.key)
  }
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200)
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <StyleHeader>
      <Flex justify='space-between' align='center'>
        <Logo />
        {!isMobile && (
          <ConfigProvider
            theme={{
              components: {
                Menu: {
                  itemHoverColor: 'var(--color-cyan-5)',
                  horizontalItemHoverColor: 'var(--color-cyan-5)',
                  horizontalItemSelectedColor: 'var(--color-cyan-5)',
                  horizontalLineHeight: '35px',
                  itemColor: 'var(--color-grey-600)',
                  itemBg: 'var( --color-platinum-1 )',
                },
              },
            }}
          >
            <StyleMenu>
              <Menu
                onClick={onClick}
                mode='horizontal'
                selectedKeys={[current]}
                items={items}
                style={{
                  borderBottom: 'none',
                }}
              />
            </StyleMenu>
          </ConfigProvider>
        )}
        <SocialGroup />
        <StyleToggle onClick={() => setModalOpen(true)}>
          <GiHamburgerMenu size='22' />
        </StyleToggle>
        <ModalHeader
          current={current}
          onClick={onClick}
          items={items}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          style={{ padding: '0' }}
        />
      </Flex>
    </StyleHeader>
  )
}
export default Header
