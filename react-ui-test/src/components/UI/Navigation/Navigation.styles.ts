import styled from 'styled-components'

export const Nav = styled.nav`
  position: fixed;
  z-index: 2;
  top: 0;
  display: flex;
  width: calc(100vw - 2rem);
  min-height: 10rem;
  justify-content: space-between;
  padding: 0 1rem;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 80%);

  @media (${({ theme }) => theme.device.desktop}) {
    min-height: 22vh;
  }
`
export const NavLogo = styled.h1`
  margin: 2.5rem 0 0;
  color: ${({ theme }) => theme.colors.colorWhite};
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.5rem;

  @media (${({ theme }) => theme.device.desktop}) {
    margin-top: 3rem;
  }
`

export const NavHamburguer = styled.button`
  position: relative;
  top: 2rem;
  right: 1rem;
  width: 25px;
  height: 20px;

  &:focus + .nav__links {
    transform: translateX(0);
  }

  ${({ theme }) => theme.mixins.iconButton}

  @media (${({ theme }) => theme.device.desktop}) {
    display: none;
  }
`
export const NavLinks = styled.ul`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: calc(100vh - 4rem);
  flex-direction: column;
  padding: 4rem 0 2rem;
  background-color: ${({ theme }) => theme.colors.colorDarkerBackground};
  transform: translateX(100vw);

  &:focus-within {
    transform: translateX(0);
  }

  li {
    width: 100%;
    margin: 3rem 0;
    font-size: 2rem;
    text-align: center;
  }

  a {
    color: ${({ theme }) => theme.colors.colorWhite};
    text-decoration: none;
  }

  li:last-child {
    order: -1;
  }

  @media (${({ theme }) => theme.device.desktop}) {
    position: absolute;
    top: 3rem;
    right: 0;
    left: auto;
    width: 40vw;
    height: auto;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 0;
    background-color: transparent;
    transform: translateX(0);

    li {
      width: fit-content;
      margin: 0 1rem 0 0;
      font-size: 1rem;
      font-weight: 300;
      text-align: right;
    }

    li:last-child {
      order: 0;
    }
  }
`

export const NavSearchInput = styled.input`
  width: 25vw;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.colorWhite};
  background-color: transparent;
  border-radius: 0;
  color: var(--color-white);
  font-family: 'Lato', sans-serif;
  font-size: 1.5rem;
  transition: width 0.2s ease-in;

  &:focus {
    width: 60vw;
    outline: 0 none;
  }

  @media (${({ theme }) => theme.device.desktop}) {
    display: none;
  }
`

export const NavSearchButton = styled.button`
  width: 24px;
  height: 24px;
  margin-left: 0.5rem;
  ${({ theme }) => theme.mixins.iconButton}

  @media(${({ theme }) => theme.device.desktop}) {
    width: 2rem;
    height: 2rem;
  }
`
