import Footer from '../../components/Footer'; 
import Header from '../../components/Header';
import Navigation_profil from '../../components/navigation/Navigation_profil';
import ProfilReservation from '../../components/profil/Profil_reservation'
import { Container } from 'react-bootstrap';

const Profil_Reservation = () =>{
    return(
        <div className="Profil">
            <Header/>
            <Container className="Profil-content">
            <Navigation_profil/>

                <Container fluid className="Profil_Reservation-content">
                    <ProfilReservation/>
                </Container>

            </Container>

            <Footer/>
        </div>
    )
}

export default Profil_Reservation