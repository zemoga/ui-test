import { Banner, BannerBackground, BannerLeft, BannerRight } from './BannerBottom.styles'
import BgPeople from '../../styles/img/bg-people.png'
import BgPeopleX2 from '../../styles/img/bg-people.@2x.png'

const BannerBottom = () => {
  return (
    <Banner role='doc-tip' aria-label='Speak Out' >
      <BannerBackground
        srcSet={`${BgPeople} 750w, ${BgPeopleX2} 1440w`}
        sizes='(min-width: 750px) 1440px, 100vw'
        src={BgPeople}
        alt=''
        role='none'
      />
      <BannerLeft tabIndex={0}>
        <h2>Is there anyone else you would want us to add?</h2>
      </BannerLeft>
      <BannerRight tabIndex={0}>
        <button>Submit a name</button>
      </BannerRight>
    </Banner>
  )
}

export default BannerBottom
