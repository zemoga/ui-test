import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  width: 100%;
`

export const FooterContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 0 1rem 3rem;
  @media (${({ theme }) => theme.device.tablet}) {
    align-items: flex-start;
  }
  @media (${({ theme }) => theme.device.desktop}) {
    margin-right: 0;
    margin-left: 0;
  }
`

export const FooterLinks = styled.nav`
  li {
    padding: 0.5rem 0;
    font-size: 1.25rem;
  }

  li a {
    color: ${({ theme }) => theme.colors.colorDarkerGray};
    text-decoration: none;
  }

  li a:hover {
    color: ${({ theme }) => theme.colors.colorDarkerGray};
    text-decoration: underline;
  }
  @media (${({ theme }) => theme.device.tablet}) {
    ul {
      display: flex;
    }
    ul li {
      padding: 0;
      margin-right: 2rem;
      font-size: 1rem;
    }
  }
`

export const FooterSocial = styled.nav`
  > span {
    color: ${({ theme }) => theme.colors.colorDarkerGray};
    font-size: 1.25rem;
    text-align: right;
  }

  > ul {
    display: flex;
    margin-top: 1rem;
  }

  > ul > li {
    margin-right: 1rem;
  }

  @media (${({ theme }) => theme.device.tablet}) {
    display: flex;
    align-items: center;

    span {
      margin-right: 1rem;
      color: ${({ theme }) => theme.colors.colorDarkGray};
      font-size: 0.833rem;
    }

    > ul {
      margin-top: 3px;
    }
  }
`
