import {
  Nav,
  NavLogo,
  NavHamburguer,
  NavLinks,
  NavSearchInput,
  NavSearchButton,
} from './Navigation.styles'
import Container from '../../Layout/Container/Container'
import SearchIcon from '../../../styles/img/search.svg'

const Navigation = () => {
  return (
    <Nav role='navigation'>
      <Container>
        <NavLogo tabIndex={0}>Rule of thumb.</NavLogo>

        <NavHamburguer name='Open Menu' className='icon-button'>
          <svg width='25' height='20' xmlns='http://www.w3.org/2000/svg'>
            <path d='M0 0h25v4H0V0zm0 8h25v4H0V8zm0 8h25v4H0v-4z' fill='#FFF' fillRule='nonzero' />
          </svg>
        </NavHamburguer>
        <NavLinks>
          <li role="presentation">
            <a role="menuitem" href='#'>Past Trials</a>
          </li>
          <li role="presentation">
            <a role="menuitem" href='#'>How It Works</a>
          </li>
          <li role="presentation">
            <a role="menuitem" href='#'>Login / Sign Up</a>
          </li>
          <li role="menuitem">
            <NavSearchInput aria-label='search' type='text' />
            <NavSearchButton name='Search' type='submit'>
              <img src={SearchIcon} alt='search' />
            </NavSearchButton>
          </li>
        </NavLinks>
      </Container>
    </Nav>
  )
}

export default Navigation
