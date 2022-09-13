export interface RulingDataTypes {
  name: string
  description: string
  category: string
  picture: string
  lastUpdated: string
  votes: {
    positive: number
    negative: number
  }
}
export interface sliderSettingsTypes {
  dots: boolean
  infinite: boolean
  speed: number
  slidesToShow: number
  slidesToScroll: number
  className: string
  centerMode: boolean
  centerPadding: string
}
