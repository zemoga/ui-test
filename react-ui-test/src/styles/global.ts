import { createGlobalStyle } from 'styled-components'

interface ThemeTypes {
  theme: any
}

export default createGlobalStyle`
    html, body {
        width: 100%;
        margin: 0;
        background-color: ${({ theme }: ThemeTypes) => theme.colors.colorWhite};
        font-family: 'Lato', sans-serif;
        font-size: 12px;
        font-weight: 400;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        position: relative;
    }
    
    a, a:visited {
        color: ${({ theme }: ThemeTypes) => theme.colors.colorWhite};
    }
    
    button {
        font-family: 'Lato', sans-serif;
    }

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    
    hr[role="separator"] {
        border: 0 none;
        border-bottom: 2px dotted ${({ theme }: ThemeTypes) => theme.colors.colorDarkGray};
        margin: 1.5rem 1rem;
    }

    main[role="main"] {
        padding: 0 1rem;
        margin-top: 2rem;
    }
    
    main h2,
    main h3,
    main h4 {
        color: var(--color-dark-gray);
        font-weight: 300;
    }
    
    main h2 {
        margin: 0 0 2rem;
        font-size: 2rem;
    }
    
    @media (${({ theme }: ThemeTypes) => theme.device.tablet}) {
        html, body {
            font-size: 14px;
        }
    }

    @media (${({ theme }: ThemeTypes) => theme.device.desktop}) {
        html, body {
            font-size: 18px;
        }

        main h2 {
            font-size: 2.5rem;
        }
    }
`
