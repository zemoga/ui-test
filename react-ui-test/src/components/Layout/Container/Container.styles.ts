import styled from 'styled-components'

export const ContainerWrapper = styled.div`
  display: contents;

  @media (${({ theme }) => theme.device.desktop}) {
    position: relative;
    display: block;
    width: 100vw;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;

    > *,
    > hr[role='separator'] {
      margin-right: 0;
      margin-left: 0;
    }

    main[role="main"] {
      padding: 0;
      margin-right: 0;
      margin-left: 0;
    }
  }
`
