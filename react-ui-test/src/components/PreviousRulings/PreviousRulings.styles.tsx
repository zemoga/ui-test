import styled from 'styled-components'

export const RulingsGrid = styled.div<{ isListMode?: boolean }>`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);

  @media (${({ theme }) => theme.device.tablet}) {
    grid-template-columns: repeat(${(props) => (props.isListMode ? '1' : '2')}, 1fr);
    justify-items: ${(props) => (props.isListMode ? 'initial' : 'center')};
  }

  @media (${({ theme }) => theme.device.desktop}) {
    grid-template-columns: repeat(${(props) => (props.isListMode ? '1' : '3')}, 1fr);
    justify-items: ${(props) => (props.isListMode ? 'initial' : 'center')};
  }
`
