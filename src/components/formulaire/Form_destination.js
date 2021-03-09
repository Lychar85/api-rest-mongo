import {Button, Container, Form,} from 'react-bootstrap';

const FormDestination = () =>{
    return(
        <Container className="container-FormDestination">
                        <Form className="form-FormDestination">
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Destination</Form.Label>
                                <select>
                                    <option value="Mars">Mars</option>
                                    <option value="Jupiter">Jupiter</option>
                                    <option value="Saturne">Saturne</option>
                                    <option value="Lune">Lune</option>
                                </select>
                            </Form.Group>

                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Date de départ</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>

                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Nombre de personnes</Form.Label>
                                <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Réservez
                            </Button>
                        </Form>
                </Container>


    )
}

export default FormDestination