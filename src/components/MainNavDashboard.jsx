import { Button } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useLogout } from '../features/authentication/useLogout'

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-cyan-4);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`

export default function MainNavDashboard() {
  const { logout } = useLogout()

  return (
    <nav>
      <NavList>
        <strong> Main Menu</strong>
        <li>
          <StyledNavLink to='/dashboard/about'>
            <span>About</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/dashboard/projects'>
            <span>Projects</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/dashboard/contact'>
            <span>Contact</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/dashboard/blog'>
            <span>Blog</span>
          </StyledNavLink>
        </li>
        <strong> Settings</strong>
        <li>
          <Button block onClick={() => logout()}>
            <span>Logout</span>
          </Button>
        </li>
      </NavList>
    </nav>
  )
}
