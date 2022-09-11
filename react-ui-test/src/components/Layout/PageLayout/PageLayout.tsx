import Separator from '../../UI/Separator/Separator'
import Navigation from '../../UI/Navigation/Navigation'
import Footer from '../../Footer/Footer'
import Container from '../Container/Container'

const PageLayout = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <Separator />
      </Container>
      <Footer />
    </div>
  )
}

export default PageLayout
