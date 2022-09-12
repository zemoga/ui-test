import { useEffect, useState } from 'react'
import { RulingDataTypes } from '../PreviousRulings.types'
import Moment from 'react-moment'

import {
  Ruling,
  RulingImage,
  RulingWrapper,
  RulingName,
  RulingDescription,
  RulingTimeStamp,
  RulingButtons,
  RulingButton,
  RulingVoteButton,
  RulingBottomGauge,
  RulingUpGauge,
  RulingDownGauge,
  RulingWrapperLeft,
  RulingWrapperRight,
} from './RulingItem.styles'

interface RulingItemDataTypes {
  data: RulingDataTypes
  isListMode: boolean
}

const RulingItem = ({ data, isListMode }: RulingItemDataTypes) => {
  const [imageFileName, setImageFileName] = useState<string>('')
  const [imageFileName2X, setImageFileName2X] = useState<string>('')
  const [positivePercentaje, setPositivePercentaje] = useState<string>('')
  const [negativePercentaje, setNegativePercentaje] = useState<string>('')
  const [isPositiveRuling, setIsPositiveRuling] = useState<boolean>(true)

  const setImageFilePatter: () => void = () => {
    const imageName = data.picture.split('.', 1)[0]

    let fullImageFileName = ''
    let fullImageFileName2X = ''

    if (isListMode) {
      fullImageFileName = `${imageName}-small.png`
      fullImageFileName2X = `${imageName}-small@2x.png`
    } else {
      fullImageFileName = `${imageName}.png`
      fullImageFileName2X = `${imageName}@2x.png`
    }

    setImageFileName(fullImageFileName)
    setImageFileName2X(fullImageFileName2X)
  }

  const getPercentaje = (votesNumber: number) => {
    const fullPercentaje = data.votes.positive + data.votes.negative

    const percentaje = (votesNumber * 100) / fullPercentaje

    return percentaje.toFixed(1)
  }

  useEffect(() => {
    setPositivePercentaje(getPercentaje(data.votes.positive))
    setNegativePercentaje(getPercentaje(data.votes.negative))
    setIsPositiveRuling(data.votes.positive > data.votes.negative)
  }, [])

  useEffect(() => {
    setImageFilePatter()
  }, [isListMode])

  return (
    <Ruling isListMode={isListMode}>
      <RulingImage
        srcSet={`./assets/rulings_images/${imageFileName} 750w, ./assets/rulings_images/${imageFileName2X} 1440w`}
        sizes='(min-width: 750px) 1440px, 100vw'
        src={`./assets/rulings_images/${imageFileName}`}
        alt={data.name}
        isListMode={isListMode}
      />
      <RulingWrapper isListMode={isListMode} isPositiveRuling={isPositiveRuling}>
        <RulingWrapperLeft isListMode={isListMode}>
          <RulingName isListMode={isListMode} isPositiveRuling={isPositiveRuling}>
            <span>{data.name}</span>
          </RulingName>
          <RulingDescription>{data.description}</RulingDescription>
        </RulingWrapperLeft>
        <RulingWrapperRight isListMode={isListMode}>
          <RulingTimeStamp>
            <Moment fromNow>{data.lastUpdated}</Moment>
            <span> in </span>
            <span>{data.category}</span>
          </RulingTimeStamp>
          <RulingButtons>
            <RulingButton className='icon-button' aria-label='thumbs up' />
            <RulingButton className='icon-button' aria-label='thumbs down' />
            <RulingVoteButton>Vote Now</RulingVoteButton>
          </RulingButtons>
        </RulingWrapperRight>
        <RulingBottomGauge>
          <RulingUpGauge percentaje={positivePercentaje}>
            <span>{positivePercentaje}%</span>
          </RulingUpGauge>
          <RulingDownGauge percentaje={negativePercentaje}>
            <span>{negativePercentaje}%</span>
          </RulingDownGauge>
        </RulingBottomGauge>
      </RulingWrapper>
    </Ruling>
  )
}

export default RulingItem
