export type ThemeTypes = {
  colors: {
    colorYellowNegative: string
    colorGreenPositive: string
    colorDarkBackground: string
    colorDarkerBackground: string
    colorDarkerGray: string
    colorDarkGray: string
    colorLightGray: string
    colorLightBackground: string
    colorLighterBackground: string
    colorWhite: string
    colorBlack: string
  },
  device: {
    small: string
    custom500: string
    tablet: string
    desktop: string
  },
  mixins: object,
}

const theme:ThemeTypes = {
  colors: {
    colorYellowNegative: '249, 173, 29',
    colorGreenPositive: '60, 187, 180',
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
    custom500: 'min-width: 500px',
    tablet: 'min-width: 768px',
    desktop: 'min-width: 1100px',
  },
  mixins: {},
}

const mixins = {
  iconButton: `
    padding: 0;
    border: 0;
    background-color: transparent;

    &[aria-label="thumbs up"] {
      background-color: rgba(${theme.colors.colorGreenPositive}, .8);
    }

    &[aria-label="thumbs up"]:hover {
      background-color: rgba(${theme.colors.colorGreenPositive}, 1);
    }

    &[aria-label="thumbs down"] {
      background-color: rgba(${theme.colors.colorYellowNegative}, .8);
    }

    &[aria-label="thumbs down"]:hover {
      background-color: rgba(${theme.colors.colorYellowNegative}, 1);
    }

    > img {
      width: 100%;
      height: 100%;
    }
  `,
  banner: `
    position: relative;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    margin: 1rem;
    background-color: ${theme.colors.colorLightGray};

    @media all and (${theme.device.desktop}) {
      margin-right: 0;
      margin-left: 0;
    }
  `,
}

export default {
  ...theme,
  mixins: { ...mixins },
}
