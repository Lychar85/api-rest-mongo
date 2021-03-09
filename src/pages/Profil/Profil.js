import Footer from '../../components/Footer'; 
import Header from '../../components/Header';
import Navigation_profil from '../../components/navigation/Navigation_profil';
import ProfilInfo from '../../components/profil/Profil_info';
import { Container } from 'react-bootstrap';

const Profil = () =>{
    return(
        <div className="Profil">
            <Header/>
            <Container className="Profil-content">
            <Navigation_profil/>

                <Container fluid className="Profil_Information-content">
                    <ProfilInfo/>
                </Container>

            </Container>

            <Footer/>
        </div>
    )
}

export default Profil