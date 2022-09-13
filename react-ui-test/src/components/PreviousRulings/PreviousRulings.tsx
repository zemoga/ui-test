import { useEffect, useState } from 'react'
import RulingHeading from './RulingsHeading/RulingsHeading'
import RulingItem from './RulingItem/RulingItem'
import Slider from 'react-slick'
import { RulingDataTypes, sliderSettingsTypes } from './PreviousRulings.types'
import { RulingsGrid } from './PreviousRulings.styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const PreviousRulings = () => {
  const [previousRulingsList, setPreviousRulingsList] = useState<RulingDataTypes[]>([])
  const [isListMode, setIsListMode] = useState<boolean>(true)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const fetchData: () => Promise<void> = async () => {
    const data = await fetch('data.json')
    const response = await data.json()
    setPreviousRulingsList(response.data)
  }

  const viewSlectorValue: (e: React.ChangeEvent<HTMLSelectElement>) => void = (event) => {
    const slectorValue: string = event.target.value
    slectorValue === 'list' && setIsListMode(true)
    slectorValue === 'grid' && setIsListMode(false)
  }

  const renderItems:() => JSX.Element[] = () => {
    let items: JSX.Element[] = []

    if (isMobile) {
      items = previousRulingsList.map((ruling, index) => (
        <div key={index}>
          <RulingItem data={ruling} isListMode={isListMode} />
        </div>
      ))
    } else {
      items = previousRulingsList.map((ruling, index) => (
        <RulingItem key={index} data={ruling} isListMode={isListMode} />
      ))
    }

    return items
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsListMode(false)
      setIsMobile(true)
    }

    const windowResize = () => {
      if (window.innerWidth < 768 && isListMode) {
        setIsListMode(false)
      }

      if (window.innerWidth < 768) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
    window.addEventListener('resize', windowResize)

    return () => {
      window.removeEventListener('resize', windowResize)
    }
  }, [])

  const sliderSettings: sliderSettingsTypes = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'center',
    centerMode: true,
    centerPadding: '20px',
  }

  return (
    <>
      <RulingHeading onChangeView={viewSlectorValue} isListMode={isListMode} />
      {previousRulingsList.length !== 0 && (
        <section>
          {!isMobile && <RulingsGrid isListMode={isListMode}>{renderItems()}</RulingsGrid>}

          {isMobile && <Slider {...sliderSettings}>{renderItems()}</Slider>}
        </section>
      )}
    </>
  )
}

export default PreviousRulings
