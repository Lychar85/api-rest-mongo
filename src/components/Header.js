import Navigation from './navigation/Navigation';
import Logo from '../assets/SpaceVision_logo2.png'
const Header = () =>{
    return(
      <div className="Header">
        <div className="logo">
        
          <img src={Logo} alt="Logo" width="8%" height="8%"/>
          <Navigation/>
          <div className="navigationLogin">
            <a href="/connexion" className="login">Se connecter</a>
          </div>
          
        </div>
        
        
      </div>
    )
}

export default Header