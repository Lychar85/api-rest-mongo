import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImgVoyage from '../assets/img-voyage.jpg';
import Footer from '../components/Footer';
const Accueil = () =>{
    return(
        <div className="Accueil">
            <Header/>
              
        <div className="Header-home"></div>

          <Container fluid className="cardVoyage">
        <Container className="number-launche">
           <ul className="list-number">
               <li>
                   <h1>8</h1>
                   <p>Lancements</p>
               </li>

               <li>
                   <h1>32</h1>
                   <p>Passagers</p>
               </li>

               <li>
                   <h1>6</h1>
                   <p>Destinations</p>
               </li>
           </ul>
        </Container>

        <Container fluid className="contenu-page-accueil">
            <Row className="contenu-accueil">
                <Col md="7" xs="12">
                    <h1>Les voyages spaciale.</h1>
                    <p>   Contrary to popular belief, Lorem Ipsum is not simply random text.
                    It has roots in a piece of classical Latin literature from 45 BC,
                    making it over 2000 years old. Richard McClintock, a Latin professor
                    at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                    discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                    (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                    This book is a treatise on the theory of ethics, very popular during the Renaissance.
                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                    comes from a line in section 1.10.32.
                    <a href="/technologie">En savoir plus</a>
            
                    </p>
                </Col>
                <Col md="5" xs="12">
                <img src={ImgVoyage} className="Img-voyage" alt="voyage" width="100%" height="100%"/>
                </Col>
            </Row>
        </Container>
        <Container className="contenu-page-accueil2">
            <Row className="contenu-accueil2">
                <Col md="12">
                <h1>Nos conseil pour votre voyage.</h1>
                    <ul className="list-condition-accueil">
                        <li>dfsfdfdfdfd</li>
                        <li>jkjfdfsd</li>
                        <li>jkjfddvvvvvvvvvvvvfsd</li>
                        <li>jkjfdfsd</li>
                        <li>jkjfdvvvvvvfsd</li>
                        <li>jkjfdfsd</li>

                    </ul>
                </Col>
            </Row>
        </Container>

    </Container>

  <Footer/>
        </div>
    )
}

export default Accueil