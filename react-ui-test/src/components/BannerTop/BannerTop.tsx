import { Banner, BannerLeft, BannerRight, BannerButton } from './BannerTop.styles'

const BannerTop = () => {
  return (
    <Banner role='doc-tip' aria-label='Speak Out' tabIndex={0}>
      <BannerLeft>
        <span>Speak out. Be heard.</span>
        <span>Be counted</span>
      </BannerLeft>
      <BannerRight>
        <p>
          Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can
          speak out and speak freely. It&lsquo;s easy: You share your opinion, we analyze and put
          the data in a public report.
        </p>
      </BannerRight>
      <BannerButton aria-label='close'>
        <svg width='20' height='20' xmlns='http://www.w3.org/2000/svg'>
          <g stroke='#000' strokeWidth='2' fill='none' fillRule='evenodd'>
            <path d='M1 19L19 1M1 1l18 18' />
          </g>
        </svg>
      </BannerButton>
    </Banner>
  )
}

export default BannerTop
