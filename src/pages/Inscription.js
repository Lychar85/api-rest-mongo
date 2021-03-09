import Header from '../components/Header';
import Footer from '../components/Footer'; 
import FormInscription from '../components/formulaire/Form_Inscription';


const Inscription = () =>{
    return(
        <div className="Login-page">
            <Header/>
            <div className="Login">
                <FormInscription/>
            </div>



            
            <Footer/>
        </div>
    )
}

export default Inscription