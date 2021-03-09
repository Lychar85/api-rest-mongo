import Header from '../components/Header';
import Footer from '../components/Footer';
import FormConnexion from '../components/formulaire/Form_connexion'
const Connexion = () =>{
    return(
        <div className="Login-page">
            <Header/>
            <div className="Login">
                <FormConnexion/>

            </div>



            
            <Footer/>
        </div>
    )
}

export default Connexion