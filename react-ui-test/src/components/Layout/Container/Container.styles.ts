import styled from 'styled-components';

export const ContainerWrapper = styled.div`
    width: 100%;
    @media (min-width: ${({theme})=> theme.device.desktop}){
        max-width: 1100px;
        margin: 0 auto;
    }
`