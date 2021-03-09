import Header from '../components/Header';
import Footer from '../components/Footer';
import PlaneteCard from '../components/pages/PlaneteCard';
import {Col, Row, Container} from 'react-bootstrap';

const Destination = () =>{
    return(
        <div className="Destination">
            <Header/>

            <div className="header-destination">
                <h1>Vivez une expérience incroyable !</h1>
            </div>

            <Container fluid className="planete-container">
                <Row>
                    <Col md="4" xs="12">
                        <PlaneteCard/>
                    </Col>

                    <Col md="4" xs="12">
                        <PlaneteCard/>
                    </Col>

                    <Col md="4" xs="12">
                        <PlaneteCard/>
                    </Col>

                    <Col md="4" xs="12">
                        <PlaneteCard/>
                    </Col>

                    <Col md="4" xs="12">
                        <PlaneteCard/>
                    </Col>

                    <Col md="4" xs="12">
                        <PlaneteCard/>
                    </Col>
                    
                </Row>
            </Container>

            <Footer/>
        </div>
    )
}

export default Destination