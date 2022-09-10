import { ContainerWrapper } from './Container.styles'

interface ContainerTypes {
  children: React.ReactNode
}

const Container = ({ children }: ContainerTypes) => {
  return <ContainerWrapper>{children}</ContainerWrapper>
}

export default Container
