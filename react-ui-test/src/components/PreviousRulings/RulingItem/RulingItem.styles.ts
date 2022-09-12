import styled from 'styled-components'

export const Ruling = styled.div<{ isListMode?: boolean }>`
  position: relative;
  max-width: ${(props) => (!props.isListMode ? '300px' : '100%')};
  margin: 15px 0;

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

export const RulingWrapper = styled.div<{ isListMode?: boolean }>`
  position: absolute;
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
  background: ${(props) =>
    !props.isListMode
      ? 'none'
      : 'linear-gradient(90deg, rgba(0, 0, 0, 0.0001) 15%, #888888 19.79%, #666666 50%, rgba(51, 51, 51, 0.6) 71.88%)'};
`

export const RulingWrapperLeft = styled.div<{ isListMode?: boolean }>`
  width: ${(props) => (!props.isListMode ? '100%' : '70%')};
  align-self: ${(props) => (!props.isListMode ? 'auto' : 'center')};
`

export const RulingWrapperRight = styled.div<{ isListMode?: boolean }>`
  width: ${(props) => (!props.isListMode ? '100%' : '30%')};
  align-self: ${(props) => (!props.isListMode ? 'auto' : 'center')};
`

export const RulingName = styled.h3<{ isListMode?: boolean }>`
  position: relative;
  margin: 0;

  span:first-of-type {
    background-color: rgba(${({ theme }) => theme.colors.colorGreenPositive}, 0.8);
    position: absolute;
    bottom: ${(props) => (!props.isListMode ? '0' : 'auto')};
    top: ${(props) => (!props.isListMode ? 'auto' : '-21px')};
    transform: ${(props) => (!props.isListMode ? 'translateX(-36px);' : 'translateX(-234px)')};
    left: 0px;
    display: flex;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    text-align: center;
    img {
      width: 15px;
    }
  }

  span:last-of-type {
    color: ${({ theme }) => theme.colors.colorWhite};
    font-size: 30px;
    line-height: 36px;
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
`

export const RulingThumb = styled.span``

export const RulingDescription = styled.p`
  color: ${({ theme }) => theme.colors.colorWhite};
  font-size: 15px;
  line-height: 18px;
  margin: 0;
  margin-bottom: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const RulingTimeStamp = styled.span`
  color: ${({ theme }) => theme.colors.colorWhite};
  font-size: 12px;
  line-height: 14.4px;
  margin: 0;
  margin-bottom: 12px;
  display: block;
  text-align: right;
`

export const RulingButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const RulingButton = styled.button`
  ${({ theme }) => theme.mixins.iconButton}
  margin-right: 12px;
  padding: 7px;
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
  padding: 7px;
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

export const RulingUpGauge = styled.div`
  ${gauge}
  justify-content: flex-start;

  width: 30%;
  background-color: rgba(${({ theme }) => theme.colors.colorGreenPositive}, 0.6);

  span {
    color: ${({ theme }) => theme.colors.colorWhite};
  }
`

export const RulingDownGauge = styled.div`
  ${gauge}
  justify-content: flex-end;

  width: 70%;
  background-color: rgba(${({ theme }) => theme.colors.colorYellowNegative}, 0.6);

  span {
    color: ${({ theme }) => theme.colors.colorWhite};
  }
`
