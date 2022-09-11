import Separator from '../../UI/Separator/Separator'
import Header from '../../Header/Header'
import Navigation from '../../UI/Navigation/Navigation'
import Footer from '../../Footer/Footer'
import Container from '../Container/Container'

const PageLayout = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Container>
        <Separator />
      </Container>
      <Footer />
    </div>
  )
}

export default PageLayout
