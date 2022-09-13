import { useEffect, useState } from 'react'
import { RulingDataTypes } from '../PreviousRulings.types'
import Moment from 'react-moment'
import moment from 'moment'

import {
  Ruling,
  RulingImage,
  RulingWrapper,
  NameTitle,
  Description,
  TimeStamp,
  RulingButtons,
  ThumbVoteButton,
  VoteButton,
  BottomGauge,
  UpGauge,
  DownGauge,
  WrapperLeft,
  WrapperRight,
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
  const [isVotingEnabled, setIsVotingEnabled] = useState<boolean>(false)
  const [alreadyVoted, setAlreadyVoted] = useState<boolean>(false)
  const [positiveVotes, setPositiveVotes] = useState<number>(0)
  const [negativeVotes, setNegativeVotes] = useState<number>(0)
  const [likeVote, setLikeVote] = useState<number>(0)
  const [dislikeVote, setDislikeVote] = useState<number>(0)
  const [itemDate, setItemDate] = useState<string>('')

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

  const getPercentaje = (positiveVotes: number, negativeVotes: number) => {
    const fullPercentaje = positiveVotes + negativeVotes

    const percentajePositive = (positiveVotes * 100) / fullPercentaje
    const percentajeNegative = (negativeVotes * 100) / fullPercentaje

    setPositivePercentaje(percentajePositive.toFixed(1))
    setNegativePercentaje(percentajeNegative.toFixed(1))
  }

  const like: () => void = () => {
    setDislikeVote(0)
    setLikeVote(1)
    setIsVotingEnabled(true)
  }

  const dislike: () => void = () => {
    setDislikeVote(1)
    setLikeVote(0)
    setIsVotingEnabled(true)
  }

  const vote: () => void = () => {
    if (!alreadyVoted) {
      const newPositiveVotes = positiveVotes + likeVote
      const newNegativeVotes = negativeVotes + dislikeVote
      const nameOwner = data.name
      const currentDate = moment().toDate().toString()

      const votes = {
        positive: newPositiveVotes,
        negative: newNegativeVotes,
        lastUpdated: currentDate,
      }

      localStorage.setItem(nameOwner, JSON.stringify(votes))

      setPositiveVotes(newPositiveVotes)
      setNegativeVotes(newNegativeVotes)
      getPercentaje(newPositiveVotes, newNegativeVotes)
      setIsPositiveRuling(newPositiveVotes > newNegativeVotes)
      setItemDate(currentDate)
      setDislikeVote(0)
      setLikeVote(0)
      setAlreadyVoted(true)
    } else {
      setAlreadyVoted(false)
      setIsVotingEnabled(false)
    }
  }

  useEffect(() => {
    const itemStoragedData = localStorage.getItem(data.name)
    let itemPositiveVotes = data.votes.positive
    let itemNegativeVotes = data.votes.negative
    let itemDate = data.lastUpdated

    if (itemStoragedData) {
      const localData = JSON.parse(itemStoragedData)
      itemPositiveVotes = localData.positive
      itemNegativeVotes = localData.negative
      itemDate = localData.lastUpdated
    }

    getPercentaje(itemPositiveVotes, itemNegativeVotes)
    setIsPositiveRuling(itemPositiveVotes > itemNegativeVotes)
    setPositiveVotes(itemPositiveVotes)
    setNegativeVotes(itemNegativeVotes)
    setIsPositiveRuling(itemPositiveVotes > itemNegativeVotes)
    setItemDate(itemDate)
  }, [])

  useEffect(() => {
    setImageFilePatter()
  }, [isListMode])

  return (
    <Ruling isListMode={isListMode} tabIndex={0}>
      <RulingImage
        srcSet={`./assets/rulings_images/${imageFileName} 750w, ./assets/rulings_images/${imageFileName2X} 1440w`}
        sizes='(min-width: 750px) 1440px, 100vw'
        src={`./assets/rulings_images/${imageFileName}`}
        alt={data.name}
        isListMode={isListMode}
      />
      <RulingWrapper isListMode={isListMode} isPositiveRuling={isPositiveRuling}>
        <WrapperLeft isListMode={isListMode}>
          <NameTitle isListMode={isListMode} isPositiveRuling={isPositiveRuling} tabIndex={0}>
            <span>{data.name}</span>
          </NameTitle>
          <Description tabIndex={0}>{data.description}</Description>
        </WrapperLeft>
        <WrapperRight isListMode={isListMode}>
          <TimeStamp>
            {!alreadyVoted ? (
              <>
                <Moment fromNow>{itemDate}</Moment>
                <span> in </span>
                <span>{data.category}</span>
              </>
            ) : (
              <span>Thank you for your vote!</span>
            )}
          </TimeStamp>
          <RulingButtons>
            {!alreadyVoted && (
              <>
                <ThumbVoteButton className='icon-button' aria-label='thumbs up' onClick={like} />
                <ThumbVoteButton
                  className='icon-button'
                  aria-label='thumbs down'
                  onClick={dislike}
                />
              </>
            )}
            <VoteButton
              disabled={!isVotingEnabled}
              onClick={vote}
              aria-label={alreadyVoted ? 'Vote Again' : 'Vote Now'}
              name={alreadyVoted ? 'Vote Again' : 'Vote Now'}
              type='button'
            >
              {alreadyVoted ? 'Vote Again' : 'Vote Now'}
            </VoteButton>
          </RulingButtons>
        </WrapperRight>
        <BottomGauge>
          <UpGauge percentaje={positivePercentaje}>
            <span>{positivePercentaje}%</span>
          </UpGauge>
          <DownGauge percentaje={negativePercentaje}>
            <span>{negativePercentaje}%</span>
          </DownGauge>
        </BottomGauge>
      </RulingWrapper>
    </Ruling>
  )
}

export default RulingItem
