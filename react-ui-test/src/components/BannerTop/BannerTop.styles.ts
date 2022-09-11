import styled from 'styled-components'

export const Banner = styled.aside`
  ${({ theme }) => theme.mixins.banner}
`

export const BannerLeft = styled.div`
  flex-basis: 40%;
  padding-right: 1rem;

  span:first-of-type {
    color: ${({ theme }) => theme.colors.colorDarkGray};
    font-size: 1.25rem;
    font-weight: 300;
    letter-spacing: -0.07rem;
  }

  span:last-of-type {
    display: block;
    color: ${({ theme }) => theme.colors.colorDarkGray};
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -0.05rem;
  }

  @media all and (${({ theme }) => theme.device.custom500}) {
    flex-basis: 30%;
  }

  @media all and (${({ theme }) => theme.device.tablet}) {
    flex-basis: 20%;
  }

  @media all and (${({ theme }) => theme.device.desktop}) {
    span:first-of-type {
      font-size: 1rem;
    }

    span:last-of-type {
      font-size: 1.5rem;
      letter-spacing: 0;
    }
  }
`

export const BannerRight = styled.div`
  flex-basis: 60%;

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.colorDarkGray};
    font-size: 1.25rem;
    font-weight: 300;
    letter-spacing: -0.05rem;
  }

  @media all and (${({ theme }) => theme.device.custom500}) {
    flex-basis: 70%;
  }

  @media all and (${({ theme }) => theme.device.tablet}) {
    flex-basis: 80%;
  }

  @media all and (${({ theme }) => theme.device.desktop}) {
    p {
      font-size: 1rem;
    }
  }
`
export const BannerButton = styled.button`
  ${({ theme }) => theme.mixins.iconButton}
  display:none;

  @media all and (${({ theme }) => theme.device.desktop}) {
    display: block;
    margin-left: 2rem;
  }
`
