import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          <div className='info'>
            <h1>
              job <span>tracking</span> App
            </h1>
            <p>
              I'm baby listicle bespoke af 8-bit, intelligentsia vice
              post-ironic ramps vaporware YOLO. Iceland chicharrones fashion axe
              PBR&B ethical air plant mumblecore, gochujang church-key hell of
              palo santo pinterest mustache organic. Single-origin coffee
              sartorial deep v vexillologist yr, chicharrones copper mug. Pug
              readymade raclette heirloom thundercats VHS occupy snackwave.
            </p>
            <Link to='/register' className='btn btn-hero'>
              Login / Register
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </main>
    </Wrapper>
  )
}

export default Landing
