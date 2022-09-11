import styled from 'styled-components'

export const Banner = styled.aside`
  ${({ theme }) => theme.mixins.banner}
  flex-direction: column;
  padding: 1rem 3rem;
  margin-top: 2rem;

  @media (${({ theme }) => theme.device.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 2rem;
  }
`

export const BannerBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  opacity: 0.2;
  pointer-events: none;

  @media (${({ theme }) => theme.device.tablet}) {
    top: -230%;
  }
`

export const BannerLeft = styled.div`
  h2 {
    position: relative;
    margin: 0 0 1rem;
    color: ${({ theme }) => theme.colors.colorDarkerGray};
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
  }

  @media (${({ theme }) => theme.device.tablet}) {
    h2 {
      margin-bottom: 0;
      font-size: 1.5rem;
    }
  }
`

export const BannerRight = styled.div`
  width: 100%;

  button {
    position: relative;
    display: block;
    width: 100%;
    padding: 1rem 0;
    border: 2px solid ${({ theme }) => theme.colors.colorDarkerBackground};
    background: transparent;
    color: ${({ theme }) => theme.colors.colorDarkerGray};
    font-size: 1.5rem;
  }

  @media (${({ theme }) => theme.device.tablet}) {
    width: auto;
    button {
      width: 16rem;
    }
  }

  @media (${({ theme }) => theme.device.desktop}) {
    button {
      width: 20rem;
    }
  }
`
