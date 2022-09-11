const theme = {
  colors: {
    colorYellowNegative: 'rgb(249, 173, 29)',
    colorGreenPositive: 'rgb(60, 187, 180)',
    colorDarkBackground: 'rgba(0, 0, 0, .4)',
    colorDarkerBackground: 'rgba(0, 0, 0, .6)',
    colorDarkerGray: 'rgba(51, 51, 51, 1)',
    colorDarkGray: 'rgba(70, 70, 70, 1)',
    colorLightGray: 'rgba(235, 235, 235, 1)',
    colorLightBackground: 'rgba(255, 255, 255, .4)',
    colorLighterBackground: 'rgba(255, 255, 255, .8)',
    colorWhite: 'rgba(255, 255, 255, 1)',
    colorBlack: 'rgba(0, 0, 0, 1)',
  },
  device: {
    small: 'min-width: 375px',
    tablet: 'min-width: 768px',
    desktop: 'min-width: 1100px',
  },
  mixins : {
    iconButton: `
      padding: 0;
      border: 0;
      background-color: transparent;
  
      &[aria-label="thumbs up"] {
        background-color: rgba(var(--color-green-positive), .8);
      }
  
      &[aria-label="thumbs up"]:hover {
        background-color: rgba(var(--color-green-positive), 1);
      }
  
      &[aria-label="thumbs down"] {
        background-color: rgba(var(--color-yellow-negative), .8);
      }
  
      &[aria-label="thumbs down"]:hover {
        background-color: rgba(var(--color-yellow-negative), 1);
      }
  
      > img {
        width: 100%;
        height: 100%;
      }
    `,
  }
}

export default theme;