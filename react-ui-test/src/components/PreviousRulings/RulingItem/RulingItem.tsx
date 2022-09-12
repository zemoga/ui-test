import { useEffect, useState } from 'react'
import { RulingDataTypes } from '../PreviousRulings.types'

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
}

const RulingItem = ({ data }: RulingItemDataTypes) => {
  const [imageFileName, setImageFileName] = useState<string>('')
  const [imageFileName2X, setImageFileName2X] = useState<string>('')
  const [isListMode, setIsListMode] = useState<boolean>(true)

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

  useEffect(() => {
    setImageFilePatter()
  }, [])

  useEffect(() => {

    if(window.innerWidth < 768){
      setIsListMode(false);
    }

    const windowResize = () => {
      console.log(window.innerWidth);
      if(window.innerWidth < 768){
        setIsListMode(false);
      }else{
        setIsListMode(true);
      }
    }
    window.addEventListener('resize', windowResize);
  })


  return (
    <Ruling isListMode={isListMode}>
      <RulingImage
        srcSet={`./assets/rulings_images/${imageFileName} 750w, ./assets/rulings_images/${imageFileName2X} 1440w`}
        sizes='(min-width: 750px) 1440px, 100vw'
        src={`./assets/rulings_images/${imageFileName}`}
        alt={data.name}
        isListMode={isListMode}
      />
      <RulingWrapper isListMode={isListMode}>
        <RulingWrapperLeft isListMode={isListMode}>
          <RulingName isListMode={isListMode}>
            <span>{data.name}</span>
          </RulingName>
          <RulingDescription>{data.description}</RulingDescription>
        </RulingWrapperLeft>
        <RulingWrapperRight isListMode={isListMode}>
          <RulingTimeStamp>{data.lastUpdated}</RulingTimeStamp>
          <RulingButtons>
            <RulingButton className='icon-button' aria-label='thumbs up'/>
            <RulingButton className='icon-button' aria-label='thumbs down'/>
            <RulingVoteButton>Vote Now</RulingVoteButton>
          </RulingButtons>
        </RulingWrapperRight>
        <RulingBottomGauge>
          <RulingUpGauge>
            <span>{data.votes.positive}%</span>
          </RulingUpGauge>
          <RulingDownGauge>
            <span>{data.votes.negative}%</span>
          </RulingDownGauge>
        </RulingBottomGauge>
      </RulingWrapper>
    </Ruling>
  )
}

export default RulingItem
