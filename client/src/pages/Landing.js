import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <img src={logo} alt='jobify' className='logo' />
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
            <button className='btn btn-hero'>Login/Register</button>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </main>
    </Wrapper>
  );
};

export default Landing;
