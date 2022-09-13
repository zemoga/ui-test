import Separator from '../../UI/Separator/Separator'
import Header from '../../Header/Header'
import Navigation from '../../UI/Navigation/Navigation'
import BannerTop from '../../BannerTop/BannerTop'
import PreviousRulings from '../../PreviousRulings/PreviousRulings';
import BannerBottom from '../../BannerBottom/BannerBottom'
import Footer from '../../Footer/Footer'
import Container from '../Container/Container'

const PageLayout = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Container>
        <BannerTop />
        <main>
          <PreviousRulings />
        </main>
        <BannerBottom />
        <Separator />
      </Container>
      <Footer />
    </div>
  )
}

export default PageLayout
