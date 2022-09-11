import styled from 'styled-components'
import HeroImage from '../../styles/img/pope-francis.png' // eslint-disable-line no-use-before-define

export const Hero = styled.header`
  position: relative;
  overflow: hidden;
  height: 80vw;
  min-height: 35rem;
  max-height: 38rem;
  margin-bottom: 2rem;

  @media (${({ theme }) => theme.device.tablet}) {
    max-height: 38rem;
  }

  @media (${({ theme }) => theme.device.desktop}) {
    min-height: 700px;
  }
`
export const HeroBackground = styled.img`
  position: absolute;
  left: -35vw;
  width: 160vw;
  height: 100%;
  object-fit: cover;

  @media (${({ theme }) => theme.device.tablet}) {
    top: -6.5rem;
    left: 0;
    width: 110vw;
    height: auto;
  }

  @media (${({ theme }) => theme.device.desktop}) {
    top: -2.5rem;
    left: 0;
    width: 100vw;
    height: auto;
  }
`

export const HeroFeaturedCard = styled.div`
  position: relative;
  top: 5.5rem;
  left: 1rem;
  overflow: hidden;
  width: 55vw;
  max-height: 25rem;

  @media (${({ theme }) => theme.device.desktop}) {
    left: 0;
    width: 50%;
    min-width: 600px;
    max-height: unset;
    margin-top: 2.5rem;
  }
`

export const FeaturedCardGlassBackground = styled.div`
  position: absolute;
  top: -20%;
  left: -20%;
  width: 140%;
  height: 140%;
  background: center no-repeat
      linear-gradient(
        ${({ theme }) => theme.colors.colorDarkBackground},
        ${({ theme }) => theme.colors.colorDarkBackground}
      ),
    -25vw 0/160vw no-repeat url('${HeroImage}');
  filter: blur(1rem);

  @media (${({ theme }) => theme.device.tablet}) {
    background: center no-repeat
        linear-gradient(
          ${({ theme }) => theme.colors.colorDarkBackground},
          ${({ theme }) => theme.colors.colorDarkBackground}
        ),
      7vw -6.5rem/115vw auto no-repeat url('${HeroImage}');
  }

  @media (${({ theme }) => theme.device.desktop}) {
    background: center no-repeat
        linear-gradient(
          ${({ theme }) => theme.colors.colorDarkBackground},
          ${({ theme }) => theme.colors.colorDarkBackground}
        ),
      calc(-50vw + 650px) -6rem/105vw auto no-repeat url('${HeroImage}');
  }
`

export const FeaturedCardContent = styled.div`
  position: relative;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.colorWhite};

  @media (${({ theme }) => theme.device.tablet}) {
    padding: 2rem 1.5rem;
  }

  @media (${({ theme }) => theme.device.desktop}) {
    padding: 2rem 1.5rem;
  }
`

export const FeaturedCardHairline = styled.p`
  margin: 0;
  font-weight: 300;
  white-space: nowrap;
`

export const FeaturedCardTitle = styled.h2`
  margin: 0;
  font-size: 3rem;
  font-weight: 400;
  line-height: 1;
`

export const FeaturedCardDesc = styled.p`
  display: -webkit-box;
  overflow: hidden;
  max-height: 10.5rem;
  margin: 1rem 0;
  -webkit-box-orient: vertical;
  font-size: 1.25rem;
  font-weight: 300;
  -webkit-line-clamp: 6;
  text-overflow: ellipsis;

  @media (${({ theme }) => theme.device.desktop}) {
    max-width: 85%;
    margin: 2rem 0 1rem;
  }
`

export const FeaturedCardMorInfo = styled.p`
  display: none;

  svg {
    width: 1.5rem;
    height: 1rem;
    margin-right: 0.5rem;
  }

  @media (${({ theme }) => theme.device.tablet}) {
    display: inline-block;
    margin: 0;
    font-weight: 300;
  }

  @media (${({ theme }) => theme.device.desktop}) {
    display: inline-block;
    margin: 0;
    font-weight: 300;
  }
`

export const FeaturedCardCta = styled.p`
  font-weight: 700;

  @media (${({ theme }) => theme.device.desktop}) {
    margin: 1rem 0 2rem;
    font-size: 1.5rem;
  }
`

export const FeaturedCardButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -1rem -1rem;

  > .icon-button {
    width: 50%;
    height: 2.75rem;

    > img {
      max-width: 1.25rem;
    }
  }

  @media (${({ theme }) => theme.device.tablet}) {
    margin: 0 -1.5rem -2rem;
  }

  @media (${({ theme }) => theme.device.desktop}) {
    margin: 0 -1.5rem -2rem;

    > .icon-button {
      height: auto;

      > img {
        max-width: 2rem;
        height: 2rem;
        margin: 1.3rem 0;
      }
    }
  }
`

export const FeaturedCardButton = styled.button`
  ${({ theme }) => theme.mixins.iconButton}
`

export const HeroClosingGauge = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.colorLightBackground};
`

export const ClosingGaugeLeft = styled.div`
  position: relative;
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: flex-end;
  padding: 0 0.25rem 0 0;
  background-color: ${({ theme }) => theme.colors.colorDarkBackground};
  color: ${({ theme }) => theme.colors.colorWhite};
  font-weight: 300;
  text-transform: uppercase;

  &:after {
    position: absolute;
    right: -0.5rem;
    display: block;
    width: 0;
    height: 0;
    border-top: 0.25rem solid transparent;
    border-bottom: 0.25rem solid transparent;
    border-left: 0.5rem solid ${({ theme }) => theme.colors.colorDarkBackground};
    content: ' ';
  }

  @media (${({ theme }) => theme.device.desktop}) {
    padding-right: 1rem;

    span {
      font-size: 1.25rem;
    }

    &:after {
      border-top-width: 0.33rem;
      border-bottom-width: 0.33rem;
    }
  }
`

export const ClosingGaugeRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 0 0 0.75rem;

  span:first-of-type {
    color: ${({ theme }) => theme.colors.colorDarkGray};
    font-size: 1.5rem;
    font-weight: 400;
  }

  span:last-of-type {
    color: ${({ theme }) => theme.colors.colorDarkGray};
    font-size: 1.5rem;
    font-weight: 300;
  }

  @media (${({ theme }) => theme.device.desktop}) {
    padding-left: 1rem;

    span:first-of-type,
    span:last-of-type {
      font-size: 2rem;
    }
  }
`
