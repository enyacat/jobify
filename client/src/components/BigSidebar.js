import Wrapper from '../assets/wrappers/BigSidebar'
import { useAppContext } from '../context/appContext'
import NavLinks from './NavLinks'
import Logo from './Logo'
const BigSidebar = () => {
  const { showSidebar } = useAppContext()
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <header>
          <Logo />
        </header>
        <NavLinks />
      </div>
    </Wrapper>
  )
}
export default BigSidebar
