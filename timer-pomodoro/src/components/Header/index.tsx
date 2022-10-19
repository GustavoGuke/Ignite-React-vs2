import { RocketLaunch, Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <span>
        <RocketLaunch size={30} color="green" />
      </span>
      <nav>
        <NavLink to="/" title="Timer" end>
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
