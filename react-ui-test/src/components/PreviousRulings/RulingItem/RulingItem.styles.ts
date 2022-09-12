import styled, { keyframes } from 'styled-components'
import thumbUp from '../../../styles/img/thumbs-up.svg'
import thumbDown from '../../../styles/img/thumbs-down.svg'

const thumbInsert = `
  content: '';
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
`

const showUp = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1
  }
`

export const Ruling = styled.div<{ isListMode?: boolean }>`
  position: relative;
  overflow: hidden;
  max-width: ${(props) => (!props.isListMode ? '96%' : '100%')};
  margin: ${(props) => (!props.isListMode ? '0 auto 15px' : '0 0 15px')};
  opacity: 0;
  animation: ${showUp} 1s linear forwards;

  &:before,
  &:after {
    display: ${(props) => (!props.isListMode ? 'none' : 'block')};
  }

  &:before {
    content: '';
    position: absolute;
    width: 234px;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.0001) 70%, #888888 100%);
    z-index: 0;
  }

  &:after {
    content: '';
    position: absolute;
    width: calc(100% - 234px);
    height: 100%;
    top: 0;
    right: 0;
    background: linear-gradient(90deg, #888888 0%, #666666 50%, rgba(51, 51, 51, 0.6) 71.88%);
    z-index: 0;
  }

  @media (${({ theme }) => theme.device.tablet}) {
    max-width: ${(props) => (!props.isListMode ? '350px' : '100%')};
  }
`
export const RulingImage = styled.img<{ isListMode?: boolean }>`
  width: ${(props) => (!props.isListMode ? '100%' : '234px')};
  margin-bottom: -3px;

  @media (${({ theme }) => theme.device.tablet}) {
    margin-bottom: -4px;
  }
`

export const RulingWrapper = styled.div<{ isListMode?: boolean; isPositiveRuling?: boolean }>`
  position: absolute;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => (!props.isListMode ? 'column' : 'row')};
  align-items: ${(props) => (!props.isListMode ? 'center' : 'auto')};
  height: ${(props) => (!props.isListMode ? 'auto' : '100%')};
  bottom: 0;
  left: 0;
  padding-bottom: ${(props) => (!props.isListMode ? '48px' : '36px')};
  padding-left: ${(props) => (!props.isListMode ? '36px' : '234px')};
  padding-right: 36px;
  box-sizing: border-box;

  &:before {
    display: ${(props) => (!props.isListMode ? 'none' : 'block')};
  }

  &:before {
    ${thumbInsert}
    background-color:  ${(props) =>
      props.isPositiveRuling
        ? `rgba(${props.theme.colors.colorGreenPositive}, 0.8)`
        : `rgba(${props.theme.colors.colorYellowNegative}, 0.6)`};
    background-image: ${(props) =>
      props.isPositiveRuling ? `url('${thumbUp}')` : `url('${thumbDown}')`};
    top: 0;
    left: 0px;
  }
`

export const RulingWrapperLeft = styled.div<{ isListMode?: boolean }>`
  width: ${(props) => (!props.isListMode ? '100%' : 'calc(100% - 190px)')};
  padding-right: ${(props) => (!props.isListMode ? '0' : '30px')};
  align-self: ${(props) => (!props.isListMode ? 'auto' : 'center')};
`

export const RulingWrapperRight = styled.div<{ isListMode?: boolean }>`
  width: ${(props) => (!props.isListMode ? '100%' : '190px')};
  align-self: ${(props) => (!props.isListMode ? 'auto' : 'center')};
`

export const RulingName = styled.h3<{ isListMode?: boolean; isPositiveRuling?: boolean }>`
  position: relative;
  margin: 0;

  &:before {
    display: ${(props) => (!props.isListMode ? 'block' : 'none')};
  }

  &:before {
    ${thumbInsert}
    background-color:  ${(props) =>
      props.isPositiveRuling
        ? `rgba(${props.theme.colors.colorGreenPositive}, 0.8)`
        : `rgba(${props.theme.colors.colorYellowNegative}, 0.6)`};
    background-image: ${(props) =>
      props.isPositiveRuling ? `url('${thumbUp}')` : `url('${thumbDown}')`};
    bottom: 0;
    transform: translateX(-36px);
    left: 0px;
  }

  span:last-of-type {
    color: ${({ theme }) => theme.colors.colorWhite};
    font-size: 2.5rem;
    line-height: 3rem;
    margin: 0;
    margin-bottom: 7px;
    padding: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    position: relative;
  }

  @media (${({ theme }) => theme.device.tablet}) {
    span:last-of-type {
      font-size: 2rem;
    }
  }
`

export const RulingDescription = styled.p`
  color: ${({ theme }) => theme.colors.colorWhite};
  font-size: 1.25rem;
  line-height: 1.5rem;
  margin: 0;
  margin-bottom: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media (${({ theme }) => theme.device.tablet}) {
    font-size: 1rem;
  }
`

export const RulingTimeStamp = styled.span`
  color: ${({ theme }) => theme.colors.colorWhite};
  font-size: 1rem;
  line-height: 1.2rem;
  margin: 0;
  margin-bottom: 12px;
  display: block;
  text-align: right;
  span:last-of-type {
    text-transform: capitalize;
  }

  @media (${({ theme }) => theme.device.tablet}) {
    font-size: 1.0714rem;
  }

  @media (${({ theme }) => theme.device.desktop}) {
    font-size: 0.833rem;
  }
`

export const RulingButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const RulingButton = styled.button`
  ${({ theme }) => theme.mixins.iconButton}
  margin-right: 12px;
  display: flex;

  &:before {
    ${thumbInsert}
    position: relative;
    display: inline-block;
  }

  &[aria-label='thumbs up'] {
    &:before {
      background-image: url('${thumbUp}');
    }
  }

  &[aria-label='thumbs down'] {
    &:before {
      background-image: url('${thumbDown}');
    }
  }
`

export const RulingVoteButton = styled.button`
  -webkit-appearance: none;
  background-color: ${({ theme }) => theme.colors.colorDarkerBackground};
  font-size: 15px;
  line-height: 18px;
  margin: 0;
  color: ${({ theme }) => theme.colors.colorWhite};
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.colorWhite};
  padding: 8px 19px;
`

export const RulingBottomGauge = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
`

const gauge = `
  display: flex;
  align-items: center;
  padding: 3px 7px;
  box-sizing: border-box;

  img {
    margin: 0 6px;
    width: 15px;
  }

  span {
    font-size: 18px;
    line-height: 21.6px;
  }
`

export const RulingUpGauge = styled.div<{ percentaje?: string }>`
  ${gauge}
  justify-content: flex-start;

  width: ${(props) => props.percentaje}%;
  background-color: rgba(${({ theme }) => theme.colors.colorGreenPositive}, 0.6);

  span {
    color: ${({ theme }) => theme.colors.colorWhite};
  }

  &:before {
    ${thumbInsert}
    background-image: url('${thumbUp}');
    position: relative;
    display: inline-block;
  }
`

export const RulingDownGauge = styled.div<{ percentaje?: string }>`
  ${gauge}
  justify-content: flex-end;

  width: ${(props) => props.percentaje}%;
  background-color: rgba(${({ theme }) => theme.colors.colorYellowNegative}, 0.6);

  span {
    color: ${({ theme }) => theme.colors.colorWhite};
  }

  &:after {
    ${thumbInsert}
    background-image: url('${thumbDown}');
    position: relative;
    display: inline-block;
  }
`
