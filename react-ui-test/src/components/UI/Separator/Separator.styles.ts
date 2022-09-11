import styled from 'styled-components'

export const HorizontalLine = styled.hr`
  &[role='separator'] {
    border: 0 none;
    border-bottom: 2px dotted ${({ theme }) => theme.colors.colorDarkGray};
    margin: 1.5rem 1rem;
  }

  @media (${({ theme }) => theme.device.desktop}) {
    &[role='separator'] {
      margin: 2rem 0;
    }
  }
`
