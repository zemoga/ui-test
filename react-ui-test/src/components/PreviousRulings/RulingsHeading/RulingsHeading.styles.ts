import styled from 'styled-components'

export const RulingsHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (${({ theme }) => theme.device.tablet}) {
  }
`
export const HeadingTitle = styled.h2`
  font-size: 2rem;
  line-height: 2.4rem;
  margin: 0;

  color: ${({ theme }) => theme.colors.colorDarkGray}; 

  @media (${({ theme }) => theme.device.tablet}) {
    font-size: 1.714rem;
    line-height: 2.057rem;
  }

  @media (${({ theme }) => theme.device.desktop}) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
`

export const HeadingControl = styled.select`
  -webkit-appearance: none;
  font-size: 0.75rem;
  line-height: 0.75rem;
  color: ${({ theme }) => theme.colors.colorDarkGray}; 
  margin: 0;
  text-align: center;
  border: 2px solid  ${({ theme }) => theme.colors.colorDarkerGray}; 
  max-width: 173px;
  height: 36px;
  width: 100%;
  border-radius: 0;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAR9JREFUaEPtmE0KwjAQhSe68RoFz+IFPKngebrwGIKMRFCq9ieT99ImMFmWdPi+99JFE6TxFRrnFxfYukFvwBsAE/AjBAYIv+4NwBGCA7wBMED49XDsupM+9CJBDvC0FQeo6l1kf34dodYk3vD9rb9+voFWJIbwMfyvj7h2iV/4P4Gaj9MY/KhAjRJT8JMCNUnMwc8K1CCxBL8osKVECnySwBYSqfDJAmtKWOBNAmtIWOHNAiUlcuCzBEpI5MJnCzAlEHhIgCGBwsMCiAQDniKQI8GCpwlYJJjwVIEUCTY8XWBOogR8EYExiVLwxQSGEiq6i7cH8Qc8Pmcvv9hiJ2qd5w1YE2Pv9wbYiVrneQPWxNj7vQF2otZ53oA1Mfb+J+/YDu6yswfpAAAAAElFTkSuQmCC');
  background-repeat: no-repeat;
  background-size: 10.5px;
  background-position: 93% center;
  display: none;

  &:focus {
    outline: none;
  }

  option {
    border: 2px solid  ${({ theme }) => theme.colors.colorDarkerGray}; 
  }

  @media (${({ theme }) => theme.device.tablet}) {
    display: flex;
  }

  @media (${({ theme }) => theme.device.desktop}) {
    
  }
`